import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers/reducer';
import api from './middleware/api';
import auth from './middleware/auth';
import lexApi from './middleware/lexApi';

export default function() {
    return configureStore({
        reducer,
        middleware: [
            ...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActionPaths: ['payload'],
                }
            }),
            auth,
            api,
            lexApi,
        ],
    });
};

