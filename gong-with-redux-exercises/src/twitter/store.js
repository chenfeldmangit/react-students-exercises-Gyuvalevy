import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import notificationsReducer from './reducers/notificationsReducer';
import loadingReducer from "./reducers/loadingReducer";
import tweetsReducer from "./reducers/tweetsReducer";

const combinedReducers = combineReducers({
    profiles: usersReducer,
    notifications: notificationsReducer,

    currentUserDetails: userReducer,
    showLoading: loadingReducer,
    tweets: tweetsReducer,
});

const store = createStore(combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;