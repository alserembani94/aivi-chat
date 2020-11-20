import { createAction } from '@reduxjs/toolkit';

export type ApiPoint = "lex" | "card-recommender";

type baseURLType = (apiPoint: ApiPoint) => string;

export const getBaseURL: baseURLType = apiPoint => {
    switch (apiPoint) {
        case 'lex': return 'https://hnf6wj2epk.execute-api.us-east-1.amazonaws.com/dev';
        case 'card-recommender': return 'https://aivi.backend.qijang.com';
        default: return '';
    }
}

export const apiCallBegan: (any) = createAction("api/callBegan");
export const apiCallSuccess: (any) = createAction("api/callSuccess");
export const apiCallFailed: (any) = createAction("api/callFailed");
