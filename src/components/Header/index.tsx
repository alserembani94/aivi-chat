import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    useHistory,
} from 'react-router-dom';
import { userSignOut } from '../../store/reducers/auth';
import {
    Images,
} from '../../utils/Images';

const HeaderPage: FC = () => {
    
    const auth = useSelector((state: any) => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNavigation = (route: string) => history.push(route);

    const handleSignOut = () => {
        dispatch(userSignOut());
        history.push('/');
    };
    return (
        <div className="Header">
            <div className="Header-Home">
                <button className="Header-Logo">
                    <img
                        src={Images.logo_AIVI}
                        alt="AIVI"
                    />
                </button>
            </div>
            <div className="Header-Auth">
                {
                    auth.user?.username
                    ? (
                        <>
                            <button
                                className="Header-Register"
                                onClick={handleSignOut}
                            >Sign Out</button>
                        </>
                    )
                    : (
                        <>
                            <button
                                className="Header-SubLink"
                                onClick={() => handleNavigation('/blog')}
                            >
                                Blog
                            </button>
                            <button
                                className="Header-SubLink"
                                onClick={() => handleNavigation('/faq')}
                            >
                                FAQ
                            </button>
                            <button
                                className="Header-SignIn"
                                onClick={() => handleNavigation('/sign-in')}
                            >
                                Sign In
                            </button>
                            
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default HeaderPage;