import React, { FC, useEffect, useState } from 'react';
import {
    InputBox,
} from '../../components/CustomComponent';
import { useHistory } from 'react-router-dom';
import { Images } from '../../utils/Images';

import { useDispatch, useSelector } from 'react-redux';
import { userSignIn } from '../../store/reducers/auth';

type AuthState = {
    [key: string]: string,
    email: string,
    password: string;
}

// Construct types for component props
// interface SignInProps {
    
// }

const slotInput = [
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email',
        inputAutocomplete: 'email',
    },
    {
        inputName: 'password',
        inputState: 'password',
        inputType: 'password',
        inputLabel: 'Password',
        inputAutocomplete: 'current-password',
    },
];

const SignIn: FC<any> = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.auth);

    const [auth, setAuth] = useState<AuthState>({
        email: '',
        password: '',
    });

    const updateAuth = (value: string, state: string) => setAuth(() => ({...auth, [state]: value}));

    const handleSignIn = async () => {
        await dispatch(userSignIn(auth));
    };

    useEffect(() => {
        switch (state.error) {
            case 'User is not confirmed.':
                // 
                history.push('/confirm-register'); // Supposed to redirect to confirm email page
                break;
            case 'User does not exist.':
                // Don't need to do anything, just clear the state
                // Or maybe bring to register?
                break;
            default:
        }

        state.user.username && history.push('/main-menu');
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <React.Fragment>
            <main className="Auth-Page">
                <div className="Auth-Avatar">
                    <img
                        src="https://i.imgur.com/gqSZQbW.png"
                        alt="AIVI Avatar"
                    />
                </div>
                <div className="Auth-Wrapper">
                    <div className="Auth-Title">
                        <h1>Welcome back to AIVI!</h1>
                        <p className="Auth-Subtitle">Sign in to your account</p>
                    </div>
                    <div className="Auth-Inputs">
                        {
                            slotInput.map((slotItem, index) => (
                                <InputBox
                                    key={index}
                                    value={auth[slotItem.inputState]}
                                    inputProps={slotItem}
                                    handleInputChange={updateAuth}
                                />
                            ))
                        }
                        <button
                            className="Auth-Inputs-Forgot"
                        >Forgot your password?</button>
                    </div>
                    <div className="Auth-SocMed">
                        <p>You can sign in with social media account</p>
                        <div className="Auth-SocMed-Buttons">
                            <button>
                                <img
                                    src={Images.icon_facebook_small}
                                    alt="F"
                                    data-for="Facebook"
                                />
                            </button>
                            <button>
                                <img
                                    src={Images.icon_google_small}
                                    alt="G"
                                    data-for="Google"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="Auth-Action">
                        <button
                            className='Button'
                            disabled={(!([auth.email, auth.password].every(element => element)) || state.loading)}
                            onClick={handleSignIn}
                        >{state.loading ? '...' : Object.keys(state.data).length !== 0 ? 'Signed In!' : 'Say Hello to AIVI'}</button>
                    </div>
                </div>
                <div className="Auth-SwitchAuth">
                    <p>Don't have an account? <span onClick={() => history.push('/register')}>Register an account</span></p>
                </div>
            </main>
        </React.Fragment>
    );
};

export default SignIn;