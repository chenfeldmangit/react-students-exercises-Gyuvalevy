import {takeLatest, put, select, call, all} from 'redux-saga/effects';
import {getProfiles, setProfiles} from "../loaders/loadProfiles";
import {getStateCurrentUser, getStateProfiles} from "../selectors/twitterSelectors";
import {INIT_PROFILES, SET_PROFILES} from "../actions/profilesActions";
import {LOGIN_FAILED, LOGIN_PROFILE, SET_PROFILE, TRY_LOGIN, UPDATE_PROFILE} from "../actions/loginActions";
import {FETCH_APP_DATA} from "../actions/fetchAppDataActions";

function* setProfilesStores(profiles) {
    yield call(setProfiles, profiles);
    yield put({type: SET_PROFILES, payload: {profiles: [...profiles]}});
}

function* setCurrentProfileStores(profile) {
    yield put({type: SET_PROFILE, payload: {profile}});
}

function* tryLoginUser(action) {
    const {username, password} = action.payload;
    const profiles = yield select(getStateProfiles);

    const profile = profiles.find((profile) => (username === profile.username) && (password === profile.password));
    if (profile)
        yield all([
            put({type: LOGIN_PROFILE, payload: {profile}}),
            put({type: FETCH_APP_DATA}),
        ]);
    else
        yield put({type: LOGIN_FAILED, payload: {errorMessage: 'Error logging in'}});
}

function* initProfile() {
    const profiles = yield call(getProfiles);
    yield put({type: SET_PROFILES, payload: {profiles}});
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
    yield takeLatest(TRY_LOGIN, tryLoginUser);
    yield takeLatest(INIT_PROFILES, initProfile);
    yield takeLatest(UPDATE_PROFILE, updateProfile);
}
