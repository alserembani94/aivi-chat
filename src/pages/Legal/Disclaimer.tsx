import React, { FC } from 'react';

const Disclaimer: FC = () => {
    
    return (
        <React.Fragment>
            <main className="Terms-Body">
                <section className="Terms-Body-Section">
                    <div className="Terms-Body-Content">
                        <div className="container">
                            <div className="row Terms-Body-Content-Row">
                                <div className="col-12">
                                    <div className="Terms-Body-Content-Header">
                                        <div className="Terms-Body-Content-Header-Main">
                                            Disclaimer
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="Terms-Body-Content-Details">
                                        <div className="Terms-Body-Content-Details-Main">
                                            <p>We are a professional network that helps engineers and data scientists find great companies to work at. When you sign up, you'll complete a short, multiple choice quiz. If you're actively looking for a job, we’ll match you with companies that are looking for people with your specific knowledge and skillset, and then fast track you through their hiring processes.</p>
                                            <p>When you're not actively looking, you're still a member of the network with access to all of the Triplebyte resources, including our job directory, Community, and practice hub. We also provide a personalized feedback report on strengths and weaknesses for everyone who completes our quiz, so you'll know where to focus if you want to upskill. Whether you're a beginner or a senior engineer, we'll give you a range of technical resource recommendations for each programming area we assess.</p>
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

export default Disclaimer;