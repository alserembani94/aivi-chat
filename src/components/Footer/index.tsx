import React from "react";
import { Images } from '../../utils/Images';

const FooterPage = () => {
  return (
      <div className="Footer-Wrapper">
          <div className="container-fluid">
            <div className="row">
                <div className="col-7">
                    <div className="Footer-Content1">
                        <p>Personal Capital Advisors Corporation (“PCAC”) is a registered investment adviser with 
                            the Securities and Exchange Commission (“SEC”). SEC registration does not imply a certain level 
                            of skill or training. Investing involves risk. Past performance is not a guarantee nor indicative 
                            of future returns. The value of your investment will fluctuate, and you may lose money. All charts, 
                            figures, and graphs are for illustrative purposes only and do not represent an actual client experience. 
                            Featured individuals are actors and not clients of PCAC. Advisory services are offered for a 
                            fee by PCAC, a wholly owned subsidiary of Personal Capital Corporation, an Empower company. 
                            Personal Capital Corporation is a wholly owned subsidiary of Empower Holdings, LLC. 
                            <a href="#"> Read full disclosures</a></p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="Footer-Content2">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <img className="logo" src={Images.logo_AIVI_white}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button><img className="download" src={Images.button_apple_download_white}/></button>
                                </div>
                                <div className="col-6">
                                    <button ><img className="download" src={Images.button_android_download_white}/></button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <button><img src={Images.icon_facebook_footer}/></button>
                                </div>
                                <div className="col-2">
                                    <button><img src={Images.icon_messanger_footer}/></button>
                                </div>
                                <div className="col-2">
                                    <button><img src={Images.icon_youtube_footer}/></button>
                                </div>
                                <div className="col-2">
                                    <button><img src={Images.icon_google_footer}/></button>
                                </div>
                                <div className="col-2">
                                    <button><img src={Images.icon_insta_footer}/></button>
                                </div>
                                <div className="col-2">
                                    <button><img src={Images.icon_linkedin_footer}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default FooterPage;