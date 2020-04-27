import {call, put, select, takeLatest} from 'redux-saga/effects';
import {getTweets, setTweets} from "../loaders/loadTweets";
import {ADD_TWEET, INIT_TWEETS, REMOVE_TWEET, REPLACE_TWEET, SET_TWEETS} from "../actions/tweetsActions";
import {getStateTweets} from "../selectors/twitterSelectors";

function* initTweets() {
    const tweets = getTweets();

    yield put({
        type: SET_TWEETS,
        payload: {
            tweets: [...tweets]
        }
    });
}

function* setTweetsStore(tweets) {

    yield call(setTweets, tweets);

    yield put({
        type: SET_TWEETS,
        payload: {
            tweets: [...tweets]
        }
    });
}

function* deleteTweets(action) {
    const {tweet} = action.payload;

    const tweets = yield select(getStateTweets);
    const filteredTweets = tweets.filter((t) => t.key !== tweet.key);

    yield setTweetsStore(filteredTweets);
}

function* replaceTweet(action) {
    const {tweet} = action.payload;

    const tweets = yield select(getStateTweets);
    const index = tweets.findIndex((t) => t.key === tweet.key);
    tweets[index] = {...tweet};

    yield setTweetsStore(tweets);
}

function* addTweet(action) {
    const {tweet} = action.payload;

    const tweets = yield select(getStateTweets);
    tweets.splice(0, 0, tweet);

    yield setTweetsStore(tweets);
}


export default function* root() {
    yield takeLatest(INIT_TWEETS, initTweets);
    yield takeLatest(REMOVE_TWEET, deleteTweets);
    yield takeLatest(REPLACE_TWEET, replaceTweet);
    yield takeLatest(ADD_TWEET, addTweet);
}
