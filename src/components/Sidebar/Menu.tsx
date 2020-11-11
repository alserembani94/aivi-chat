import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useHistory,
} from 'react-router-dom';
import { userSignOut } from '../../store/reducers/auth';
import {
    Images,
} from '../../utils/Images';
import {
    accountNav,
    legalNav,
    servicesNav,
    blogNav,
} from '../../PageContent/RouteList';

interface MenuProps {
    visible: boolean;
    toggleVisibility: () => void;
}

const Menu: FC<MenuProps> = ({ visible, toggleVisibility }) => {
    const auth = useSelector((state: any) => state.auth);
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

    // useEffect(() => {
        
    // }, []);

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
                            {/* ! Test Button Only */}
                            {/* <button
                                onClick={() => dispatch(estimatePoints({
                                    selectedBanks: ["alliance_bank"],
                                    selectedCategories: {
                                        "education": [100, 300],
                                        "utilities": [100, 300],
                                        "dinning": [100, 300],
                                    },
                                    months_to_estimate: 12,
                            }))}>
                                Calculate Points
                            </button>
                            <button
                                onClick={() => dispatch(estimateCashback({
                                    selectedBanks: ["alliance_bank"],
                                    selectedCategories: {
                                        "education": [100, 300],
                                        "utilities": [100, 300],
                                        "dinning": [100, 300],
                                    },
                                    months_to_estimate: 12,
                            }))}>
                                Calculate cashback
                            </button>
                            {
                                cards.estimatedPoints && <button
                                    onClick={() => dispatch(findPotentialRewards( cards.estimatedPoints[0] ))}>
                                Potential Rewards
                                </button>
                            }
                            {
                                cards.estimatedPoints && <button
                                    onClick={() => dispatch(findPotentialRewards( {
                                        cardName: "rhb_premier_visa_infinite",
                                        cardInfo: {
                                            "card_metadata": ["url", "rhb"], 
                                            "minmax_points": [19200, 57600],
                                        },
                                    } ))}>
                                Default Potential Rewards
                                </button>
                            }
                            <p>{cards.error || ''}</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Menu;