import {put, all, fork} from 'redux-saga/effects';
import {initTweets} from "../actions/tweetsActions";
import {initNotifications} from "../actions/notificationsActions";
import {initProfiles} from "../actions/profilesActions";

import tweetSaga from "../sagas/tweetSaga";
import notificationSaga from "./notificationSaga";
import profileSaga from "./profileSaga";

function* doOnInit() {
    yield put(initTweets());
    yield put(initNotifications());
    yield put(initProfiles());
}

export default function* rootSaga() {
    yield all([
        fork(profileSaga),
        fork(tweetSaga),
        fork(notificationSaga),
        fork(doOnInit),
    ]);
}