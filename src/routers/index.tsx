import React, { FC, useEffect, useRef } from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {
    Sidebar,
} from '../components';

// Importing Amplify for Authentication with Cognito
import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentSession, getCurrentUserInfo } from '../store/reducers/auth';

import VentasRoute from '../PageContent/RouteList';

Amplify.configure(awsConfig);

const RouterLayout: FC = () => {
    const mainPage = useRef<HTMLElement>(null);
    const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentSession());
        dispatch(getCurrentUserInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <main className="AIVI-Page" ref={mainPage}>
                {/* Sidebar Rendering */}
                <Sidebar />
                {/* Page Rendering */}
                <section className="AIVI-Body">
                    <Switch>
                        {
                            VentasRoute.map((route, index) => (
                                route.private
                                // All private routes here - will be redirected to sign in page if not log in
                                ? (<Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={({ location }) => (auth.user.username)  // Auth check here
                                        ? <route.main />
                                        : <Redirect to={{
                                            pathname: "/sign-in",
                                            state: { from: location },
                                        }} />
                                    }
                                />)
                                // All public routes here - all unauthenticated users can navigate
                                : (<Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />)
                            ))
                        }
                    </Switch>
                </section>
            </main>
        </React.Fragment>
    );
};

export default RouterLayout;