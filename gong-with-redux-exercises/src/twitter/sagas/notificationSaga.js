import {takeLatest, put, select, call} from 'redux-saga/effects';
import {getNotifications, setNotifications} from "../loaders/loadNotifications";
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATIONS, INIT_NOTIFICATIONS_FINISH,
    INIT_NOTIFICATIONS_START,
    SET_NOTIFICATIONS
} from "../actions/notificationsActions";
import {getStateNotifications} from "../selectors/twitterSelectors";

function* setNotificationsStores(notifications) {
    yield call(setNotifications, notifications);
    yield put({type: SET_NOTIFICATIONS, payload: {notifications: [...notifications]}});
}

function* initNotifications() {


    try {
        const notifications = yield call(getNotifications);
        yield put({type: SET_NOTIFICATIONS, payload: {notifications}});
        yield put({type: INIT_NOTIFICATIONS_FINISH, payload: {result: true}});
    } catch (e) {
        yield put({type: INIT_NOTIFICATIONS_FINISH, payload: {result: false, error: e}});
    }
}

function* addNotification(action) {
    const {notification} = action.payload;

    const notifications = yield select(getStateNotifications);
    notifications.splice(0, 0, notification);

    yield setNotificationsStores(notifications);
}

function* deleteNotifications(action) {
    const {tweetKey} = action.payload;

    let notifications = yield select(getStateNotifications);
    const newNotifications = notifications.filter(notification => notification.tweetId !== tweetKey);

    yield setNotificationsStores(newNotifications);
}


export default function* root() {
    yield takeLatest(INIT_NOTIFICATIONS_START, initNotifications);
    yield takeLatest(ADD_NOTIFICATION, addNotification);
    yield takeLatest(DELETE_NOTIFICATIONS, deleteNotifications);
}
