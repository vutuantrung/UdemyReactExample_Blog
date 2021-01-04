import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Setup default configurations
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
