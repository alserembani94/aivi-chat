import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'authModal',
    initialState: {
        visible: false,
    },
    reducers: {
        authModalShown: (authModal: any, action: any) => {
            authModal.visible = true;
        },
        authModalHidden: (authModal: any, action: any) => {
            authModal.visible = false;
        },
    },
});

export const {
    authModalShown,
    authModalHidden,
} = slice.actions;
export default slice.reducer;

export const showAuthModal = () => authModalShown(null);
export const hideAuthModal = () => authModalHidden(null);