import axios from 'axios';
import * as actions from '../api';

const lexApi = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: any) => {
    if (action.type !== actions.lexApiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    onStart && dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'http://node-express-env.eba-myp2sfmm.us-east-1.elasticbeanstalk.com',
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
        dispatch(actions.lexApiCallSuccess(response.data));

        onSuccess && dispatch({ type: onSuccess, payload: response.data });
    } catch(error) {
        // dispatch({ type: onError, payload: error });
        dispatch(actions.lexApiCallFailed(error.message));

        onError && dispatch({ type: onError, payload: error.message });
    }
};

export default lexApi;