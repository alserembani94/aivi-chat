import React, { FC, useState } from 'react';
import {
    InputBox,
} from '../../components/CustomComponent';
import { useHistory } from 'react-router-dom';
import { Images } from '../../utils/Images';

type AuthState = {
    [key: string]: string,
    email: string,
    password: string;
}

// Construct types for component props
interface SignInProps {
    
}

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

const SignIn: FC<SignInProps> = () => {
    const history = useHistory();

    const [auth, setAuth] = useState<AuthState>({
        email: '',
        password: '',
    });

    const updateAuth = (value: string, state: string) => setAuth(() => ({...auth, [state]: value}));

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
                        <p>Sign in to your account</p>
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
                            disabled={!([auth.email, auth.password].every(element => element))}
                        >Say Hello to AIVI</button>
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