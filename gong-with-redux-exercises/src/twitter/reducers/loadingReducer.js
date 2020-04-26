import {SET_LOADING} from '../actions/loadingActions';

const initialState = true;

export default function userReducer(state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_LOADING:
            return payload.showLoading;

        default:
            return state;
    }
}