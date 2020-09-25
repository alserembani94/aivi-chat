import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
// import { apiCallBegan } from '../api';
// import moment from 'moment';

// Data Structure
export type CashFromCardType = {
    [key: string]: string | number,
    transferFrom: string,
    name: string,
    phone: string,
    email: string,
    amount: number,
};

type SliceState = {
    data: CashFromCardType,
    loading: boolean,
    lastFetch: Date | null,
}

// Reducers for each actions
const slice = createSlice({
    name: 'cashFromCard',
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
        informationAdded: (cashFromCard: SliceState, { payload }) => {
            cashFromCard.data[payload.type] = payload.value;
        },
    },
});

export const {
    informationAdded,
} = slice.actions;
export default slice.reducer;

// Selectors for the state
export const getInformation = createSelector(
    (state: any) => state.cashFromCard,
    (cashFromCard: SliceState) => cashFromCard.data,
);