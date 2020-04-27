import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import notificationsReducer from './reducers/notificationsReducer';
import loadingReducer from "./reducers/loadingReducer";
import tweetsReducer from "./reducers/tweetsReducer";
import rootSaga from "./sagas/rootSaga";

const combinedReducers = combineReducers({
    profiles: usersReducer,
    notifications: notificationsReducer,

    currentUserDetails: userReducer,
    showLoading: loadingReducer,
    tweets: tweetsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combinedReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;