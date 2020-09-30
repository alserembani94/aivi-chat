import React from 'react';
import {
    Switch,
    Route,
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
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <CreditCardResult />,
    },
    {
        path: '/loan-result',
        exact: false,
        private: false,
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

const RouterLayout = () => {
    // const history = useHistory();
    const mainPage = React.useRef<HTMLElement>(null);

    // React.useEffect(() => {
    //     console.log(mainPage.current?.children.length);
    // }, []);

    return (
        <React.Fragment>
            <main className="AIVI-Page" ref={mainPage}>
                {/* Sidebar Rendering */}
                <Switch>
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
                </Switch>
                {/* Page Rendering */}
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
            </main>
        </React.Fragment>
    );
};

export default RouterLayout;