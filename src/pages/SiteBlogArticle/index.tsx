import React from 'react';
import { Images } from '../../utils/Images';
import '../../styles/SiteBlogArticle.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import moment from 'moment';
import { DateTime } from 'luxon';

// MOCK: Blog data
const mockBlogData = {
    topic: 'finance',
    date: '2020-08-14',
    title: 'Financial World with AIVI',
    description: 'Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.',
    id: 1,
    img: Images.image_site_img1,
    content: (
        <div>
            <p>
                Surveys repeatedly show that <b>advisers risk being out of step</b>, particularly with their millennial clients, who want to know more about socially responsible or environmental, social and governance investing.<br />

                In a recent <i>TIAA Global Asset Management survey</i>, some 36% of the advisers who participated said that they can’t adequately evaluate the performance of socially responsible investments.<br />

                At the same time, <u>investors, particularly millennials and women</u>, expressed a growing interest in adding socially responsible investments to their portfolios.<br />
            </p>
            <img className="img-small" src="/" alt="Hello" />
            <p>
                Recent studies by Morgan Stanley have shown more than 70% of women, when asked, want socially responsible investments in their portfolios, and 85% of millennial survey respondents seek to achieve sustainability with their investments.<br />

                So are advisers who concede that they don’t yet speak fluently the language of ESG criteria doomed? Not at all.<br />

                Plenty of avenues exist for advisers to bolster their knowledge, the vernacular, the acronyms and the significant milestones of the ESG world.<br />

                “It is a tremendous opportunity to get ahead of the curve,” says Marlo Stil, an adviser in managing partner in the Rancho Mirage, Calif., office of Wealth Consulting Group, which is based in Las Vegas.<br />

                She focuses on helping other advisers and clients learn more about socially responsible investing.
            </p>
        </div>
    ),
    author: 'Miriam Ross',
    authorPosition: 'Staff Reporter, AIVI',
};

const SiteBlogArticle: React.FC = () => {

    return (
        <React.Fragment>
            <main className="SiteBlogList-Page">
                <Header />
                <main className="SiteBlogArticle-Body">
                    <section className="SiteBlogArticle-Body-Searchbar">
                        <button className="SiteBlogArticle-Body-Searchbar-Search">Search</button>
                        <button className="SiteBlogArticle-Body-Searchbar-Categories">All Categories</button>
                    </section>

                    <section className="SiteBlogArticle-Body-Content">
                        <div className="SiteBlogArticle-Body-Content-Title">
                            <p className="SiteBlogArticle-Body-Content-Title-Stamp">
                                <span>{DateTime.fromISO(mockBlogData.date).toFormat('dd LLLL yyyy')}</span> / <span>{mockBlogData.topic}</span>
                            </p>
                            <p className="SiteBlogArticle-Body-Content-Title-Name">
                                {mockBlogData.title}
                            </p>
                            <p className="SiteBlogArticle-Body-Content-Title-Desc">
                                {mockBlogData.description}
                            </p>
                        </div>
                        <div className="SiteBlogArticle-Body-Content-Thumbnail">
                            <img src={mockBlogData.img} alt={mockBlogData.title} />
                        </div>
                        <div className="SiteBlogArticle-Body-Content-View">
                            {mockBlogData.content}
                        </div>
                        <div className="SiteBlogArticle-Body-Content-Meta">
                            <p><span>By {mockBlogData.author},</span> {mockBlogData.authorPosition}</p>
                            <div className="SiteBlogArticle-Body-Content-SocMed">
                                <p>Share on</p>
                            </div>
                        </div>
                    </section>
                    <Footer/> 
                </main>
            </main>
        </React.Fragment>
    );
};

export default SiteBlogArticle;


/*

<div className="SiteBlogArticle-Body-Content-Header">
                                <div className="SiteBlogArticle-Body-Content-Header-Date">14 August 2020 / FINANCE</div>
                                <div className="SiteBlogArticle-Body-Content-Header-MainHeader">Financial World with Aivi</div>
                                <div className="SiteBlogArticle-Body-Content-Header-SecondaryHeader">Explore and test different ideas, themes and styles instantly whether you want to experiment<br/>
                                    with your team in a design sprint.</div>
                            </div>
                            <div className="SiteBlogArticle-Body-Content-Article1">
                                <div className="SiteBlogArticle-Body-Content-Article1-Card">
                                    <div className="SiteBlogArticle-Body-Content-Article1-Card-Img1"><img src={Images.image_article_img1} alt=""/></div>
                                    <div className="SiteBlogArticle-Body-Content-Article1-Card-Text1">
                                        <div>Surveys repeatedly show that advisers risk being out of step, particulaerly with their millenial clients, whoc want to
                                            <br/>know more about socially responsible or environmental, social and governance investing.
                                        </div>
                                        <div>In a recent TIAA Global Asset Management survey, some 36% of the advisers who participated said that they
                                            <br/>can't adequately evaluate the performance of socially responsible investments.
                                        </div>
                                        <div>At the same time, investors, particularly millenials and women, expressed a growing interest in adding socially
                                            <br/>responsible investments to their portfolios.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="SiteBlogArticle-Body-Content-Article2">
                                <div className="SiteBlogArticle-Body-Content-Article2-Card">
                                    <div className="SiteBlogArticle-Body-Content-Article2-Card-Img1"><img src={Images.image_article_img2} alt=""/></div>
                                    <div className="SiteBlogArticle-Body-Content-Article2-Card-Text1">
                                        <div>Recent studies by Morgan Stanley have shown more than 70% of women, when asked, want socially responsible
                                            <br/>investments in their portfolios, and 85% of millenial survey respondents seek to achieve sustainability with their
                                            <br/>investments.
                                        </div>
                                        <div>So are advisers who concede that they don't yet speak fluently the language of ESG criteria doomed? Not at all.</div>
                                        <div>Plenty of avenues exist for advisers to bolster their knowledge, the vernacular, the acronyms and the significant
                                            <br/>milestones of the ESG world.
                                        </div>
                                        <div>"It is tremendous opportunity to get ahead of the curve," says Marlo Stil, an adviser in managing partner in the
                                            <br/>Rancho Mirage, Calif., office of Wealth Consulting Group, which is based in Las Vegas.
                                        </div>
                                        <div>She focuses on helping other advisers and clients learn more about socially responsible investing.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="SiteBlogArticle-Body-Content-Author">
                                <div className="SiteBlogArticle-Body-Content-Author-Card">
                                    <div className="SiteBlogArticle-Body-Content-Author-Card-NamePosition">By Miriam Ross 
                                        <span className="SiteBlogArticle-Body-Content-Author-Card-Post">&nbsp;staff reporter, AIVI</span></div>
                                    <div className="SiteBlogArticle-Body-Content-Author-Card-SocialMedia">
                                        <span className="SiteBlogArticle-Body-Content-Author-Card-SocialMedia-Shareon">Share on</span>
                                        <span className="SiteBlogArticle-Body-Content-Author-Card-SocialMedia-Fb"><img src={Images.icon_fb_img} alt=""/></span>
                                        <span className="SiteBlogArticle-Body-Content-Author-Card-SocialMedia-Google"><img src={Images.icon_google_img} alt=""/></span>
                                    </div>
                                </div>
                            </div>
                            <div><hr className="SiteBlogArticle-Body-Content-Divider"/></div>
                            <div className="SiteBlogArticle-Related-Articles">
                                <div className="SiteBlogArticle-Body-Content-Title">Related Articles</div>
                                <div className="SiteBlogArticle-Body-Content-RelatedArticles">
                                    <div className="SiteBlogArticle-Body-Content-RelatedArticles-Card1">
                                        <div className="SiteBlogArticle-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img3} alt="" /></div>
                                        <div className="SiteBlogArticle-Body-Content-CardDesc">
                                            <div className="SiteBlogArticle-Body-Content-CardDesc-Inner">
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Title">Charts are SkyRocketing</div>
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                                        to experiment with your team in a design sprint.
                                                </div>
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right} alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SiteBlogArticle-Body-Content-RelatedArticles-Card2">
                                        <div className="SiteBlogArticle-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img4} alt="" /></div>
                                        <div className="SiteBlogArticle-Body-Content-CardDesc">
                                            <div className="SiteBlogArticle-Body-Content-CardDesc-Inner">
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Title">Financial World with Aivi</div>
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                                        to experiment with your team in a design sprint.
                                                </div>
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right} alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="SiteBlogArticle-Body-Content-RelatedArticles-Card3">
                                        <div className="SiteBlogArticle-Body-Content-RelatedArticles-CardImage"><img src={Images.image_article_img5} alt="" /></div>
                                        <div className="SiteBlogArticle-Body-Content-CardDesc">
                                            <div className="SiteBlogArticle-Body-Content-CardDesc-Inner">
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Title">Analyst Confirm Breakthrough</div>
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Desc">Explore and test different ideas, themes and styles instantly wheather you want<br/>
                                                        to experiment with your team in a design sprint.
                                                </div>
                                                <div className="SiteBlogArticle-Body-Content-CardDesc-Inner-Arrow"><img src={Images.image_article_arrow_to_right} alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>

*/