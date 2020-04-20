import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import loadingReducer from "./reducers/loadingReducer";

const combinedReducers = combineReducers({
    currentUserDetails: userReducer,
    showLoading: loadingReducer,
});

const store = createStore(combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;