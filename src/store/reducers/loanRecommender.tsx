import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

const baseUrl = 'card-recommender'

const slice = createSlice({
    name: 'cardRecommender',
    initialState: {
        loan: undefined,
        loading: false,
        lastFetch: null,
        error: undefined,
        message: undefined,
    },
    reducers: {
        loanRecommended: (recommendedLoan_data: any, action: any) => {
            recommendedLoan_data.loading = false;
            recommendedLoan_data.loan = action.payload;
            recommendedLoan_data.lastFetch = Date.now();
        },
        recommendationRequested: (recommendedLoan_data: any, action: any) => {
            recommendedLoan_data.loading = true;
            recommendedLoan_data.message = undefined;
        },
        recommendationRequestFailed: (recommendedLoan_data: any, action: any) => {
            recommendedLoan_data.loading = false;
            recommendedLoan_data.error = action.payload;
        },
        loanRecommenderReset: (recommendedLoan_data: any, action: any) => {
            recommendedLoan_data.loading = false;
            recommendedLoan_data.lastFetch = null;
            recommendedLoan_data.error = undefined;
            recommendedLoan_data.message = undefined;
            recommendedLoan_data.loan = undefined;
        },
    },
});

const {
    loanRecommended,
    recommendationRequested,
    recommendationRequestFailed,
} = slice.actions;
export const {
    loanRecommenderReset,
} = slice.actions;
export default slice.reducer;

type RecommendLoanProps = {
    selectedBanks: string[],
    monthlyIncome: number,
    monthlyDebt: number,
    loanAmount: number,
    tenure: number,
}

export const recommendLoan = ({ selectedBanks, monthlyIncome, monthlyDebt, loanAmount, tenure }: RecommendLoanProps) => apiCallBegan({
    apiName: baseUrl,
    url: '/recommender/v1/compute_debt_burden',
    method: 'post',
    data: {
        multiselected_bank: selectedBanks,
        total_monthly_income: monthlyIncome,
        total_monthly_debt: monthlyDebt,
        loan_amount: loanAmount,
        month_length: tenure,
    },
    onStart: recommendationRequested.type,
    onSuccess: loanRecommended.type,
    onError: recommendationRequestFailed.type,
});