import { combineReducers } from 'redux';
import cashFromCardReducer from './cashFromCard';
import recommendCreditCardReducer from './recommendCreditCard';
import authReducer from './auth';

// Combine all reducers here
export default combineReducers({
    cashFromCard: cashFromCardReducer,
    recommendCreditCard: recommendCreditCardReducer,
    auth: authReducer,
});