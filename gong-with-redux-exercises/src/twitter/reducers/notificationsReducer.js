import {SET_NOTIFICATIONS} from '../actions/notificationsActions';

export default function notificationsReducer(state = [], action) {
    switch (action.type) {
        case SET_NOTIFICATIONS:
            return action.payload.notifications;

        default:
            return state;
    }
}