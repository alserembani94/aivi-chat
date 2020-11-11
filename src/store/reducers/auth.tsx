import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { authenticationBegan } from '../authAction';

const slice = createSlice({
    name: 'userAuth',
    initialState: {
        data: {},
        user: {},
        loading: false,
        lastFetch: null,
        error: undefined,
        session: {},
        tempData: {
            name: '',
            email: '',
            password: '',
        },
    },
    reducers: {
        userSignedIn: (auth: any, action: any) => {
            if (action.payload.challengeName === 'NEW_PASSWORD_REQUIRED') auth.data = action.payload;
            else {
                const {
                    username,
                    signInUserSession,
                    attributes,
                    id,
                } = action.payload;
                auth.user = {
                    username,
                    attributes,
                    id,
                };
                auth.session = signInUserSession;
            }
            auth.loading = false;
            auth.lastFetch = Date.now();
        },
        userRequestedAuth: (auth: any, action: any) => {
            auth.error = undefined;
            auth.loading = true;
        },
        userRequestedSignOut: (auth: any, action: any) => {
            auth.error = undefined;
            auth.loading = true;
            auth.user = {};
        },
        userRequestFailed: (auth: any, action: any) => {
            auth.loading = false;
            auth.error = action.payload;
        },
        userSignedOut: (auth: any, action: any) => {
            auth.data = {};
            auth.loading = false;
        },
        userRegistered: (auth: any, action: any) => {
            auth.data = action.payload;
            auth.loading = false;
        },
        userRegisterConfirmed: (auth: any, action: any) => {
            auth.data = action.payload;
            auth.loading = false;
        },
        currentAuthenticatedUser: (auth: any, action: any) => {
            auth.user = action.payload;
            auth.loading = false;
        },
        currentSession: (auth: any, action: any) => {
            auth.session = action.payload;
            auth.loading = false;
        },
        currentUserInfo: (auth: any, action: any) => {
            auth.user = action.payload;
            auth.loading = false;
        },
        signUpInitiated: (auth: any, action: any) => {
            auth.tempData = {
                name: action.payload.name || '',
                email: action.payload.email || '',
                password: action.payload.password || '',
            }
        },
        tempDataCleaned: (auth: any, action: any) => {
            auth.tempData = {
                name: '',
                email: '',
                password: '',
            };
        },
        forgotPasswordRequested: (auth: any, action: any) => {
            auth.tempData = {
                email: action.payload,
            };
            auth.loading = false;
        },
        forgotPasswordSubmitted: (auth: any, action: any) => {
            auth.tempData = {
                name: '',
                email: '',
                password: '',
            };
        },
    }
})

const {
    userSignedIn,
    userRequestedAuth,
    userRequestedSignOut,
    userRequestFailed,
    userSignedOut,
    userRegistered,
    userRegisterConfirmed,
    currentAuthenticatedUser,
    currentSession,
    currentUserInfo,
    signUpInitiated,
    tempDataCleaned,
} = slice.actions;
// export const { signUpInitiated } =  slice.actions;
export default slice.reducer;

export const userSignIn = (userInfo: { email: string, password: string }) => async (dispatch: Dispatch, getState: any) => {
    await dispatch(authenticationBegan({
        data: userInfo,
        operation: 'sign_in',
        onStart: userRequestedAuth.type,
        onSuccess: userSignedIn.type,
        onError: userRequestFailed.type,
    }));

    const { error } = getState().auth;
    error === 'User is not confirmed.' && dispatch(signUpInitiated({
        email: userInfo.email,
        password: userInfo.password,
    }));
};

export const userNewPassword = ({ email, newPassword }: { email: string, newPassword: string }) => async (dispatch: Dispatch, getState: any) => {
    const { requiredAttributes } = getState().auth.data;
    await dispatch(authenticationBegan({
        data: {
            email,
            newPassword,
            requiredAttributes,
        },
        operation: 'complete_new_password',
        onStart: userRequestedAuth.type,
        onSuccess: userSignedIn.type,
        onError: userRequestFailed.type,
    }));
};

export const userSignUp = (userInfo: { email: string, password: string, name: string, phoneNo: string }) => async (dispatch: Dispatch, getState: any) => {
    await dispatch(authenticationBegan({
        data: userInfo,
        operation: 'sign_up',
        onStart: userRequestedAuth.type,
        onSuccess: userRegistered.type,
        onError: userRequestFailed.type,
    }));

    dispatch(signUpInitiated({
        email: userInfo.email,
        password: userInfo.password,
    }));
};

export const userSignUpConfirm = ({ email, code }: { email: string, code: string }) => async (dispatch: any, getState: any) => {
    await dispatch(authenticationBegan({
        data: {
            email,
            code,
        },
        operation: 'confirm_sign_up',
        onStart: userRequestedAuth.type,
        onSuccess: userRegisterConfirmed.type,
        onError: userRequestFailed.type,
    }));

    const proxy = getState().auth.tempData;

    dispatch(userSignIn({
        email: proxy.email,
        password: proxy.password,
    }));

    await dispatch(tempDataCleaned);
};

export const userSignOut = () => authenticationBegan({
    operation: 'sign_out',
    onStart: userRequestedSignOut.type,
    onSuccess: userSignedOut.type,
    onError: userRequestFailed.type,
});

export const getCurrentAuthenticatedUser = () => authenticationBegan({
    operation: 'current_authenticated_user',
    onStart: userRequestedAuth.type,
    onSuccess: currentAuthenticatedUser.type,
    onError: userRequestFailed.type,
});

export const getCurrentSession = () => authenticationBegan({
    operation: 'current_session',
    onStart: userRequestedAuth.type,
    onSuccess: currentSession.type,
    onError: userRequestFailed.type,
});

export const getCurrentUserInfo = () => authenticationBegan({
    operation: 'current_user_info',
    onStart: userRequestedAuth.type,
    onSuccess: currentUserInfo.type,
    onError: userRequestFailed.type,
});

export const checkIfUserExist = () => authenticationBegan({
    operation: 'confirm_sign_up',
    onStart: userRequestedAuth.type,
    onError: userRequestFailed.type,
});

export const initiateRegistration = ({email, name}: { email?: string, name?: string }) => (dispatch: Dispatch, getState: any) => {
    const data = {
        email,
        name,
    };
    dispatch(signUpInitiated(data));
};

// export const requestForgotPassword = ()