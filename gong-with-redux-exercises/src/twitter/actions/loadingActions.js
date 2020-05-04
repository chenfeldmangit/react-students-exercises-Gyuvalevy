export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SET_LOADING = 'SET_LOADING';

export function startLoading() {
    return {
        type: START_LOADING,
    };
}

export function stopLoading() {
    return {
        type: STOP_LOADING,
    };
}

export function setLoading(showLoading) {
    return {
        type: SET_LOADING,
        payload: {
            showLoading
        },
    };
}
