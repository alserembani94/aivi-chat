import { createSlice } from '@reduxjs/toolkit';
// import { apiCallBegan } from '../api';
// import moment from 'moment';

// Data Structure
type BalanceTransferType = {
    [key: string]: string | number,
    transferFrom: string,
    name: string,
    phone: string,
    email: string,
    amount: number,
};

type SliceState = {
    data: BalanceTransferType,
    loading: boolean,
    lastFetch: Date | null,
}

// Reducers for each actions
const slice = createSlice({
    name: 'balanceTransfer',
    initialState: {
        data: {
            transferFrom: '',
            name: '',
            phone: '',
            email: '',
            amount: 0,
        },
        loading: false,
        lastFetch: null,
    },
    reducers: {
        informationAdded: (balanceTransfer: SliceState, { payload }) => {
            balanceTransfer.data[payload.type] = payload.value;
        },
    }
});

export const {
    informationAdded,
} = slice.actions;
export default slice.reducer;

