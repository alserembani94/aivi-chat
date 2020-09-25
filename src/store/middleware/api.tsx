import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    
    console.log('Nothing?');

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    onStart && dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'https://aivi.backend.qijang.com',
            url,
            method,
            data,
        });

        // General
        dispatch(actions.apiCallSuccess(response.data));

        onSuccess && dispatch({ type: onSuccess, payload: response.data });
    } catch(error) {
        // dispatch({ type: onError, payload: error });
        dispatch(actions.apiCallFailed(error.message));

        onError && dispatch({ type: onError, payload: error.message });
    }
};

export default api;