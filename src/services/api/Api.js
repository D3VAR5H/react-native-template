import axios from 'axios';
import axiosRetry from 'axios-retry';
import NetInfo from '@react-native-community/netinfo';

// assign url based on build for prod and dev

const server = () => {
    axios.create({
        baseURL: 'http://localhost:8080',
        headers: {
            'Content-Type': 'application/json',
            // "authorization": "Bearer " + token from asyncStorage
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    axiosRetry(axios, {
        retries: 3,
        retryDelay: axiosRetry.exponentialDelay,
        retryCondition: axiosRetry.isRetryableError,
    });

    return axios;
};

// export get and post request interface
export default {
    get: (url, params) => server().get(url, { params }),
    post: (url, data) => server().post(url, data),
    put: (url, data) => server().put(url, data),
    delete: url => server().delete(url),
};

// a function that wraps the apiCalls and handles the no internet connection error else returns the response under the same
// export default {
//     get: (url, params) => {
//         return NetInfo.fetch().then(state => {
//             if (state.isConnected) {
//                 return server().get(url, params);
//             }
//         });
//     },
//     post: (url, data) => {
//         return NetInfo.fetch().then(state => {
//             if (state.isConnected) {
//                 return server().post(url, data);
//             }
//         });
//     },
// };
