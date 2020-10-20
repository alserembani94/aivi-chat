import React, { FC } from 'react';
import '../../styles/Page404.scss';
import Header from '../../components/Header';

const Page404: FC = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="Page404-Body">
                <section className="Page404-Body-Section">
                    <div className="Page404-Body-Content">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 Page404-Body-Content-Header">
                                    404
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 Page404-Body-Content-Details">
                                    Oops, the page you’re trying to reach doesn’t exist.
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 Page404-Body-Content-Button">
                                    <button>Go Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Page404;