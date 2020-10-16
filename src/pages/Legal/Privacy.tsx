import React, { FC } from 'react';

const Privacy: FC = () => {
    
    return (
        <React.Fragment>
            <main className="Privacy-Body">
                <section className="Privacy-Body-Section">
                    <div className="Privacy-Body-Content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="Privacy-Body-Content-Header">
                                        <div className="Privacy-Body-Content-Header-Main">
                                            We are serious about your privacy
                                        </div>
                                        <div className="Privacy-Body-Content-Header-Sub">
                                            With security scanning, multi-factor authentication and more, you can be <br/> assured your security is our top priority.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 col-md-4 Privacy-Body-Content-Objectives">
                                    <div className="Privacy-Body-Content-Objectives-Card">
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Icon">
                                            <div></div>
                                        </div>
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Title">Trusted</div>
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Content">
                                            Mint comes from the makers of TurboTax® and QuickBooks®, trusted by millions with sensitive data.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 Privacy-Body-Content-Objectives">
                                    <div className="Privacy-Body-Content-Objectives-Card">
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Icon">
                                            <div></div>
                                        </div>                                        
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Title">Protected</div>
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Content">
                                            Participates in security scanning with VeriSign to help ensure security for sensitive data transfer.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 Privacy-Body-Content-Objectives">
                                    <div className="Privacy-Body-Content-Objectives-Card">
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Icon">
                                            <div></div>
                                        </div>                                        
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Title">Dedicated</div>
                                        <div className="col-12 Privacy-Body-Content-Objectives-Card-Content">
                                            We use measures like multi-factor authentication, designed to help you protect access to your account.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 Privacy-Body-Content-LargeDetails">
                                    <div className="row">
                                        <div className="col-12 col-md-5 Privacy-Body-Content-LargeDetails-Text">
                                            <div className="Privacy-Body-Content-LargeDetails-Text-Header">
                                                We safeguard the mobile app
                                            </div>
                                            <div className="Privacy-Body-Content-LargeDetails-Text-Sub">
                                                We use the data you share with us to help you reach your financial goals while giving you choices on how we collect and share it. You also have the power to download, update, and delete your data right from your Intuit Account without having to call or email us.
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-7 Privacy-Body-Content-LargeDetails-Icon order-first order-md-last">
                                            <div className="mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 Privacy-Body-Content-LargeDetails">
                                    <div className="row">
                                        <div className="col-12 col-md-5 offset-md-2 Privacy-Body-Content-LargeDetails-Text">
                                            <div className="Privacy-Body-Content-LargeDetails-Text-Header">
                                                Multi-factor authentication
                                            </div>
                                            <div className="Privacy-Body-Content-LargeDetails-Text-Sub">
                                                It’s pretty common to share your information with online services these days. Our online security center has expert tips for keeping your business, personal info, and computer safe as you live your life online.                                            </div>
                                        </div>
                                        <div className="col-12 col-md-5 Privacy-Body-Content-LargeDetails-Icon order-first">
                                            <div className="mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
            </main>
        </React.Fragment>
    );
};

export default Privacy;