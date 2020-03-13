import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';



import './index.css';
import App from './App';
import mainReducer from './store/reducers/menu';
import countReducer from './store/reducers/count';
import saveReducer from './store/reducers/save';
import authReducer from './store/reducers/auth';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    menu: mainReducer,
    counter: countReducer,
    save: saveReducer,
    auth: authReducer
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const app = (

    <Provider store={store}>

        <BrowserRouter>

            <App />

        </BrowserRouter>

    </Provider>
    

);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
