export const INIT_NOTIFICATIONS_START = 'INIT_NOTIFICATIONS_START';
export const INIT_NOTIFICATIONS_FINISH = 'INIT_NOTIFICATIONS_FINISH';
export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION ';
export const DELETE_NOTIFICATIONS = 'DELETE_NOTIFICATIONS';

export function initNotificationsStart() {
    return {
        type: INIT_NOTIFICATIONS_START,
    };
}

export function setNotifications() {
    return {
        type: SET_NOTIFICATIONS,
    };
}

export function deleteNotifications(tweetKey) {
    return {
        type: DELETE_NOTIFICATIONS,
        payload: {
            tweetKey,
        }
    };
}

export function addNotification(notification) {
    return {
        type: ADD_NOTIFICATION,
        payload: {
            notification,
        }
    };
}