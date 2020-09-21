import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import SmartAssistant from '../pages/SmartAssistant';

const VentasRoute = [
    {
        path: '/',
        exact: true,
        private: false,
        main: () => <SmartAssistant />,
    },
];

const RouterLayout = () => {
    return (
        <React.Fragment>
            <Switch>
                {
                    VentasRoute.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main />}
                        />
                    ))
                }
            </Switch>
        </React.Fragment>
    );
};

export default RouterLayout;