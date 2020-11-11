import { combineReducers } from 'redux';
import authReducer from './auth';
import authModalReducer from './authModal';
import conversationReducer from './conversation';
import cardRecommender from './cardRecommender';

// Combine all reducers here
export default combineReducers({
    auth: authReducer,
    authModal: authModalReducer,
    conversations: conversationReducer,
    cardRecommender: cardRecommender,
});