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

const menuNav = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/main-menu',
        label: 'Main Menu',
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