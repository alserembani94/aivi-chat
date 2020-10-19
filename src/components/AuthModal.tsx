import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userSignIn, userSignUp, userSignUpConfirm } from '../store/reducers/auth';
import { hideAuthModal } from '../store/reducers/authModal';
import { Images } from '../utils/Images';
import { InputBox, Modal } from './CustomComponent';

type AuthState = {
    [key: string]: string,
    email: string,
    password: string;
    name: string;
    phoneNo: string;
};

// Construct types for component props
interface AuthModalProps {
    nextLocation: string;
}

const signInInput = [
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

const registerInput = [
    {
        inputName: 'name',
        inputState: 'name',
        inputType: 'text',
        inputLabel: 'Name',
    },
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email',
    },
    {
        inputName: 'mobileNo',
        inputState: 'mobileNo',
        inputType: 'text',
        inputLabel: 'Mobile Phone No.',
    },
    {
        inputName: 'password',
        inputState: 'password',
        inputType: 'password',
        inputLabel: 'Password',
    },
    {
        inputName: 'confirmPassword',
        inputState: 'confirmPassword',
        inputType: 'password',
        inputLabel: 'Confirm Password',
    },
];

const codeInputProps = {
    inputName: 'code',
    inputState: 'code',
    inputType: 'text',
    inputLabel: 'Verification Code',
};

const AuthModal: React.FC<AuthModalProps> = ({ nextLocation }) => {
    const auth = useSelector((state: any) => state.auth);
    const authModal = useSelector((state: any) => state.authModal);
    const dispatch = useDispatch();

    const history = useHistory();

    const [code, setCode] = useState('');

    // AUTH SECTION
    const [authOption, setAuthOption] = useState('Register');

    const [authInput, setAuthInput] = useState<AuthState>({
        email: auth.tempData.email || '',
        password: '',
        name: auth.tempData.name || '',
        phoneNo: '',
    });

    const toggleAuthOption = (value: string) => setAuthOption(() => value);

    const updateAuth = (value: string, state: string) => setAuthInput(() => ({...authInput, [state]: value}));

    const submitRegistration = () => {
        dispatch(userSignUp(authInput));
        toggleAuthOption('Confirm Email');
    };

    const handleSignIn = () => {
        dispatch(userSignIn({
            email: authInput.email,
            password: authInput.password,
        }));
        toggleAuthOption('Sign In Success');
    }

    const submitConfirmRegistration = () => {
        dispatch(userSignUpConfirm({
            email: authInput.email,
            code,
        }));
        toggleAuthOption('Email Confirmed');
    };

    const updateCode = (newCode: string) => setCode(() => newCode);

    const handleProceed = () => {
        history.push(nextLocation);
    };

    return (
        <React.Fragment>
            <Modal
                modalName='Authentication'
                visible={authModal.visible}
                closeModal={() => dispatch(hideAuthModal())}
            >
                {
                    authOption === 'Sign In'
                    ? (
                        <>
                            <div className="Auth-Title">
                                <h1>Welcome back to AIVI!</h1>
                                <p className="Auth-Subtitle">Sign in to your account</p>
                            </div>
                            <div className="Auth-Inputs">
                                {
                                    signInInput.map((slotItem, index) => (
                                        <InputBox
                                            key={index}
                                            value={authInput[slotItem.inputState]}
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
                                    disabled={!([authInput.email, authInput.password].every(element => element))}
                                    onClick={handleSignIn}
                                >Sign In</button>
                            </div>
                            <div className="Auth-SwitchAuth">
                                <p>New to AIVI? <span onClick={() => toggleAuthOption('Register') }>Register an account</span></p>
                            </div>
                        </>
                    )
                    : authOption === 'Register' 
                    ? (
                        <>
                            <div className="Auth-Title">
                                <h1>Do more with AIVI!</h1>
                                <p className="Auth-Subtitle">Complete your account registration</p>
                            </div>
                            <div className="Auth-Inputs">
                                {
                                    registerInput.map((slotItem, index) => (
                                        <InputBox
                                            key={index}
                                            value={authInput[slotItem.inputState]}
                                            inputProps={slotItem}
                                            handleInputChange={updateAuth}
                                        />
                                    ))
                                }
                            </div>
                            <div className="Auth-Action">
                                <button
                                    className='Button'
                                    // disabled={!([auth.name, auth.email, auth.mobileNo, auth.password, auth.password === auth.confirmPassword].every(element => element))}
                                    onClick={submitRegistration}
                                >{auth.loading ? 'Loading...' : 'Complete Registration'}</button>
                            </div>
                            <div className="Auth-SwitchAuth">
                                <p>Have an account? <span onClick={() => toggleAuthOption('Sign In')}>Sign in</span></p>
                            </div>
                        </>
                    )
                    : authOption === 'Confirm Email'
                    ? (
                        <>
                            <div className="Auth-Title">
                                <h1>Welcome to AIVI!</h1>
                                <p className="Auth-Subtitle">Your Progress Is Now Saved</p>
                                <p className="Auth-Description">
                                    {/* Thank you for signing up for AIVI, you’ll be receiving an email shortly, it may take a few minutes. <br />
                                    Follow the instructions in the email to verify your account. <br />
                                    If you don’t see the email, be sure to check your junk, spam, or other folders. <br />
                                    Still haven't received the email? <a href="/">Send again</a><br /> */}
                                    Thank you for signing up with AIVI!<br />
                                    The verification code has been sent to your email. To complete your registration, please enter the verification code sent to your email.<br />
                                    In case you don't see the email, check your spam folder and add exception.

                                </p>
                            </div>
                            <div className="Auth-Inputs">
                                <InputBox
                                    value={code}
                                    inputProps={codeInputProps}
                                    handleInputChange={updateCode}
                                />
                            </div>
                            <div className="Auth-Action">
                                <button
                                    className='Button'
                                    // Need something to check periodically for confirm registration
                                    onClick={submitConfirmRegistration}
                                >{auth.loading ? 'Loading...' : 'Continue'}</button>
                            </div>
                        </>
                    )
                    : authOption === 'Email Confirmed'
                    ? (
                        <>
                            <div className="Auth-Title">
                                <h1>Email successfully verified!</h1>
                                <p className="Auth-Subtitle">You may now proceed to experience the full power of AIVI!</p>
                            </div>
                            <div className="Auth-Action">
                                <button
                                    className='Button'
                                    // Need something to check periodically for confirm registration
                                    onClick={handleProceed}
                                >Continue</button>
                            </div>
                        </>
                    )
                    : authOption === 'Sign In Success'
                    && (
                        <>
                            <div className="Auth-Title">
                                <h1>Welcome!</h1>
                                <p className="Auth-Subtitle">You have successfully signed in!</p>
                            </div>
                            <div className="Auth-Action">
                                <button
                                    className='Button'
                                    // Need something to check periodically for confirm registration
                                    onClick={handleProceed}
                                >Continue</button>
                            </div>
                        </>
                    )
                }
                
            </Modal>
        </React.Fragment>
    );
};

export default AuthModal;
