import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {API_URL, API_DOMAIN, API_VERSION} from 'config/constants';
import {Helmet} from 'react-helmet';
import {App} from 'pages/App';
import Routes from 'pages/Routes';
//
import * as axiosClient from 'utils/api/axiosClient';
import {configureStore} from './store';

export const MOUNT_NODE = document.getElementById('root');

const initialState = {};
const store = configureStore(initialState);

axiosClient.init({store, API_URL, API_DOMAIN, API_VERSION});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Helmet defaultTitle="Quiz">
                <meta name="description" content="Quiz"/>
            </Helmet>
                <App>
                    <Routes/>
                </App>
        </BrowserRouter>
    </Provider>,
    MOUNT_NODE
);
