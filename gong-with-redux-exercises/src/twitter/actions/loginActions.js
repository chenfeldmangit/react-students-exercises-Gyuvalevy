export const LOGIN_PROFILE = 'TRY_LOGIN';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';
export const SIGN_UP = 'SIGN_UP';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';

export function loginProfile(profile) {
    return {
        type: LOGIN_PROFILE,
        payload: {
            profile
        },
    };
}

export function loginFailed(errorMessage) {
    return {
        type: LOGIN_FAILED,
        payload: {
            errorMessage
        },
    };
}
export function logout() {
    return {
        type: LOGOUT,
    };
}

export function signUp() {
    return {
        type: SIGN_UP,
    };
}

export function updateProfile(profile) {
    return {
        type: UPDATE_PROFILE,
        payload: {
            profile
        },
    };
}
