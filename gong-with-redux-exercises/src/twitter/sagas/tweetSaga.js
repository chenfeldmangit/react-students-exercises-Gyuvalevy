import {takeLatest, put} from 'redux-saga/effects';
import {getTweets} from "../loaders/loadTweets";
import {INIT_TWEETS, SET_TWEETS} from "../actions/tweetsActions";

function* initTweets() {

    const tweets = getTweets();
    yield put({
        type: SET_TWEETS,
        payload: {
            tweets
        }
    });
}

export default function* root() {
    yield takeLatest(INIT_TWEETS, initTweets);
}
