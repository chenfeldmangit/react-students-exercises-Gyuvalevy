import {SHOW_ERROR_POPUP, CLOSE_ERROR_POPUP} from '../actions/errorPopupActions';

const initState = {
    showError: false,
    errorMessage: ''
}
export default function errorPopupReducer(state = initState, action) {
    const payload = action.payload;

    switch (action.type) {
        case SHOW_ERROR_POPUP:
            return  {
                showError: true,
                errorMessage: payload.errorMessage
            };

        case CLOSE_ERROR_POPUP:
            return initState;

        default:
            return state;
    }
}