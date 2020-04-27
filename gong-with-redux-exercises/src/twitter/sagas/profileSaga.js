import {takeLatest, put, select, call} from 'redux-saga/effects';
import {getProfiles, setProfiles} from "../loaders/loadProfiles";
import {INIT_PROFILES, SET_PROFILES} from "../actions/profilesActions";
import {SET_PROFILE, UPDATE_PROFILE} from "../actions/loginActions";
import {getStateCurrentUser, getStateProfiles} from "../selectors/twitterSelectors";

function* setProfilesStores(profiles) {

    yield call(setProfiles, profiles);

    yield put({
        type: SET_PROFILES,
        payload: {
            profiles: [...profiles]
        }
    });
}

function* setCurrentProfileStores(profile) {
    yield put({
        type: SET_PROFILE,
        payload: {
            profile
        }
    });
}

function* initProfile() {

    const profiles = getProfiles();
    yield put({
        type: SET_PROFILES,
        payload: {
            profiles
        }
    });
}

function* updateProfile(action) {
    const {profile} = action.payload;

    const profiles = yield select(getStateProfiles);
    const currentUser = yield select(getStateCurrentUser);

    const newProfile = Object.assign({}, currentUser);
    newProfile.name = profile.name;
    newProfile.mention = profile.mention;
    newProfile.description = profile.description;

    const index = profiles.findIndex((p) => p.id === newProfile.id);
    profiles[index] = newProfile;

    yield setProfilesStores(profiles);
    yield setCurrentProfileStores(newProfile);
}

export default function* root() {
    yield takeLatest(INIT_PROFILES, initProfile);
    yield takeLatest(UPDATE_PROFILE, updateProfile);
}
