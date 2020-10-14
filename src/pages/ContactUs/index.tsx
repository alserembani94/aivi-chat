import React from 'react';
import { Images } from '../../utils/Images';
import '../../styles/ContactUs.scss';

const ContactUs: React.FC = () => {

    return (
        <React.Fragment>
            <main className="ContactUs-Body">
                <section className="ContactUs-Body-Section">
              
                    <div className="ContactUs-Body-Content">

                        <div className="ContactUs-Body-Content-Header">
                            <div className="ContactUs-Body-Content-Header-Note">
                                <div className="ContactUs-Body-Content-Header-Note-Main">Get in touch with us.</div>
                                <div className="ContactUs-Body-Content-Header-Note-Sub">We are here to help you. Feel free to reach out to us.</div>
                            </div>
                        </div>

                        <div className="ContactUs-Body-Content-Note">
                            <div  className="ContactUs-Body-Content-Note-Padding">
                                <div><span>Call us</span><br/>
                                    03230345-2100
                                </div>
                                <div><span>Email us</span><br/>
                                    info@chat.com
                                </div>
                                <div><span>Our location</span><br/>
                                    191A, Jln Dato Keramat Kampung Dato Keramat<br/>
                                    5400 Wilayah Persekutuan 54000 Malaysia
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                        
            </main>
        </React.Fragment>
    );
};

export default ContactUs;