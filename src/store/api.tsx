import { createAction } from '@reduxjs/toolkit';

export type ApiPoint = "lex" | "card-recommender";

type baseURLType = (apiPoint: ApiPoint) => string;

export const getBaseURL: baseURLType = apiPoint => {
    switch (apiPoint) {
        case 'lex': return 'http://node-express-env.eba-myp2sfmm.us-east-1.elasticbeanstalk.com';
        case 'card-recommender': return 'https://aivi.backend.qijang.com';
        default: return '';
    }
}

export const apiCallBegan: (any) = createAction("api/callBegan");
export const apiCallSuccess: (any) = createAction("api/callSuccess");
export const apiCallFailed: (any) = createAction("api/callFailed");
