import React, { FC } from 'react';
import {
    IoIosArrowBack,
    IoIosArrowForward,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

// Construct types for component props
interface LoanDetailProps {
    
}

const LoanDetail: FC<LoanDetailProps> = () => {
    return (
        <React.Fragment>
            <div className="LoanDetail-Action">
                <button>
                    
                    <IconContext.Provider value={{ className: 'Icon Icon-Brand Icon-Details-Next' }} >
                        <IoIosArrowBack />
                    </IconContext.Provider>
                    See previous card
                </button>
                <button>
                    See next card
                    <IconContext.Provider value={{ className: 'Icon Icon-Brand Icon-Details-Next' }} >
                        <IoIosArrowForward />
                    </IconContext.Provider>
                </button>
            </div>
            <div className="LoanDetail-Content">
                <div className="LoanDetail-Header">
                    <div className="LoanDetail-Header-Image">

                    </div>
                    <div className="LoanDetail-Header-Description">

                    </div>
                </div>
                <div className="LoanDetail-Info"></div>
                <div className="LoanDetail-Section">
                    <div className="LoanDetail-Section-Title">
                        <p>Rewards</p>
                    </div>
                    <div className="LoanDetail-Section-Body">

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoanDetail;