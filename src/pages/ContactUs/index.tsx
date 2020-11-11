import React from 'react';
// import { Images } from '../../utils/Images';
import '../../styles/ContactUs.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Company } from '../../PageContent/ContactUs';

const ContactUs: React.FC = () => {

    return (
        <React.Fragment>
            <main className="ContactUs-Page">
                <Header />
                <section className="ContactUs-Body">
                    <div className="ContactUs-Content">
                        <div className="ContactUs-Header">
                            <h1>Get in touch with us!</h1>
                            <p>We are here to help you. Feel free to reach out to us.</p>
                        </div>
                        <div className="ContactUs-Card">
                            <p><span>Call us</span></p>
                            <p>{Company.phoneNo}</p>
                            <br />
                            <p><span>Email us</span></p>
                            <p>info@chat.com</p>
                            <br />
                            <p><span>Our location</span></p>
                            {Company.address.map((addressLine, index) => <p key={index}>{addressLine}</p>)}
                        </div>
                    </div>
                    <div className="ContactUs-Art" />
                </section>
                {/* <section className="ContactUs-Body-Section">
              
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

                </section> */}
                <Footer/>
                        
            </main>
        </React.Fragment>
    );
};

export default ContactUs;