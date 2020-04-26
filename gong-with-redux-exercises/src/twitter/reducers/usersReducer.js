import {SET_PROFILES} from '../actions/profilesActions';
import {getProfiles} from '../loaders/loadProfiles'

const initialState = getProfiles() || [];

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILES:
            return initialState;

        default:
            return state;
    }
}