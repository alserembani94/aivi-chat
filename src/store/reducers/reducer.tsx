import { combineReducers } from 'redux';
import authReducer from './auth';

// Combine all reducers here
export default combineReducers({
    auth: authReducer,
});