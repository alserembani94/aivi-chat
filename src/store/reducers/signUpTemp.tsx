import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'signUpTemp',
    initialState: {
        name: '',
        email: '',
    },
    reducers: {
        detailsAdded: (user: any, action: any) => {
            user.name = action.payload.name;
            user.email = action.payload.email;
        },
    },
});

export const {
    detailsAdded,
} = slice.actions;
export default slice.reducer;

// export const addUserDetails = (userDetails: any) => (dispatch: any) => dispatch(detailsAdded(userDetails));