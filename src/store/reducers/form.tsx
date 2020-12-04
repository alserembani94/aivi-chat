import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

export type FormType =
    "balance-transfer" |
    "cash-from-card" |
    "credit-card" |
    "personal-loan" |
    "credit-card-application" |
    "personal-loan-application";

const slice = createSlice({
    name: 'forms',
    initialState: {
        formType: undefined,
        formContent: {},
        error: undefined,
    },
    reducers: {
        formAdded: (forms: any, action: any) => {
            const {
                formType,
                formContent,
            } = action.payload;
            forms.formType = formType;
            forms.formContent = formContent;
        },
        formSaveFailed: (forms: any, action: any) => {
            forms.error = action.payload;
        },
    },
});

const {
    formAdded,
    formSaveFailed,
} = slice.actions;
export default slice.reducer;

export const addForm = (formType: FormType, formContent: any) => (dispatch: any, getState: any) =>{
    const auth = getState().auth;
    const conversations = getState().conversations;
    dispatch(formAdded({ formType, formContent }));
    dispatch(apiCallBegan({
        apiName: 'lex',
        url: '/aivi/form/create',
        method: 'post',
        data: {
            user: auth.user.attributes.name || auth.tempData.name || 'user',
            formType,
            formContent,
            conversation: conversations.lastConversationID,
        },
        onError: formSaveFailed.type,
    }))
};

// export const addForm = (formType: FormType, formContent: any) => formAdded({ formType, formContent });