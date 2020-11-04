import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useHistory,
} from 'react-router-dom';
import { userSignOut } from '../../store/reducers/auth';
import {
    Images,
} from '../../utils/Images';

interface MenuProps {
    visible: boolean;
    toggleVisibility: () => void;
}

type navButton = {
    path: string,
    label: string,
    tag?: string,
};

const accountNav: navButton[] = [
    {
        path: '/profile',
        label: 'Profile',
        tag: 'In Progress',
    },
    {
        path: '/notification',
        label: 'Notification',
        tag: 'In Progress',
    },
];
const legalNav: navButton[] = [
    {
        path: '/privacy',
        label: 'Privacy',
        tag: 'In Progress',
    },
    {
        path: '/security',
        label: 'Security',
        tag: 'In Progress',
    },
    {
        path: '/terms',
        label: 'Terms of Use',
        tag: 'In Progress',
    },
];
const servicesNav: navButton[] = [
    {
        path: '/smart-assistant',
        label: 'Credit Card',
        tag: 'New',
    },
    {
        path: '/smart-assistant',
        label: 'Personal Loans',
        tag: 'New',
    },
    {
        path: '/',
        label: 'Balance Transfer',
        tag: 'New',
    },
    {
        path: '/',
        label: 'Cash From Card',
        tag: 'New',
    },
    {
        path: '!',
        label: 'Social Budget App',
        tag: 'Coming Soon',
    },
];
const blogNav: navButton[] = [
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

// const oldMenuNav = [
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

const Menu: FC<MenuProps> = ({ visible, toggleVisibility }) => {
    const auth = useSelector((state: any) => state.auth)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNavigation = (route: string) => {
        if (route !== '!') {
            history.push(route);
            toggleVisibility();
        }
    };

    const handleSignOut = () => {
        dispatch(userSignOut());
        history.push('/');
    };

    return (
        <React.Fragment>
            <section className="Menu-Wrapper" data-visible={visible} onClick={toggleVisibility} />
            <section className="Menu-Container" data-visible={visible}>
                <div className="Menu-Header">
                    <button
                        className="Menu-Logo"
                        onClick={() => handleNavigation('/')}
                    >
                        <img
                            src={Images.logo_AIVI}
                            alt="AIVI"
                        />
                        <img
                            src={Images.emoji_malaysia}
                            alt="1 Malaysia"
                        />
                    </button>
                    <div
                        className="Menu-Auth"
                    >
                        {
                            auth.user?.username
                            ? (
                                <>
                                    <button
                                        className="Menu-Register"
                                        onClick={handleSignOut}
                                    >Sign Out</button>
                                </>
                            )
                            : (
                                <>
                                    <button
                                        className="Menu-SignIn"
                                        onClick={() => handleNavigation('/sign-in')}
                                    >
                                        Sign In
                                    </button>
                                    <button
                                        className="Menu-Register"
                                        onClick={() => handleNavigation('/register')}
                                    >
                                        Create Account
                                    </button>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="Menu-Drawer">
                    <div className="Menu-Drawer-Column">
                        <div className="Menu-Drawer-Section">
                            <h1>Account</h1>
                            {
                                accountNav.map((navItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Button"
                                        onClick={() => handleNavigation(navItem.path)}
                                    >
                                        {navItem.label}
                                        {
                                            navItem.tag && (
                                                <div className="Menu-Button-Tag">
                                                    {navItem.tag}
                                                </div>
                                            )
                                        }
                                    </button>
                                ))
                            }
                        </div>
                        <div className="Menu-Drawer-Section">
                            <h1>Legal</h1>
                            {
                                legalNav.map((navItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Button"
                                        onClick={() => handleNavigation(navItem.path)}
                                    >
                                        {navItem.label}
                                        {
                                            navItem.tag && (
                                                <div className="Menu-Button-Tag">
                                                    {navItem.tag}
                                                </div>
                                            )
                                        }
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="Menu-Drawer-Column">
                        <div className="Menu-Drawer-Section">
                            <h1>Services</h1>
                            {
                                servicesNav.map((navItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Button"
                                        onClick={() => handleNavigation(navItem.path)}
                                    >
                                        {navItem.label}
                                        {
                                            navItem.tag && (
                                                <div className="Menu-Button-Tag">
                                                    {navItem.tag}
                                                </div>
                                            )
                                        }
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="Menu-Drawer-Column">
                        <div className="Menu-Drawer-Section">
                            <h1>Blog</h1>
                            {
                                blogNav.map((navItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Button"
                                        onClick={() => handleNavigation(navItem.path)}
                                    >
                                        {navItem.label}
                                        {
                                            navItem.tag && (
                                                <div className="Menu-Button-Tag">
                                                    {navItem.tag}
                                                </div>
                                            )
                                        }
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Menu;