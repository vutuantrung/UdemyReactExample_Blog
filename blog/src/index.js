import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(
    (req) => {
        console.log(req);
        // Edit request config (Ex: Add some comments, headers, authorize header...)

        return req;
    },
    (error) => {
        // This error here related to sending the request (Ex: no internet)
        console.log(error);
        return Promise.reject(error);
    });


axios.interceptors.response.use(
    (req) => {
        console.log(req);
        // Edit request configs

        return req;
    },
    (error) => {
        // This error here related to sending the request (Ex: no internet)
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
