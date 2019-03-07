import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router} from 'react-router-dom';
import reducer from './reducers';
import * as ajaxEntities from './ajaxEntities';

// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

import Main from "./components/MainComponent";
import history from './history';

const token = localStorage.getItem('token');
let defaultAjaxInProgress = Object.getOwnPropertyNames(ajaxEntities).filter(a => a !== '__esModule').reduce((acc, curr) => {
    acc[ajaxEntities[curr]] = false;
    return acc;
}, {});

const defaultState = {
    token,
    ajaxInProgress: defaultAjaxInProgress
};

const store = createStore(reducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    localStorage.setItem('token', store.getState().token);
});


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Main/>
        </Router>
    </Provider>,

    document.getElementById('root'));
