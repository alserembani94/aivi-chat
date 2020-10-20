import React, { FC, useState } from 'react';
import '../../styles/SocialLogin.scss'; 
import { Images } from '../../utils/Images';
import {
    IoLogoFacebook,
    IoLogoGoogle,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoMdArrowBack
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

// Construct types for component props
interface SocialLoginProps {
    
}

const SocialLogin: FC<SocialLoginProps> = () => {
    const [showSocialLogin, setShowSocialLogin] = useState(false);
    // const [socialLoginStatus, setSocialLoginstatus] = useState({
    const [socialLoginStatus] = useState({
        facebook: false,
        google: false,
        instagram: false,
        linkedin: false
    });

    const handleShow = () => {
        setShowSocialLogin(prevState => !prevState)
    }

    return (
        <React.Fragment>
            <main className="SocialLogin-Body">
                {!showSocialLogin ? 
                    <>
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
                                    onClick={handleShow}
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
                    </>
                    :
                    <>
                        <div className="SocialLogin-Connect">
                            <div className="SocialLogin-Back">
                                <button
                                    className="SocialLogin-Back-Button"
                                    onClick={handleShow}
                                >
                                    <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Back' }} >
                                        <IoMdArrowBack />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            <div className="SocialLogin-Connect-Title">
                                <h1>Let's Start By Linking To Your Social Accounts</h1>
                                <p className="SocialLogin-Connect-Subtitle">
                                    You only need to do this once. This will help you quickly complete form filling on all sorts of application you wish to do on our AIVI platform.
                                </p>
                            </div>
                            <div className="SocialLogin-Connect-Links">
                                <div className="SocialLogin-Connect-Facebook d-flex">
                                    <div className="SocialLogin-Connect-Icon">
                                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-FB' }} >
                                            <IoLogoFacebook />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="SocialLogin-Connect-Name">
                                        Facebook
                                    </div>
                                    <div className="SocialLogin-Connect-Button ml-auto">
                                        {!socialLoginStatus.facebook ? 
                                            <button className='connect-button'>Connect</button> :
                                            <button className='linked-button'>Linked</button>
                                        }
                                    </div>
                                </div>
                                <div className="SocialLogin-Connect-Google d-flex">
                                    <div className="SocialLogin-Connect-Icon">
                                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-FB' }} >
                                            <IoLogoGoogle />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="SocialLogin-Connect-Name">
                                        Google
                                    </div>
                                    <div className="SocialLogin-Connect-Button ml-auto">
                                        {!socialLoginStatus.google ? 
                                            <button className='connect-button'>Connect</button> :
                                            <button className='linked-button'>Linked</button>
                                        }
                                    </div>
                                </div>
                                <div className="SocialLogin-Connect-Instagram d-flex">
                                    <div className="SocialLogin-Connect-Icon">
                                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-FB' }} >
                                            <IoLogoInstagram />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="SocialLogin-Connect-Name">
                                        Instagram
                                    </div>
                                    <div className="SocialLogin-Connect-Button ml-auto">
                                        {!socialLoginStatus.instagram ? 
                                            <button className='connect-button'>Connect</button> :
                                            <button className='linked-button'>Linked</button>
                                        }
                                    </div>
                                </div>
                                <div className="SocialLogin-Connect-LinkedIn d-flex">
                                    <div className="SocialLogin-Connect-Icon">
                                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-FB' }} >
                                            <IoLogoLinkedin />
                                        </IconContext.Provider>
                                    </div>
                                    <div className="SocialLogin-Connect-Name">
                                        LinkedIn
                                    </div>
                                    <div className="SocialLogin-Connect-Button ml-auto">
                                        {!socialLoginStatus.linkedin ? 
                                            <button className='connect-button'>Connect</button> :
                                            <button className='linked-button'>Linked</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="SocialLogin-Connect-Action">
                                <button
                                    className='Button'
                                    disabled={!socialLoginStatus.facebook || 
                                              !socialLoginStatus.google || 
                                              !socialLoginStatus.instagram || 
                                              !socialLoginStatus.linkedin }
                                >Done!</button>
                            </div>
                        </div>
                        <div className="SocialLogin-Manual-Form">
                            <p>I prefer to fill forms manually</p>
                        </div>
                    </>
                }
            </main>
        </React.Fragment>
    );
};

export default SocialLogin;