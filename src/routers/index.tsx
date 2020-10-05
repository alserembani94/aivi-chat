import React, { FC, useEffect, useRef } from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import {
    Sidebar,
} from '../components';
import SmartAssistant from '../pages/SmartAssistant';
import CardDetails from '../pages/CardDetails';
import SiteBlogList from '../pages/SiteBlogList';
import SiteBlogArticle from '../pages/SiteBlogArticle';
import CreditCardResult from '../pages/CreditCardResult';
import LoanResult from '../pages/LoanResult';
import SignIn from '../pages/Auth/SignIn';
import Register from '../pages/Auth/Register';
import MainMenu from '../pages/MainMenu';
import ConfirmRegister from '../pages/Auth/ConfirmRegister';

// Importing Amplify for Authentication with Cognito
import Amplify from 'aws-amplify';
import awsConfig from '../aws-exports';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentAuthenticatedUser } from '../store/reducers/auth';
// import {
//     AuthState,
//     onAuthUIStateChange,
// } from '@aws-amplify/ui-components';

Amplify.configure(awsConfig);

const VentasRoute = [
    {
        path: '/sign-in',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SignIn />,
    },
    {
        path: '/register',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Register />,
    },
    {
        path: '/confirm-register',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <ConfirmRegister />,
    },
    {
        path: '/main-menu',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <MainMenu />,
    },
    {
        path: '/smart-assistant',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SmartAssistant />,
    },
    {
        path: '/credit-card-result',
        exact: false,
        private: true,
        sidebar: () => <Sidebar />,
        main: () => <CreditCardResult />,
    },
    {
        path: '/loan-result',
        exact: false,
        private: true,
        sidebar: () => <Sidebar />,
        main: () => <LoanResult />,
    },
    {
        path: '/card-details',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <CardDetails />,
    },
    {
        path: '/site-blog-list',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SiteBlogList />,
    },
    {
        path: '/site-blog-article',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SiteBlogArticle />,
    },
    {
        path: '*',
        exact: false,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => null,
    },
];

const RouterLayout: FC = () => {
    // const history = useHistory();
    const mainPage = useRef<HTMLElement>(null);
    const user = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentAuthenticatedUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     user.error && alert(user.error);
    // }, [user]);

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    // States for authentication
    // const [authState, setAuthState] = useState<AuthState>();
    // const [user, setUser] = useState<any | undefined>();

    return (
        <React.Fragment>
            <main className="AIVI-Page" ref={mainPage}>
                {/* Sidebar Rendering */}
                {/* <Switch>
                    {
                        VentasRoute.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))
                    }
                </Switch> */}
                <Sidebar />
                {/* Page Rendering */}
                <Switch>
                    {
                        VentasRoute.map((route, index) => (
                            route.private
                            // All private routes here - will be redirected to sign in page if not log in
                            ? (<Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={({ location }) => (user.user.username)  // Auth check here
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
            </main>
        </React.Fragment>
    );
};

export default RouterLayout;