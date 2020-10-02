import { createSlice } from '@reduxjs/toolkit';
// import { CognitoUser } from '@aws-amplify/auth';
// import moment from 'moment';
import { authenticationBegan } from '../authAction';

// type IdentityType = {
//     user: CognitoUser,
//     userConfirmed: boolean;
//     userSub: string;
// }

// interface AuthState {
//     data: IdentityType,
//     loading: boolean,
//     lastFetch: date,
// }

const slice = createSlice({
    name: 'userAuth',
    initialState: {
        data: {},
        user: {},
        loading: false,
        lastFetch: null,
        error: null,
    },
    reducers: {
        userSignedIn: (auth: any, action: any) => {
            action.payload.challengeName === 'NEW_PASSWORD_REQUIRED'
            ? auth.data = action.payload : auth.user = action.payload;
            auth.loading = false;
            auth.lastFetch = Date.now();
        },
        userRequestedAuth: (auth: any, action: any) => {
            auth.error = null;
            auth.loading = true;
        },
        userRequestFailed: (auth: any, action: any) => {
            auth.loading = false;
            auth.error = action.payload;
        },
        userSignedOut: (auth: any, action: any) => {
            auth.data = {};
            auth.user = {};
            auth.loading = false;
        }
    }
})

const {
    userSignedIn,
    userRequestedAuth,
    userRequestFailed,
    userSignedOut,
} = slice.actions;
export default slice.reducer;

export const userSignIn = (userInfo: { email: string, password: string }) => authenticationBegan({
    data: userInfo,
    operation: 'sign_in',
    onStart: userRequestedAuth.type,
    onSuccess: userSignedIn.type,
    onError: userRequestFailed.type,
});

export const userNewPassword = ({ email, newPassword }: { email: string, newPassword: string }) => (dispatch: any, getState: any) => {
    const { requiredAttributes } = getState().auth.data;
    dispatch(authenticationBegan({
        data: {
            email,
            newPassword,
            requiredAttributes,
        },
        operation: 'complete_new_password',
        onStart: userRequestedAuth.type,
        onSuccess: userSignedIn.type,
        onFailed: userRequestFailed.type,
    }));
};

// export const userSignUp = (userInfo: )

export const userSignOut = () => authenticationBegan({
    operation: 'sign_out',
    onStart: userRequestedAuth.type,
    onSuccess: userSignedOut.type,
    onError: userRequestFailed.type,
});