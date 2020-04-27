import {SET_LOADING} from '../actions/loadingActions';

export default function userReducer(state = true, action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_LOADING:
            return payload.showLoading;

        default:
            return state;
    }
}