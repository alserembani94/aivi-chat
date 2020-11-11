import axios from 'axios';
import * as actions from '../api';
import { Middleware } from '@reduxjs/toolkit';

// interface actionType {
//     type: string;
//     payload: {
//         apiName: actions.ApiPoint,
//         url: string,
//         method: AxiosRequestConfig["method"],
//         data: any,
//         onStart?: string,
//         onSuccess?: string,
//         onError?: string,
//     };
// }

const api: Middleware = ({ dispatch }) => next => async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { apiName, url, method, data, onStart, onSuccess, onError } = action.payload;

    onStart && dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: actions.getBaseURL(apiName),
            url,
            method,
            data,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'ANY',
            },
        });

        // General
        dispatch(actions.apiCallSuccess(response.data));

        onSuccess && dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
        // dispatch({ type: onError, payload: error });
        dispatch(actions.apiCallFailed(error.message));

        onError && dispatch({ type: onError, payload: error.message });
    }
};

export default api;