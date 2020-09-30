import React, { FC, useState } from 'react';
import {
    Checkbox,
    InputBox,
} from '../../components/CustomComponent';
import { useHistory } from 'react-router-dom';
import { Images } from '../../utils/Images';

type AuthState = {
    [key: string]: string,
    name: string,
    email: string;
}

// Construct types for component props
interface RegisterProps {
    
}

const slotInput = [
    {
        inputName: 'name',
        inputState: 'name',
        inputType: 'text',
        inputLabel: 'Name',
        inputAutocomplete: 'name',
    },
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email',
        inputAutocomplete: 'email',
    },
];

const Register: FC<RegisterProps> = () => {
    const history = useHistory();

    const [auth, setAuth] = useState<AuthState>({
        name: '',
        email: '',
    });

    const updateAuth = (value: string, state: string) => setAuth(() => ({...auth, [state]: value}));

    const [agree, setAgree] = useState(false);
    const updateAgree = () => setAgree(prevState => !prevState);

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
                        <h1>Welcome to AIVI</h1>
                        <p className="Auth-Subtitle">Let's get you started!</p>
                    </div>
                    <div className="Auth-SocMed">
                        <p>You can register with social media account</p>
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
                        <Checkbox
                            name="agree"
                            active={agree}
                            updateSelected={updateAgree}
                        >
                            <p>I agree to the <a href="/credit-card" target="_blank">Terms of use</a> and <a>Privacy Policy</a></p>
                        </Checkbox>
                    </div>
                    <div className="Auth-Action">
                        <button
                            className='Button'
                            disabled={!([auth.name, auth.email, agree].every(element => element))}
                        >Say Hello to AIVI</button>
                    </div>
                </div>
                <div className="Auth-SwitchAuth">
                    <p>Have an account? <span onClick={() => history.push('/sign-in')}>Sign In</span></p>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Register;