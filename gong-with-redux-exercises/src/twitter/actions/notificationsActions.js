export const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION ';

export function setNotifications() {
    return {
        type: SET_NOTIFICATIONS,
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