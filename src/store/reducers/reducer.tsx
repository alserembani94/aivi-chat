import { combineReducers } from 'redux';
import authReducer from './auth';
import authModalReducer from './authModal';

// Combine all reducers here
export default combineReducers({
    auth: authReducer,
    authModal: authModalReducer,
});