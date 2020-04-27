import {call, put, select, takeLatest} from 'redux-saga/effects';
import {getTweets, setTweets} from "../loaders/loadTweets";
import {getStateCurrentUser, getStateTweets} from "../selectors/twitterSelectors";
import {
    ADD_TWEET,
    COMMENT_TWEET,
    INIT_TWEETS,
    LIKE_TWEET,
    REMOVE_TWEET,
    RETWEET_TWEET,
    SET_TWEETS
} from "../actions/tweetsActions";
import {
    NOTIFICATION_ACTION_TYPE_COMMENT,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_RETWEET
} from "../Shapes/NotificationAction";
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATIONS
} from "../actions/notificationsActions";

function* initTweets() {
    const tweets = getTweets();

    yield put({
        type: SET_TWEETS,
        payload: {
            tweets: [...tweets]
        }
    });
}

function* setTweetsStores(tweets) {

    yield call(setTweets, tweets);

    yield put({
        type: SET_TWEETS,
        payload: {
            tweets: [...tweets],
        },
    });
}

function* notify(tweetKey, notificationAction) {
    const currentUser = yield select(getStateCurrentUser);

    yield put({
        type: ADD_NOTIFICATION,
        payload: {
            notification: {
                key: Math.floor(Math.random() * 100000),
                tweetId: tweetKey,
                action: notificationAction,
                byId: [currentUser.id],
            }
        },
    });
}

function* replaceTweet(tweet, actionOnTweets, notificationAction) {
    const tweets = yield select(getStateTweets);
    const newTweets = actionOnTweets(tweets, tweet);
    yield setTweetsStores(newTweets);

    if (notificationAction) {
        yield notify(tweet.key, notificationAction);
    }
}

function* deleteTweets(action) {

    const actionOnTweets = (tweets, tweet) =>
        tweets.filter((t) => t.key !== tweet.key);

    yield replaceTweet(action.payload.tweet, actionOnTweets);
    yield put({type: DELETE_NOTIFICATIONS, payload: {tweetKey: action.payload.tweet.key}});
}

function* likeTweet(action) {

    const actionOnTweets = (tweets, tweet) => {
        const index = tweets.findIndex((t) => t.key === tweet.key);
        const newTweet = {...tweet};
        newTweet.likes++;
        tweets[index] = newTweet;
        return tweets;
    };

    yield replaceTweet(action.payload.tweet, actionOnTweets, NOTIFICATION_ACTION_TYPE_LIKE);
}

function* retweetTweet(action) {

    const actionOnTweets = (tweets, tweet) => {
        const index = tweets.findIndex((t) => t.key === tweet.key);
        const newTweet = {...tweet};
        newTweet.retweets++;
        tweets[index] = newTweet;
        return tweets;
    };

    yield replaceTweet(action.payload.tweet, actionOnTweets, NOTIFICATION_ACTION_TYPE_RETWEET);
}

function* commentTweet(action) {
    const actionOnTweets = (tweets, tweet) => {
        const index = tweets.findIndex((t) => t.key === tweet.key);
        const newTweet = {...tweet};
        newTweet.comments++;
        tweets[index] = newTweet;
        return tweets;
    };

    yield replaceTweet(action.payload.tweet, actionOnTweets, NOTIFICATION_ACTION_TYPE_COMMENT);
}

function* addTweet(action) {
    const {tweet} = action.payload;

    const tweets = yield select(getStateTweets);
    tweets.splice(0, 0, tweet);

    yield setTweetsStores(tweets);
}


export default function* root() {
    yield takeLatest(INIT_TWEETS, initTweets);
    yield takeLatest(REMOVE_TWEET, deleteTweets);
    yield takeLatest(LIKE_TWEET, likeTweet);
    yield takeLatest(RETWEET_TWEET, retweetTweet);
    yield takeLatest(COMMENT_TWEET, commentTweet);
    yield takeLatest(ADD_TWEET, addTweet);
}
