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
        slots: {},
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
                slots,
            } = action.payload;
            conversations.list.push({
                message,
                user: userId || 'bot',
                timestamp,
                actions: actions || undefined,
            });
            if (sessionAttributes) conversations.sessionAttributes = sessionAttributes;
            if (intentName) conversations.currentIntent = intentName;
            if (slots) conversations.slots = slots;
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
    const auth = getState().auth;
    const intentName = 
        (sectionName === "balance-transfer") ? "AIVIBalanceTransfer"
        : (sectionName === "cash-from-card") ? "AIVICashFromCard"
        : (sectionName === "credit-card") ? "AIVIRequestCard"
        : (sectionName === "personal-loan") ? "AIVIRequestLoan"
        : (sectionName === "credit-card-application") ? "AIVICardApplication"
        : (sectionName === "personal-loan-application") ? "AIVIApplyLoan"
        : "AIVIBotIntro";

    const userId = auth.user?.attributes?.email.split('@')[0] || auth.tempData?.email?.split('@')[0] || 'user';

    dispatch(apiCallBegan({
        apiName: 'lex',
        url: `/lex/intent`,
        method: 'post',
        data: { userId, intentName },
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};