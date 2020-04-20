export const SET_LOADING = 'SET_LOADING';

export function setLoading(showLoading) {
    return {
        type: SET_LOADING,
        payload: {
            showLoading
        },
    };
}
