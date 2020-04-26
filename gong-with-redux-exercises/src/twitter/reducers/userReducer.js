import {LOGIN_FAILED, LOGIN_PROFILE, LOGOUT, UPDATE_PROFILE} from '../actions/loginActions';
import {replaceProfileById} from "../loaders/loadProfiles";

const initialState = {
    currentUser: undefined,
    error: '',
};

export default function userReducer(state = initialState, action) {
    const payload = action.payload;

    switch (action.type) {
        case UPDATE_PROFILE: {
            const newProfile = Object.assign({}, state.currentUser);
            newProfile.name = action.payload.profile.name;
            newProfile.mention = action.payload.profile.mention;
            newProfile.description = action.payload.profile.description;
            replaceProfileById(newProfile);
            return {
                error: '',
                currentUser: newProfile,
            };
        }

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