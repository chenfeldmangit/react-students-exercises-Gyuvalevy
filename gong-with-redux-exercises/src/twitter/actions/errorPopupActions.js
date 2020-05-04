export const SHOW_ERROR_POPUP = 'SHOW_ERROR_POPUP';
export const CLOSE_ERROR_POPUP = 'CLOSE_ERROR_POPUP';

export function showErrorPopup(errorMessage) {
    return {
        type: SHOW_ERROR_POPUP,
        payload: {
            errorMessage,
        }
    };
}

export function closeErrorPopup() {
    return {
        type: CLOSE_ERROR_POPUP,
    };
}

