import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputBox } from '../../components/CustomComponent';
import { userSignUpConfirm } from '../../store/reducers/auth';

interface Props {
    
}

const codeInputProps = {
    inputName: 'code',
    inputState: 'code',
    inputType: 'text',
    inputLabel: 'Verification Code',
};

const ConfirmRegister: FC<Props> = () => {
    const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const [code, setCode] = useState('');

    const updateCode = (newCode: string) => setCode(() => newCode);

    const handleConfirmRegister = async () => {
        dispatch(userSignUpConfirm({
            email: auth.tempData.email,
            code,
        }));
    };

    useEffect(() => {
        !auth.tempData.email && history.push('/sign-in');

        auth.user.username && history.push('/main-menu');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

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
                        <p className="Auth-Subtitle">Thank you for signing up with AIVI!<br /><br /></p>
                        <p>
                            The verification code has been sent to your email. To complete your registration, please enter the verification code sent to your email.<br /><br />
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
                            disabled={!code}
                            onClick={handleConfirmRegister}
                        >{auth.loading ? '...' : Object.keys(auth.data).length !== 0 ? 'Successfully Registered!' : 'Confirm Registration'}</button>
                    </div>
                </div>
                <div className="Auth-SwitchAuth">
                    <p>Don't have an account? <span onClick={() => history.push('/register')}>Register an account</span></p>
                </div>
            </main>
        </React.Fragment>
    );
};

export default ConfirmRegister
