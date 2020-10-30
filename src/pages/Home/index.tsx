import React, { FC } from 'react';
import { Images } from '../../utils/Images';
import '../../styles/Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as Content from '../../PageContent/Home';

const Headline: FC = () => (
    <div className="Home-Section">
        <div className="Home-Headline">
            <div className="Home-Headline-Image">
                <img src={Images.logo_AIVI} alt=""/>
            </div>
            <div className="Home-Headline-Content">
                { Content.Headline.title }
                { Content.Headline.description }
                <button className="Pages-Red-Button">{Content.Headline.button}</button>
            </div>
        </div>
    </div>
);

const AIVIProducts: FC = () => (
    <div className="Home-Content Home-Section-Product">
        <div className="container">
            <div className="row">
                <div className=" col-12 col-md-6">
                    <img width="100%" src={Images.image_home_img1} alt="Home_image_1"/> 
                </div>
                <div className=" col-12 col-md-6 ">
                    <div className="Home-Content-Description">
                        <h1>
                            Easy Loan Application
                        </h1>
                        <p>
                            When you’re on top of your money, life is good. We help you
                            effortlessly manage your finances in one place.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className=" col-12 col-md-6 ">
                    <div className="Home-Content-Description">
                        <h1>
                            Financial Management
                        </h1>
                        <p>
                            When you’re on top of your money, life is good. We help you
                            effortlessly manage your finances in one place.
                        </p>
                    </div>
                </div>
                <div className=" col-12 col-md-6 order-first order-md-last">
                    <img width="100%" src={Images.image_home_img1}  alt="Home_image_2"/> 
                </div>
            </div>
        </div>
        <div className="Home-Content">
            <div className="Home-Content-Product">
                {
                    Content.AIVIProducts.map((product, index) => (
                        <div className="box" key={index}>
                            <h5>{product.name}</h5>
                            <p>{product.description}</p>
                            <img src={Images.arrow_right} alt="Home_image_1"/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
);

const AIVIDemo: FC = () => (
    <div className="Home-Content">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="Home-Content-Video ">
                        Something here
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="Home-Content-Video-Description">
                        <h1>
                            Watch our demo video right here
                        </h1>
                        <p>
                            When you’re on top of your money, life is good. We help you
                            effortlessly manage your finances in one place.
                        </p>
                        <button className="Pages-Red-Button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AIVIApp: FC = () => (
    <div className="Home-Content Home-Download">
        <div className="Home-Download-Container">
            <div className="Home-Download-Title">
                <h1>
                    This can be anything.
                </h1>
                <p>
                    When you’re on top of your money, life is good. We help you
                    effortlessly manage your finances in one place.
                </p>
            </div>
            <div className="Home-Download-Store">
                <div className="Home-Download-Store-Content">
                    <h1>
                        Download our app
                    </h1>
                    <p>
                        When you’re on top of your money, life is good. We help you effortlessly manage your finances in one place.
                    </p>
                    <div>
                        <img src={Images.button_apple_download} alt=""/>
                        <img src={Images.button_android_download} alt=""/>
                    </div>
                </div>
                <div className="Home-Download-Store-Image">
                    <img src={Images.image_home_mobile} alt="Mobile"/>
                </div>
            </div>

        </div>
    </div>
);

const HomeBlogs: FC = () => (
    <div className="Home-Body-Content">
        <div className="d-flex Home-Body-Blog ">
            <div className="Home-Body-Content-Title">Read Our Blog</div>
            <p className="ml-auto">View all blog post <img src={Images.image_article_arrow_to_right} alt="Mobile"/></p>
        </div>

        <div className="Home-Body-Content-RelatedArticles">
            <div className="Home-Body-Content-RelatedArticles-Card1">
                <div className="Home-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img3} alt="" /></div>
                <div className="Home-Body-Content-CardDesc">
                    <div className="Home-Body-Content-CardDesc-Inner">
                        <div className="Home-Body-Content-CardDesc-Inner-Title">Charts are SkyRocketing</div>
                        <div className="Home-Body-Content-CardDesc-Inner-Desc">
                            Explore and test different ideas, themes and styles instantly wheather you want<br/>
                            to experiment with your team in a design sprint.
                        </div>
                        <div className="Home-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right} alt=""/></div>
                    </div>
                </div>
            </div>
            <div className="Home-Body-Content-RelatedArticles-Card2">
                <div className="Home-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img4} alt="" /></div>
                <div className="Home-Body-Content-CardDesc">
                    <div className="Home-Body-Content-CardDesc-Inner">
                        <div className="Home-Body-Content-CardDesc-Inner-Title">Financial World with Aivi</div>
                        <div className="Home-Body-Content-CardDesc-Inner-Desc">
                            Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                to experiment with your team in a design sprint.
                        </div>
                        <div className="Home-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right} alt=""/></div>
                    </div>
                </div>
            </div>
            <div className="Home-Body-Content-RelatedArticles-Card3">
                <div className="Home-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img5} alt="" /></div>
                <div className="Home-Body-Content-CardDesc">
                    <div className="Home-Body-Content-CardDesc-Inner">
                        <div className="Home-Body-Content-CardDesc-Inner-Title">Analyst Confirm Breakthrough</div>
                        <div className="Home-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                to experiment with your team in a design sprint.
                        </div>
                        <div className="Home-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right} alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Landing: FC = () => (
    <React.Fragment>
        <div className="Home-Screen">
            <Header />
            <div className="Home-Body">

                {/* Headline */}
                <Headline />

                {/* Products */}
                <AIVIProducts />                
            
                {/* Demo */}
                <AIVIDemo />

                {/* download */}
                <AIVIApp />
                
                {/* Blogs */}
                {/* <HomeBlogs /> */}

            </div>
            <Footer/>
        </div>
    </React.Fragment>
);
  
export default Landing;