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
        lexSessionID: undefined,
        sessionAttributes: undefined,
        error: undefined,
        lastConversationID: undefined,
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
                sessionId,
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
            if (sessionId) conversations.lexSessionID = sessionId;
        },
        conversationSaved: (conversations: any, action: any) => {
            conversations.list = [];
            conversations.slot = {};
            conversations.loading = false;
            conversations.currentIntent = null;
            conversations.lexSessionID = undefined;
            conversations.sessionAttributes = undefined;
            conversations.lastConversationID = action.payload._id;
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
    conversationSaved,
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
        url: '/lex/converse',
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
        url: '/lex/converse',
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
        url: `/lex/redirect-intent`,
        method: 'post',
        data: { userId, intentName },
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};

export const saveConversation = () =>  (dispatch: CustomDispatch, getState: any) => {
    const conv = getState().conversations;
    const auth = getState().auth;
    dispatch(apiCallBegan({
        apiName: 'lex',
        url: '/aivi/conversation/register',
        method: 'post',
        data: {
            user: auth.user.attributes.name || auth.tempData.name || 'user',
            lexSessionID: conv.lexSessionID || null,
            conversation_list: conv.list,
        },
        onStart: conversationsRequested.type,
        onSuccess: conversationSaved.type,
        onError: conversationsRequestFailed.type,

    }));
}