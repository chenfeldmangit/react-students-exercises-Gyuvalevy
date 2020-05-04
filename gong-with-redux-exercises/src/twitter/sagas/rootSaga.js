import {put, all, fork} from 'redux-saga/effects';
import {initProfiles} from "../actions/profilesActions";
import tweetSaga from "../sagas/tweetSaga";
import notificationSaga from "./notificationSaga";
import profileSaga from "./profileSaga";
import fetchAppDataSaga from "./fetchAppDataSaga";

function* doOnInit() {
    yield put(initProfiles());
}

export default function* rootSaga() {
    yield all([
        fork(profileSaga),
        fork(tweetSaga),
        fork(notificationSaga),
        fork(fetchAppDataSaga),
        fork(doOnInit),
    ]);
}