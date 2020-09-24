import { combineReducers } from 'redux';
import cashFromCardReducer from './cashFromCard';

// Combine all reducers here
export default combineReducers({
    cashFromCard: cashFromCardReducer,
});