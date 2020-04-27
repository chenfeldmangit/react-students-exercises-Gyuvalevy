import {takeLatest, put} from 'redux-saga/effects';
import {getNotifications} from "../loaders/loadNotifications";
import {INIT_NOTIFICATIONS, SET_NOTIFICATIONS} from "../actions/notificationsActions";

function* initNotifications() {

    const notifications = getNotifications();
    yield put({
        type: SET_NOTIFICATIONS,
        payload: {
            notifications
        }
    });
}

export default function* root() {
    yield takeLatest(INIT_NOTIFICATIONS, initNotifications);
}
