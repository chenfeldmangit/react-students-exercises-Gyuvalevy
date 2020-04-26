import {SET_NOTIFICATIONS} from '../actions/notificationsActions';
import {getNotifications} from "../loaders/loadNotifications";

const initialState = getNotifications() || [];

export default function notificationsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return initialState;

        default:
            return state;
    }
}