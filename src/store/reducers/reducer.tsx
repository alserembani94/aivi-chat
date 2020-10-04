import { combineReducers } from 'redux';
import authReducer from './auth';
import authModalReducer from './authModal';
import signUpTempReducer from './signUpTemp';

// Combine all reducers here
export default combineReducers({
    auth: authReducer,
    authModal: authModalReducer,
    signUpTemp: signUpTempReducer,
});