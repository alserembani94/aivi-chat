import { createSlice, ThunkDispatch, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiCallBegan } from '../api';

type CustomAction = ThunkAction<any, any, any, Action>;
type CustomDispatch = ThunkDispatch<any, any, Action>;


export type SectionName =
    "balance-transfer" |
    "cash-from-card" |
    "credit-card" |
    "personal-loan" |
    "credit-card-application" |
    "personal-loan-application" |
    "introduction";

type IntentName = () =>
    "AIVIBalanceTrasfer" |
    "AIVICashFromCard" |
    "AIVIRequestCard" |
    "AIVIRequestLoan" |
    "AIVICardApplication" |
    "AIVIApplyLoan" |
    "AIVIBotIntro";

const slice = createSlice({
    name: 'conversations',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
        currentIntent: null,
        sessionAttributes: undefined,
        error: undefined,
    },
    reducers: {
        conversationAdded: (conversations: any, action: any) => {
            const {
                message,
                userId,
                timestamp,
                sessionAttributes,
                actions,
                intentName,
            } = action.payload;
            conversations.list.push({
                message,
                user: userId || 'bot',
                timestamp,
                actions: actions || undefined,
            });
            if (sessionAttributes) conversations.sessionAttributes = sessionAttributes;
            if (intentName) conversations.currentIntent = intentName;
        },
        conversationsRequested: (conversations: any, action: any) => {
            conversations.loading = true;
        },
        conversationsReceived: (conversations: any, action: any) => {
            conversations.list = action.payload;
            conversations.loading = false;
            conversations.lastFetch = Date.now();
        },
        conversationsRequestFailed: (conversations: any, action: any) => {
            conversations.loading = false;
            conversations.error = action.payload;
        },
    },
});

const {
    conversationAdded,
    conversationsRequested,
    // conversationsReceived,
    conversationsRequestFailed,
} = slice.actions;
export default slice.reducer;

export const loadConversations = () => (dispatch: CustomDispatch, getState: any) => {
    // const { lastFetch } = getState().conversations;
    // const { username } = getState().auth.user;

    // dispatch to load from database
};

export const converseWithLex = (message: string) => async (dispatch: CustomDispatch, getState: any) => {
    const auth = getState().auth;
    const { sessionAttributes } = getState().conversations;

    const userMessage = {
        message,
        userId: auth.user?.attributes?.email.split('@')[0] || auth.tempData?.email?.split('@')[0] || 'user',
        timestamp: Date.now(),
    }

    await dispatch(conversationAdded(userMessage));

    dispatch(apiCallBegan({
        apiName: 'lex',
        url: '/lex',
        method: 'post',
        data: { ...userMessage, sessionAttributes },
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};

export const initiateConversation = (message: string) => (dispatch: CustomDispatch, getState: any) => {
    const auth = getState().auth;
    dispatch(apiCallBegan({
        apiName: 'lex',
        url: '/lex',
        method: 'post',
        data: {
            message,
            userId: auth.user?.attributes?.email.split('@')[0] || auth.tempData?.email?.split('@')[0] || 'user',
        },
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};

export const initiateIntent = (sectionName: SectionName) => (dispatch: CustomDispatch, getState: any) => {
    const intentName = () => {
        if (sectionName === "balance-transfer") return "AIVIBalanceTransfer";
        if (sectionName === "cash-from-card") return "AIVICashFromCard";
        if (sectionName === "credit-card") return "AIVIRequestCard";
        if (sectionName === "personal-loan") return "AIVIRequestLoan";
        if (sectionName === "credit-card-application") return "AIVICardApplication";
        if (sectionName === "personal-loan-application") return "AIVIApplyLoan";
        return "AIVIBotIntro";
    };

    dispatch(apiCallBegan({
        apiName: 'lex',
        url: `/lex/intent/${intentName()}`,
        method: 'get',
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};