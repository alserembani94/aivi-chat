import React, { FC, useState } from 'react';
import {
    Checkbox,
    InputBox,
} from '../../components/CustomComponent';
import '../../styles/SocialLogin.scss'; 
import { Images } from '../../utils/Images';

// Construct types for component props
interface SocialLoginProps {
    
}

const SocialLogin: FC<SocialLoginProps> = () => {

    return (
        <React.Fragment>
            <main className="SocialLogin-Body">
                <div className="SocialLogin-Avatar">
                    <img
                        src="https://i.imgur.com/gqSZQbW.png"
                        alt="AIVI Avatar"
                    />
                    <img id="insta" src={Images.socialLogin_insta} alt=""/>
                    <img id="fb" src={Images.socialLogin_fb} alt=""/>
                    <img id="google" src={Images.socialLogin_googleplus} alt=""/>
                    <img id="linkedin" src={Images.socialLogin_linkedin} alt=""/>
                </div>
                <div className="SocialLogin-Wrapper">
                    <div className="SocialLogin-Title">
                        <h1>Did you know?</h1>
                        <p className="SocialLogin-Subtitle">
                            Speed up your form filling process using <b>Social Autofill</b>. This allows you to fill forms automatically based on your social media. <br/> Try it now!
                        </p>
                    </div>
                    <div className="SocialLogin-Action">
                        <button
                            className='Button'
                        >Use Social Autofill</button>
                    </div>
                    <div className="SocialLogin-Notice">
                        <p className="SocialLogin-Subtitle">
                           <b>Notice:</b> By clicking "Use Social Autofill," you agree to letting us retrieve data from your social accounts to auto populate forms. You can manage your permission in “Profile & Settings”                        
                        </p>
                    </div>
                </div>
                <div className="SocialLogin-Manual">
                    <button
                        className='Button'
                    >Manual Form Filling</button>
                    <p>Skipping Social Autofill will take you 20 minutes longer to complete application</p>
                </div>
            </main>
        </React.Fragment>
    );
};

export default SocialLogin;