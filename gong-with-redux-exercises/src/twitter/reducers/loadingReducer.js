import {SET_LOADING, START_LOADING, STOP_LOADING} from '../actions/loadingActions';

export default function userReducer(state = true, action) {
    const payload = action.payload;

    switch (action.type) {
        case START_LOADING:
            return true;

        case STOP_LOADING:
            return false;

        case SET_LOADING:
            return payload.showLoading;

        default:
            return state;
    }
}