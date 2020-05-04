import {call, put, select, takeLatest} from 'redux-saga/effects';
import {getTweets, setTweets} from "../loaders/loadTweets";
import {getStateCurrentUser, getStateTweets} from "../selectors/twitterSelectors";
import {
    ADD_TWEET,
    COMMENT_TWEET, INIT_TWEETS_FINISH,
    INIT_TWEETS_START,
    LIKE_TWEET,
    REMOVE_TWEET,
    RETWEET_TWEET,
    SET_TWEETS
} from "../actions/tweetsActions";
import {
    NOTIFICATION_ACTION_TYPE_COMMENT,
    NOTIFICATION_ACTION_TYPE_LIKE,
    NOTIFICATION_ACTION_TYPE_RETWEET,
    NOTIFICATION_ACTION_TYPE_TWEET
} from "../Shapes/NotificationAction";
import {ADD_NOTIFICATION, DELETE_NOTIFICATIONS} from "../actions/notificationsActions";
import {getId} from "../util";
import {START_LOADING, STOP_LOADING} from "../actions/loadingActions";

function* initTweets() {
    try {
        const tweets = yield call(getTweets);
        yield put({type: SET_TWEETS, payload: {tweets: [...tweets]}});
        yield put({type: INIT_TWEETS_FINISH, payload: {result: true}});
    } catch (e) {
        yield put({type: INIT_TWEETS_FINISH, payload: {result: false, error: e}});
    }
}

function* setTweetsStores(tweets) {
    yield call(setTweets, tweets);
    yield put({type: SET_TWEETS, payload: {tweets: [...tweets],},});
}

function* notify(tweetKey, notificationAction) {
    const currentUser = yield select(getStateCurrentUser);

    yield put({
        type: ADD_NOTIFICATION,
        payload: {
            notification: {
                key: getId(),
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
    yield put({type: START_LOADING});

    const currentUser = yield select(getStateCurrentUser);

    let now = new Date();
    const tweet = {
        key: getId(),
        profileId: currentUser.id,
        comments: 0,
        retweets: 0,
        likes: 0,
        postTime: now.toDateString() + ', ' + now.toLocaleTimeString(),
        postContent: action.payload.content,
    };

    const actionOnTweets = (tweets, tweet) => {
        tweets.splice(0, 0, tweet);
        return tweets;
    };

    yield replaceTweet(tweet, actionOnTweets, NOTIFICATION_ACTION_TYPE_TWEET);
    yield put({type: STOP_LOADING});
}


export default function* root() {
    yield takeLatest(INIT_TWEETS_START, initTweets);
    yield takeLatest(REMOVE_TWEET, deleteTweets);
    yield takeLatest(LIKE_TWEET, likeTweet);
    yield takeLatest(RETWEET_TWEET, retweetTweet);
    yield takeLatest(COMMENT_TWEET, commentTweet);
    yield takeLatest(ADD_TWEET, addTweet);
}
