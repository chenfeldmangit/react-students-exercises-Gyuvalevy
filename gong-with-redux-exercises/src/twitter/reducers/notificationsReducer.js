import {ADD_NOTIFICATION, SET_NOTIFICATIONS} from '../actions/notificationsActions';
import {getNotifications, setNotifications} from "../loaders/loadNotifications";

const initialState = getNotifications() || [];

export default function notificationsReducer(state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_NOTIFICATIONS:
            return initialState;

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