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
        loading: false,
        lastFetch: null,
        error: null,
    },
    reducers: {
        userSignedIn: (auth: any, action: any) => {
            auth.data = action.payload;
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

export const userSignIn = (userInfo: any) => authenticationBegan({
    data: userInfo,
    operation: 'sign-in',
    onStart: userRequestedAuth.type,
    onSuccess: userSignedIn.type,
    onError: userRequestFailed.type,
});

export const userSignOut = () => authenticationBegan({
    operation: 'sign-out',
    onStart: userRequestedAuth.type,
    onSuccess: userSignedOut.type,
    onError: userRequestFailed.type,
});