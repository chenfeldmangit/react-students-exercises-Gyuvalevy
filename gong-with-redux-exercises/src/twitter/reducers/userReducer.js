import {LOGIN_FAILED, LOGIN_PROFILE, LOGOUT, SET_PROFILE} from '../actions/loginActions';

const initialState = {
    currentUser: undefined,
    error: '',
};

export default function userReducer(state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_PROFILE:
        case LOGIN_PROFILE:
            return {
                error: '',
                currentUser: payload.profile,
            };

        case LOGIN_FAILED:
            return {
                error: payload.errorMessage
            };

        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}