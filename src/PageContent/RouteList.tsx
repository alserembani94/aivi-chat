import React from 'react';

import SmartAssistant from '../pages/SmartAssistant';
import SiteBlogList from '../pages/SiteBlogList';
import SiteBlogArticle from '../pages/SiteBlogArticle';
import CreditCardResult from '../pages/CreditCardResult';
import LoanResult from '../pages/LoanResult';
import SignIn from '../pages/Auth/SignIn';
import Register from '../pages/Auth/Register';
import MainMenu from '../pages/MainMenu';
import ConfirmRegister from '../pages/Auth/ConfirmRegister';
import Home from '../pages/Home';
import PersonalLoanApplication from '../pages/PersonalLoanApplication';
import CreditCardApplication from '../pages/CreditCardApplication';
import Legal from '../pages/Legal/index';
import SocialLogin from '../pages/SocialLogin/index';
import Account from '../pages/Account/Account';
import Page404 from '../pages/404/Page404';
import ContactUs from '../pages/ContactUs';
import CardLoading from '../pages/CardRecommendLoading';
import LoanLoading from '../pages/LoanRecommendLoading';
import {
    Sidebar,
} from '../components';

/*
    TODO: Add new routes in export default
    ! If the page requires authentication, please set private to true
    ! Make sure Home and 404 Page is at the most bottom of the route
*/


export default [
    {
        path: '/loading-card',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <CardLoading />,
    },
    {
        path: '/loading-loan',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <LoanLoading />,
    },
    // SECTION: Auth Routes
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

    // SECTION: Main route
    {
        path: '/main-menu',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <MainMenu />,
    },
    {
        path: '/smart-assistant/:section_path',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SmartAssistant />,
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
        path: '/personal-loan-application',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <PersonalLoanApplication />,
    },
    {
        path: '/credit-card-application',
        exact: false,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <CreditCardApplication />,
    },
    // {
    //     path: '/card-details',
    //     exact: true,
    //     private: false,
    //     sidebar: () => <Sidebar />,
    //     main: () => <CardDetails />,
    // },

    // SECTION: Landing Page Routes
    {
        path: '/blog',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SiteBlogList />,
    },
    {
        path: '/blog/:id',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SiteBlogArticle />,
    },
    {
        path: '/contact-us',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <ContactUs />,
    },
    {
        path: '/legal/:section',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Legal />,
    },
    {
        path: '/legal',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Legal />,
    },
    {
        path: '/social-login',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <SocialLogin />,
    },
    {
        path: '/account/:section',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Account />,
    },
    {
        path: '/account',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Account />,
    },
    {
        path: '/',
        exact: true,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Home />,
    },

    // SECTION: 404 File Not Found
    {
        path: '*',
        exact: false,
        private: false,
        sidebar: () => <Sidebar />,
        main: () => <Page404 />,
    },
];

type navButton = {
    path: string,
    label: string,
    tag?: string,
};

/*
    TODO: Add navigation menu list here, and make sure the route is declared above, so it won't redirect to 404 screen
    ! Refer to type declaration for the nav button
*/

export const accountNav: navButton[] = [
    {
        path: '/account/profile',
        label: 'Profile',
        // tag: 'In Progress',
    },
    {
        path: '/account/notification',
        label: 'Notification',
        // tag: 'In Progress',
    },
];
export const legalNav: navButton[] = [
    {
        path: '/legal/privacy',
        label: 'Privacy',
        // tag: 'In Progress',
    },
    {
        path: '/legal/security',
        label: 'Security',
        // tag: 'In Progress',
    },
    {
        path: '/legal/terms',
        label: 'Terms of Use',
        // tag: 'In Progress',
    },
];
export const servicesNav: navButton[] = [
    {
        path: '/smart-assistant/credit-card',
        label: 'Credit Card',
        tag: 'New',
    },
    {
        path: '/smart-assistant/personal-loan',
        label: 'Personal Loans',
        tag: 'New',
    },
    {
        path: '/smart-assistant/balance-transfer',
        label: 'Balance Transfer',
        tag: 'New',
    },
    {
        path: '/smart-assistant/cash-from-card',
        label: 'Cash From Card',
        tag: 'New',
    },
    {
        path: '!',
        label: 'Social Budget App',
        tag: 'Coming Soon',
    },
];
export const blogNav: navButton[] = [
    {
        path: '/blog',
        label: 'Articles',
    },
    {
        path: '/faq',
        label: 'FAQ',
    },
    {
        path: '/contact-us',
        label: 'Contact Us',
    },
];

// export const oldMenuNav = [
//     {
//         path: '/',
//         label: 'Home',
//     },
//     {
//         path: '/main-menu',
//         label: 'Main Menu',
//     },
//     {
//         path: '/smart-assistant',
//         label: 'Smart Assistant',
//     },
//     {
//         path: '/credit-card-result',
//         label: 'Credit Card Result',
//     },
//     {
//         path: '/loan-result',
//         label: 'Loan Result',
//     },
//     {
//         path: '/credit-card-application',
//         label: 'Credit Card Application',
//     },
//     {
//         path: '/personal-loan-application',
//         label: 'Personal Loan Application',
//     },
//     {
//         path: '/card-details',
//         label: 'Card Details',
//     },
//     {
//         path: '/site-blog-list',
//         label: 'Site Blog List',
//     },
//     {
//         path: '/site-blog-article',
//         label: 'Site Blog Article',
//     },
//     {
//         path: '/legal',
//         label: 'Legal',
//     },
//     {
//         path: '/social-login',
//         label: 'Social Login',
//     },
//     {
//         path: '/account',
//         label: 'Account',
//     },
//     {
//         path: '/contact-us',
//         label: 'Contact Us',
//     },
// ];