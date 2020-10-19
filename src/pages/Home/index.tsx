import React from 'react';
import { Images } from '../../utils/Images';
import '../../styles/Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Landing: React.FC = () => {
    return(
      <React.Fragment>
        <Header />
        <div className="Home-Body">

          {/* Headline */}
          <div className="Home-Headline">
            <div className="Home-Headline-Image">
              <img src={Images.logo_AIVI}/>
            </div>
            <div className="content">
              <h1>
                This is a <span className="red">headline</span>
              </h1>
              <p>
                When you’re on top of your money, life is good. We help you <br/>
                effortlessly manage your finances in one place.
              </p>
              <button className="Pages-Red-Button">Get Started</button>
            </div>
          </div>

          {/* Cards */}
          <div className="Home-Content">
            <div className="container">
              <div className="row">
                <div className=" col-6">
                  <img src={Images.image_home_img1}/>
                </div>
                <div className=" col-6">
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
                <div className=" col-6">
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
                <div className=" col-6">
                  <img src={Images.image_home_img1}/> 
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="box col-3">
                  <h5>Credit Card</h5>
                  <p>We bring all of your money to one place, from balances and bills to credit score and more.</p>
                  <img src={Images.arrow_right}/>
                </div>
                <div className="box col-3">
                  <h5>Personal Loans</h5>
                  <p>We bring all of your money to one place, from balances and bills to credit score and more.</p>
                  <img src={Images.arrow_right}/>
                </div>
                <div className="box col-3">
                  <h5>Balance Transfer</h5>
                  <p>We bring all of your money to one place, from balances and bills to credit score and more.</p>
                  <img src={Images.arrow_right}/>
                </div>
                <div className="box col-3">
                  <h5>Cash from Card</h5>
                  <p>We bring all of your money to one place, from balances and bills to credit score and more.</p>
                  <img src={Images.arrow_right}/>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="Home-Content-Video ">
              </div>
              </div>
              <div className="col-6">
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

          {/* download */}
          <div className="Home-Content-Download">
            <div className="Home-Content-Download-Title">
              <h1>
                This can be anything.
              </h1>
              <p>
                When you’re on top of your money, life is good. We help you
                effortlessly manage your finances in one place.
              </p>
            </div>
  
            <div className="Home-Content-Download-Details">
              <div className="Home-Content-Download-Details-Image">
                <img src={Images.image_home_mobile}/>
                <div className="Home-Content-Download-Details-Content">
                  <div className="content">
                      <h1>
                        Download our app
                      </h1>
                      <p>
                        When you’re on top of your money, life is good. We help you <br/>
                        effortlessly manage your finances in one place.
                      </p>
                      <div className="download-button">
                        <img src={Images.button_apple_download}/>
                        <img src={Images.button_android_download}/>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="Home-Body-Content">
          <div className="d-flex justify-content-between">
            <div className="Home-Body-Content-Title">Read Our Blog</div>
            <p>View all blog post <img src={Images.image_article_arrow_to_right}/></p>
          </div>
            
            <div className="Home-Body-Content-RelatedArticles">
                <div className="Home-Body-Content-RelatedArticles-Card1">
                    <div className="Home-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img3} /></div>
                    <div className="Home-Body-Content-CardDesc">
                        <div className="Home-Body-Content-CardDesc-Inner">
                            <div className="Home-Body-Content-CardDesc-Inner-Title">Charts are SkyRocketing</div>
                            <div className="Home-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                    to experiment with your team in a design sprint.
                            </div>
                            <div className="Home-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right}/></div>
                        </div>
                    </div>
                </div>
                <div className="Home-Body-Content-RelatedArticles-Card2">
                    <div className="Home-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img4} /></div>
                    <div className="Home-Body-Content-CardDesc">
                        <div className="Home-Body-Content-CardDesc-Inner">
                            <div className="Home-Body-Content-CardDesc-Inner-Title">Financial World with Aivi</div>
                            <div className="Home-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                    to experiment with your team in a design sprint.
                            </div>
                            <div className="Home-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right}/></div>
                        </div>
                    </div>
                </div>
                <div className="Home-Body-Content-RelatedArticles-Card3">
                    <div className="Home-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img5} /></div>
                    <div className="Home-Body-Content-CardDesc">
                        <div className="Home-Body-Content-CardDesc-Inner">
                            <div className="Home-Body-Content-CardDesc-Inner-Title">Analyst Confirm Breakthrough</div>
                            <div className="Home-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                    to experiment with your team in a design sprint.
                            </div>
                            <div className="Home-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right}/></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <Footer/>  
        </div>
      </React.Fragment>
    );
  };
  
  export default Landing;