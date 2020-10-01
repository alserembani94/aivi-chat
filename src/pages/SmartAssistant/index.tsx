import React, { useEffect, useState } from 'react';

import {
    Chatbox,
    CashFromCard,
    CreditCard,
    BalanceTransfer,
    PersonalLoan,

    conversationState,
} from '../../components';
import { InputBox, Modal } from '../../components/CustomComponent';
import { Images } from '../../utils/Images';

// import { validateData } from './utils/DataValidation';

type AuthState = {
    [key: string]: string,
    email: string,
    password: string;
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

const SmartAssistant = () => {
    const [showChatInMobile, setShowChatInMobile] = useState(false);
    const [renderSection, setRenderSection] = useState('Credit Card');
    const [renderModel, setRenderModel] = useState(false);
    const sections = ['Cash From Card', 'Credit Card', 'Balance Transfer', 'Personal Loan'];

    useEffect(() => {
        // const rootStyle = document.documentElement.style;
        // rootStyle.setProperty('--sidebar-width', '10px');
        // console.log(validateData('Hello', 'email'));
        // setInterval({}, 1000); // refresh every second - Is this a good practice?
        // console.log(showChatInMobile);
    }, [showChatInMobile]);

    const handleChatboxModal = () => {
        setShowChatInMobile(prevState => { return !prevState });
    }

    // FOR DEBUG PURPOSE ONLY
    // START
    const handleSectionsMenu = () => {
        setRenderModel(prevState => { return !prevState });
    }

    const handleChangeSection = (section: string) => {
        setRenderSection(() => { return section })
        setRenderModel(prevState => { return !prevState });
    }
    // END

    // AUTH SECTION
    const [authenticated, setAuthenticated] = useState(false);
    const [authModal, setAuthModal] = useState(false);
    const [authOption, setAuthOption] = useState('Register');

    const openAuthModal = () => setAuthModal(() => true);
    const closeAuthModal = () => setAuthModal(() => false);

    const [auth, setAuth] = useState<AuthState>({
        email: '',
        password: '',
    });

    const toggleAuthOption = (value: string) => setAuthOption(() => value);

    const updateAuth = (value: string, state: string) => setAuth(() => ({...auth, [state]: value}));
    // END OF AUTH SECTION

    const handleSectionRendering = (sectionToRender: string) => {
        switch (renderSection) {
            case 'Cash From Card':
                return <CashFromCard />;
            case 'Credit Card':
                return <CreditCard
                    authenticated={authenticated}
                    authModal={authModal}
                    openAuthModal={openAuthModal}
                    closeAuthModal={closeAuthModal}
                />;
            case 'Balance Transfer':
                return <BalanceTransfer />;
            case 'Personal Loan':
                return <PersonalLoan />
            default:
                return <>Not Found</>;
        }
    };
    
    const [conversation, setConversation] = useState<conversationState[]>([
        {
            user: 'bot',
            timestamp: '2020-09-09',
            message: 'Welcome!',
        },
        {
            user: 'user',
            timestamp: '2020-09-09',
            message: 'Hey!',
        },
    ]);

    const updateConversation = (newConversation: conversationState) => setConversation(() => [...conversation, newConversation]);

    return (
        <main className="AIVI-Body">
            {/* <section className="AIVI-Body"> */}
                <section className="AIVI-Chatbox">
                    <img src={Images.logo_AIVI} alt="logo-aivi" className="AIVI-Logo" />
                    <Chatbox
                        conversation={conversation}
                        updateConversation={updateConversation}
                    />
                </section>
                <section className="AIVI-Leftbox">
                    { handleSectionRendering(renderSection) }
                </section>
            {/* </section> */}

            {/* FOR MOBILE VERSION ONLY */}
            {/* START */}
            <button
                className="AIVI-Chatbox-Mobile-Button Button"
                onClick={handleChatboxModal}
            >
                C
            </button>
            <section
                className={`AIVI-Chatbox-Mobile-Model ${showChatInMobile ? `AIVI-Chatbox-Mobile-Show` : `AIVI-Chatbox-Mobile-Hide`}`}
            >
                <Chatbox
                    conversation={conversation}
                    updateConversation={updateConversation}
                />
            </section>
            {/* END */}


            {/* FOR DEBUG PURPOSE ONLY */}
            {/* START */}
            <button className="Temporary-ChangeRender" onClick={handleSectionsMenu}>
                Change Section
            </button>
            <div className="Temporary-Sections" data-visible={renderModel.toString()}>
                <ul>
                    {
                        sections.map((section, index) => <li onClick={() => handleChangeSection(section)} key={index}>{section}</li>)
                    }
                </ul>
            </div>
            {/* END */}

            <Modal
                modalName='Authentication'
                visible={authModal}
                closeModal={closeAuthModal}
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
                                            value={auth[slotItem.inputState]}
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
                                    onClick={() => toggleAuthOption('Confirm Email')}
                                >Complete Registration</button>
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
                                    Thank you for signing up for AIVI, you’ll be receiving an email shortly, it may take a few minutes. <br />
                                    Follow the instructions in the email to verify your account. <br />
                                    If you don’t see the email, be sure to check your junk, spam, or other folders. <br />
                                    Still haven't received the email? <a href="#">Send again</a><br />
                                </p>
                            </div>
                            <div className="Auth-Action">
                                <button
                                    className='Button'
                                    // Need something to check periodically for confirm registration
                                    onClick={() => toggleAuthOption('Email Confirmed')}
                                >Continue</button>
                            </div>
                        </>
                    )
                    : authOption === 'Email Confirmed'
                    && (
                        <>
                            <div className="Auth-Title">
                                <h1>Email successfully verified!</h1>
                                <p className="Auth-Subtitle">You may now proceed to experience the full power of AIVI!</p>
                            </div>
                            <div className="Auth-Action">
                                <button
                                    className='Button'
                                    // Need something to check periodically for confirm registration
                                    onClick={() => console.log('pro')}
                                >Continue</button>
                            </div>
                        </>
                    )
                }
                
            </Modal>
        </main>
  );
}

export default SmartAssistant;
