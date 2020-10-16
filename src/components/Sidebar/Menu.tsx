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

const accountNav = [
    {
        path: '/',
        label: 'Profile',
    },
    {
        path: '/',
        label: 'Notification',
    },
];
const legalNav = [
    {
        path: '/',
        label: 'Privacy',
    },
    {
        path: '/',
        label: 'Security',
    },
    {
        path: '/',
        label: 'Terms of Use',
    },
];
const servicesNav = [
    {
        path: '/credit-card-application',
        label: 'Credit Card',
    },
    {
        path: '/personal-loan-application',
        label: 'Personal Loans',
    },
    {
        path: '/',
        label: 'Balance Transfer',
    },
    {
        path: '/',
        label: 'Cash From Card',
    },
    {
        path: '/',
        label: 'Social Budget App',
    },
];
const blogNav = [
    {
        path: '/site-blog-article',
        label: 'Articles',
    },
    {
        path: '/',
        label: 'FAQ',
    },
    {
        path: '/contact-us',
        label: 'Contact Us',
    },
];

const menuNav = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/main-menu',
        label: 'Main Menu',
    },
    {
        path: '/personal-loan-application',
        label: 'Personal Loan Application',
    },
    // {
    //     path: '/smart-assistant',
    //     label: 'Smart Assistant',
    // },
    // {
    //     path: '/credit-card-result',
    //     label: 'Credit Card Result',
    // },
    // {
    //     path: '/loan-result',
    //     label: 'Loan Result',
    // },
    {
        path: '/card-details',
        label: 'Card Details',
    },
    {
        path: '/site-blog-list',
        label: 'Site Blog List',
    },
    {
        path: '/site-blog-article',
        label: 'Site Blog Article',
    },
    {
        path: '/contact-us',
        label: 'Contact Us',
    },
];

const Menu: FC<MenuProps> = ({ visible, toggleVisibility }) => {
    const auth = useSelector((state: any) => state.auth)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNavigation = (route: string) => {
        history.push(route);
        toggleVisibility();
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
                <div className="container">
                    <div className="Menu-Nav-Row row">
                        <div className="Menu-Nav-ColNoBorder col-4 border-right">
                            <h1 className="Menu-Nav-Title">Account</h1>
                            <div className="Menu-Nav-Drawer">
                                {
                                    accountNav.map((accountItem, index) => (
                                        <button
                                            key={index}
                                            className="Menu-Nav-Button"
                                            onClick={() => handleNavigation(accountItem.path)}
                                        >{accountItem.label}</button>
                                    ))
                                }
                            </div>
                            <h1 className="Menu-Nav-Title">Legal</h1>
                            <div className="Menu-Nav-Drawer">
                            {
                                legalNav.map((legalItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Nav-Button"
                                        onClick={() => handleNavigation(legalItem.path)}
                                    >{legalItem.label}</button>
                                ))
                            }
                            </div>
                        </div>
                        <div className="Menu-Nav-ColBorder col-4 border-right">
                            <h1 className="Menu-Nav-Title">Services</h1>
                            <div className="Menu-Nav-Drawer">
                            {
                                servicesNav.map((servicesItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Nav-Button"
                                        onClick={() => handleNavigation(servicesItem.path)}
                                    >{servicesItem.label}</button>
                                ))
                            }
                            </div>
                        </div>
                        <div className="Menu-Nav-ColBorder col-4">
                            <h1 className="Menu-Nav-Title">Blog</h1>
                            <div className="Menu-Nav-Drawer">
                            {
                                blogNav.map((blogItem, index) => (
                                    <button
                                        key={index}
                                        className="Menu-Nav-Button"
                                        onClick={() => handleNavigation(blogItem.path)}
                                    >{blogItem.label}</button>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Menu-Drawer">
                    {/* <button className="Menu-Button">
                        Hello
                    </button> */}
                    {
                        menuNav.map((menuItem, index) => (
                            <button
                                key={index}
                                className="Menu-Button"
                                onClick={() => handleNavigation(menuItem.path)}
                            >{menuItem.label}</button>
                        ))
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default Menu;