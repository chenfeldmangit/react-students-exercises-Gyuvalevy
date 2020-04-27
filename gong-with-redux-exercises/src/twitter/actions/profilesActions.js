export const INIT_PROFILES = 'INIT_PROFILES';
export const SET_PROFILES = 'SET_PROFILES';

export function initProfiles() {
    return {
        type: INIT_PROFILES,
    };
}

export function setProfiles(profiles) {
    return {
        type: SET_PROFILES,
        payload: {
            profiles,
        }
    };
}
