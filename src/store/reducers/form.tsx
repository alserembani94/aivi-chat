import { createSlice } from '@reduxjs/toolkit';

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
    },
    reducers: {
        formAdded: (forms: any, action: any) => {
            const {
                formType,
                formContent,
            } = action.payload;
            forms.formType = formType;
            forms.formContent = formContent;
        }
    },
});

const {
    formAdded
} = slice.actions;
export default slice.reducer;

export const addForm = (formType: FormType, formContent: any) => formAdded({ formType, formContent });