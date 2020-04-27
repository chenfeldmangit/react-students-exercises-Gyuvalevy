import {ADD_NOTIFICATION, SET_NOTIFICATIONS} from '../actions/notificationsActions';
import {setNotifications} from "../loaders/loadNotifications";

export default function notificationsReducer(state = [], action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_NOTIFICATIONS:
            return payload.notifications;

        case ADD_NOTIFICATION: {
            const newNotifications = state.slice();
            newNotifications.splice(0, 0, payload.notification);
            setNotifications(newNotifications);
            return newNotifications;
        }

        default:
            return state;
    }
}