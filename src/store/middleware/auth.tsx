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
        // USE CASE 1: NEW USER AUTH FLOW
        if (operation === 'sign_up') response = await Auth.signUp({
            username: data.email,
            password: data.password,
            attributes: {
                email: data.email,
                phone_number: data.phoneNo,
                name: data.name,
            }
        });
        else if (operation === 'confirm_sign_up') response = await Auth.confirmSignUp(data.email, data.code, { forceAliasCreation: false });
        else if (operation === 'resend_confirmation_code') response = await Auth.resendSignUp(data.email);
        
        // USE CASE 2: REGISTERED USER SIGN IN
        else if (operation === 'sign_in') response = await Auth.signIn(data.email, data.password);
        else if (operation === 'complete_new_password') response = await Auth.completeNewPassword(
            data.user,
            data.newPassword,
            data.requiredAttributes,
        );

        // USE CASE 3: MODIFY AUTHENTICATION DATA
        else if (operation === 'change_password') response = await Auth.currentAuthenticatedUser().then(user => Auth.changePassword(user, data.oldPassword, data.newPassword));
        else if (operation === 'forgot_password') response = await Auth.forgotPassword(data.email);
        else if (operation === 'forgot_password_submit') response = await Auth.forgotPasswordSubmit(data.email, data.code, data.newPassword);
        else if (operation === 'verify_current_user_attribute') response = await Auth.verifyCurrentUserAttribute(data.attr);
        else if (operation === 'verify_current_user_attribute_submit') response = await Auth.verifyCurrentUserAttributeSubmit(data.attr, data.verificationCode);
        else if (operation === 'update_user_attributes') response = await Auth.updateUserAttributes(data.user, data.updateAttributes);
        // custom attributes includes 'address' | 'birthdate' | 'email' | 'family_name' | 'gender' | 'given_name' | 'locale' | 'middle_name' | 'name' | 'nickname' | 'phone_number' | 'picture' | 'preferred_username' | 'profile' | 'updated_at' | 'website' | 'zoneinfo'
        // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
        // Other attributes associated with: 'email_verified' | 'phone_number_verified'
        // Can also add more attributes with 'custom:new_attribute', however need to declare first in user pool
        // access with 'amplify console auth' using Amplify CLI

        // USE CASE 4: SIGNING OUT
        else if (operation === 'sign_out') response = await Auth.signOut();

        // USE CASE 5: GETTING AUTHENTICATION DATA
        else if (operation === 'current_authenticated_user') response = await Auth.currentAuthenticatedUser();
        else if (operation === 'current_session') response = await Auth.currentSession();

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