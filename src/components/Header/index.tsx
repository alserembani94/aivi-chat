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
    
    const auth = useSelector((state: any) => state.auth)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleNavigation = (route: string) => {
        history.push(route);
    };

    const handleSignOut = () => {
        dispatch(userSignOut());
        history.push('/');
    };
  return (
      <div className="Header ">
          <div className="container-fluid">
            <div className="d-flex justify-content-between row">
                <div className="col-6">
                    <button className="Header-Logo">
                        <img
                            src={Images.logo_AIVI}
                            alt="AIVI"
                        />
                    </button>
                </div>
                <div className="Header-Auth col-6 float-right">
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
                                    onClick={() => handleNavigation('/site-blog-list')}
                                >
                                    Blog
                                </button>
                                <button
                                    className="Header-SubLink"
                                    onClick={() => handleNavigation('/')}
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
          </div>
          
        </div>
  );
}

export default HeaderPage;