import {takeLatest, put, take, all, fork} from 'redux-saga/effects';
import {FETCH_APP_DATA} from "../actions/fetchAppDataActions";
import {START_LOADING, STOP_LOADING} from "../actions/loadingActions";
import {INIT_NOTIFICATIONS_START, INIT_NOTIFICATIONS_FINISH} from "../actions/notificationsActions";
import {INIT_TWEETS_START, INIT_TWEETS_FINISH} from "../actions/tweetsActions";
import {SHOW_ERROR_POPUP} from "../actions/errorPopupActions";

function* initNotifications() {
    yield put({type: INIT_NOTIFICATIONS_START});
}

function* initTweets() {
    yield put({type: INIT_TWEETS_START});
}

function* fetchAppData() {
    yield put({type: START_LOADING});

    yield all([
        fork(initNotifications),
        fork(initTweets),
    ]);

    const [notificationAction, tweetsAction] = yield all([
        take(INIT_NOTIFICATIONS_FINISH),
        take(INIT_TWEETS_FINISH)
    ]);

    const notificationResult = notificationAction.payload.result;
    const tweetResult = tweetsAction.payload.result;

    if (/*!*/!(notificationResult && tweetResult)) {
        const errorMessage =
            'Error loading twitter data: ' +
            (notificationResult ? '' : notificationAction.payload.error) +
            ((!notificationResult && !tweetResult) ? ', ' : '') +
            (tweetResult ? '' : tweetsAction.payload.error);

        yield put({type: SHOW_ERROR_POPUP, payload: {errorMessage}});
    }

    yield put({type: STOP_LOADING});
}


export default function* root() {
    yield takeLatest(FETCH_APP_DATA, fetchAppData);
}
