import {takeLatest, put} from 'redux-saga/effects';
import {getProfiles} from "../loaders/loadProfiles";
import {INIT_PROFILES, SET_PROFILES} from "../actions/profilesActions";

function* initProfile() {

    const profiles = getProfiles();
    yield put({
        type: SET_PROFILES,
        payload: {
            profiles
        }
    });
}

export default function* root() {
    yield takeLatest(INIT_PROFILES, initProfile);
}
