import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { apiCallBegan } from '../api';

const baseUrl = 'card-recommender'

const slice = createSlice({
    name: 'cardRecommender',
    initialState: {
        estimatedPoints: undefined,
        estimatedCashback: undefined,
        potentialRewards: undefined,
        rewardsFetched: false,
        loading: false,
        lastFetch: null,
        error: undefined,
        message: undefined,
        cardsFetched: false,
    },
    reducers: {
        messageReceived: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = false;
            const { message } = action.payload;
            recommendedCard_data.message = message;
            recommendedCard_data.lastFetch = Date.now();
        },
        cardRecommended: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = false;
            const { recommended_card } = action.payload;
            recommendedCard_data.cardList = recommended_card;
            recommendedCard_data.lastFetch = Date.now();
        },
        pointsEstimated: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = false;
            // Convert from dictionary to mapped array for iteration purpose
            const mappedData = Object.entries(action.payload).map(([key, value]) => ({
                cardName: key,
                cardInfo: value
            }));
            recommendedCard_data.estimatedPoints = mappedData;
            recommendedCard_data.lastFetch = Date.now();
        },
        cashbackEstimated: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = false;
            // Convert from dictionary to mapped array for iteration purpose
            const mappedData = Object.entries(action.payload).map(([key, value]) => ({
                cardName: key,
                cardInfo: value
            }));
            recommendedCard_data.estimatedCashback = mappedData;
            recommendedCard_data.lastFetch = Date.now();
        },
        potentialRewardsFound: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = false;
            const reward: any[] = Object.entries(action.payload)[0];
            const { item_name, required_points } = reward[1];
            recommendedCard_data.estimatedPoints = recommendedCard_data.estimatedPoints.map((card: any) => {
                if (card.cardName === reward[0]) {
                    if (item_name.length || required_points.length) card.cardReward = reward[1];
                }
                return card;
            });
            recommendedCard_data.lastFetch = Date.now();
            recommendedCard_data.rewardsFetched = true;
        },
        recommendationRequested: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = true;
            recommendedCard_data.message = undefined;
        },
        recommendationRequestFailed: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.loading = false;
            recommendedCard_data.error = action.payload;
        },
        cardRecommenderReset: (recommendedCard_data: any, action: any) => {
            recommendedCard_data.estimatedPoints = undefined;
            recommendedCard_data.estimatedCashback = undefined;
            recommendedCard_data.potentialRewards = undefined;
            recommendedCard_data.rewardsFetched = false;
            recommendedCard_data.loading = false;
            recommendedCard_data.lastFetch = null;
            recommendedCard_data.error = undefined;
            recommendedCard_data.message = undefined;
            recommendedCard_data.cardsFetched = false;
        },
    },
});

const {
    cardRecommended,
    messageReceived,
    pointsEstimated,
    cashbackEstimated,
    potentialRewardsFound,
    recommendationRequested,
    recommendationRequestFailed,
} = slice.actions;
export const {
    cardRecommenderReset,
} = slice.actions;
export default slice.reducer;

export const  getMessage = () => apiCallBegan({
    apiName: baseUrl,
    url: '/',
    method: 'get',
    onStart: recommendationRequested.type,
    onSuccess: messageReceived.type,
    onError: recommendationRequestFailed.type,
});

type recommendCardProps = {
    selectedBanks: string[],
    selectedCategories: string[],
};

export const recommendCard = ({ selectedBanks, selectedCategories }: recommendCardProps) => apiCallBegan({
    apiName: baseUrl,
    url: '/recommender/v1/recommend_cards',
    method: 'post',
    data: {
        multiselected_bank: selectedBanks,
        multiselected_category: selectedCategories
    },
    onStart: recommendationRequested.type,
    onSuccess: cardRecommended.type,
    onError: recommendationRequestFailed.type,
});

type EstimatePointsProps = {
    selectedBanks: string[],
    selectedCategories: {
        [key: string]: Array<number>,
    },
    months_to_estimate: number,
    preferred_bank?: boolean, // Need explaination
};

type FindPotentialRewards = {
    card_metadata: string[],
    minmax_points: number[],
};

export const estimatePoints = ({ selectedBanks, selectedCategories, months_to_estimate, preferred_bank = false }: EstimatePointsProps) => apiCallBegan({
    apiName: baseUrl,
    url: '/recommender/v1/estimate_points',
    method: 'post',
    data: {
        multiselected_bank: selectedBanks,
        multiselected_category: selectedCategories,
        months_to_estimate,
        preferred_bank,
    },
    onStart: recommendationRequested.type,
    onSuccess: pointsEstimated.type,
    onError: recommendationRequestFailed.type,
});

export const estimateCashback = ({ selectedBanks, selectedCategories, months_to_estimate, preferred_bank = false }: EstimatePointsProps) => apiCallBegan({
    apiName: baseUrl,
    url: '/recommender/v1/estimate_cashback',
    method: 'post',
    data: {
        
        multiselected_bank: selectedBanks,
        multiselected_category: selectedCategories,
        months_to_estimate,
        preferred_bank,
    },
    onStart: recommendationRequested.type,
    onSuccess: cashbackEstimated.type,
    onError: recommendationRequestFailed.type,
});

export const findPotentialRewards = () => async (dispatch: Dispatch<any>, getState: any) => {
    // Check if points is already estimated
    const { estimatedPoints } = getState().cardRecommender;

    // // If no points estimated, prompt user to estimate points first
    if (!estimatedPoints) {
        dispatch(recommendationRequestFailed('You need to estimate points first'));
        return;
    }

    // const mappedRequest = {
    //     estimated_points: {
    //         [card.cardName]: {
    //             card_metadata: card.cardInfo.card_metadata,
    //             minmax_points: card.cardInfo.minmax_points,
    //         }
    //     }
    // };

    const mappedCardRequest = estimatedPoints.map((card: any) => {
        return {
            estimated_points: {
                [card.cardName]: {
                    card_metadata: card.cardInfo.card_metadata,
                    minmax_points: card.cardInfo.minmax_points,
                }
            }
        }
    });

    mappedCardRequest.forEach(async (card: any) => {
        await dispatch(apiCallBegan({
            apiName: baseUrl,
            url: '/recommender/v1/potential_rewards',
            method: 'post',
            data: card,
            onStart: recommendationRequested.type,
            onSuccess:potentialRewardsFound.type,
            onError: recommendationRequestFailed.type,
        }));
    });
};