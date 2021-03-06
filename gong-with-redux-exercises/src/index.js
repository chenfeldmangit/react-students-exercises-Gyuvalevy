import React from 'react';
import ReactDOM from 'react-dom';
import store from './twitter/store';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import AppContainer from "./twitter/AppContainer";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
