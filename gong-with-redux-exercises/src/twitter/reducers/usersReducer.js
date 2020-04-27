import {SET_PROFILES} from '../actions/profilesActions';

export default function usersReducer(state = [], action) {
    const payload = action.payload;

    switch (action.type) {
        case SET_PROFILES:
            return payload.profiles;

        default:
            return state;
    }
}