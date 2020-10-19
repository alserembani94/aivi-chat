import { createSlice } from '@reduxjs/toolkit';
import { lexApiCallBegan } from '../api';

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

export const loadConversations = () => (dispatch: any, getState: any) => {
    // const { lastFetch } = getState().conversations;
    // const { username } = getState().auth.user;

    // dispatch to load from database
};

export const converseWithLex = (message: string) => async (dispatch: any, getState: any) => {
    const auth = getState().auth;
    const { sessionAttributes } = getState().conversations;

    const userMessage = {
        message,
        userId: auth.user.attributes?.email.split('@')[0] || auth.tempData.email?.split('@')[0] || 'user',
        timestamp: Date.now(),
    }

    await dispatch(conversationAdded(userMessage));

    dispatch(lexApiCallBegan({
        url: '/lex',
        method: 'post',
        data: { ...userMessage, sessionAttributes },
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};

export const initiateConversation = (message: string) => (dispatch: any, getState: any) => {
    const auth = getState().auth;
    dispatch(lexApiCallBegan({
        url: '/lex',
        method: 'post',
        data: {
            message,
            userId: auth.user.attributes?.email.split('@')[0] || auth.tempData.email?.split('@')[0] || 'user',
        },
        onStart: conversationsRequested.type,
        onSuccess: conversationAdded.type,
        onError: conversationsRequestFailed.type,
    }));
};