// import axios from 'axios';
import * as actions from '../authAction';

import { Auth } from 'aws-amplify';

const auth = ({ dispatch }: { dispatch: any }) => (next: any) => async (action: any) => {
    if (action.type !== actions.authenticationBegan.type) return next(action);

    const { data, operation, onStart, onSuccess, onError } = action.payload;
    onStart && dispatch({ type: onStart });
    next(action);

    try {
        let response;
        if (operation === 'sign-in') response = await Auth.signIn(data.email, data.password);
        if (operation === 'sign-out') response = await Auth.signOut();

        // General
        dispatch(actions.authenticationSuccess(response));

        onSuccess && dispatch({ type: onSuccess, payload: response });
    } catch (error) {
        // dispatch({ type: onError, payload: error });
        dispatch(actions.authenticationFailed(error.message));

        onError && dispatch({ type: onError, payload: error.message });
    }
};

export default auth;