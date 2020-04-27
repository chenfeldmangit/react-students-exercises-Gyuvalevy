import {takeLatest, put, select, call} from 'redux-saga/effects';
import {getNotifications, setNotifications} from "../loaders/loadNotifications";
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATIONS,
    INIT_NOTIFICATIONS,
    SET_NOTIFICATIONS
} from "../actions/notificationsActions";
import {getStateNotifications} from "../selectors/twitterSelectors";

function* setNotificationsStores(notifications) {

    yield call(setNotifications, notifications);

    yield put({
        type: SET_NOTIFICATIONS,
        payload: {
            notifications: [...notifications]
        }
    });
}

function* initNotifications() {

    const notifications = getNotifications();
    yield put({
        type: SET_NOTIFICATIONS,
        payload: {
            notifications
        }
    });
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
    yield takeLatest(INIT_NOTIFICATIONS, initNotifications);
    yield takeLatest(ADD_NOTIFICATION, addNotification);
    yield takeLatest(DELETE_NOTIFICATIONS, deleteNotifications);
}
