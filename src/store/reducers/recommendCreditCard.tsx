import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

type SliceState = {
    data: any,
    loading: boolean,
    lastFetch: null | Date,
}

const slice = createSlice({
    name: 'recommendCreditCard',
    initialState: {
        data: {
            cardOwnership: false,
            expenseDetails: [],
            monthlyIncome: [],
        },
        loading: false,
        lastFetch: null,
    },
    reducers: {
        recommendationSubmitted: (creditCard: SliceState, { payload }) => {
            creditCard.data = payload;
        },
    }
});

export default slice.reducer;

// Action Creators
const url = "/card_recommender/v1/recommend_cards";

export const submitForRecommendation = () => apiCallBegan({
    url,
    method: "post",
    data: {
        multiselected_bank: ["rhb", "maybank", "cimb bank"],
        multiselected_category: ["shopping", "travel", "dining"],
    },
});