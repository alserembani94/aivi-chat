import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import RouterLayout from './routers';
import { Provider } from 'react-redux';
import store from './store/configureStore';

// import { validateData } from './utils/DataValidation';

function App() {
    return (
        <Provider store={store()}>
            <Router>
                <RouterLayout />
            </Router>
         </Provider>
    );
}

export default App;
