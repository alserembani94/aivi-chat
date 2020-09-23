import React from 'react';
import {
    IoIosArrowDown,
    IoIosArrowRoundForward,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { Images } from '../../utils/Images';

interface CashbackItemProps {
    expandAll?: boolean;
    toggleExpandAll?: () => void;
}

const CashbackItem: React.FC<CashbackItemProps> = ({ expandAll, toggleExpandAll }) => {
    const [isExpanded, setExpanded] = React.useState(false);

    const toggleExpanded = () => {
        setExpanded(prevState => !prevState);
    }

    React.useEffect(() => {
        (expandAll !== undefined) && setExpanded(() => expandAll);
    }, [expandAll]);

    return (
        <div className="CardResult-Wrapper">
            <div className="CardResult-Main">
                <div className="CardResult-Card">
                    <div className="CardResult-Card-Image">

                    </div>
                    <p className="CardResult-Card-Name">Card Name Here</p>
                </div>
                <div className="CardResult-Details">
                    <div className="CardResult-Details-TotalCollection">
                        <p className="CardResult-Details-Label">Potential Cashback</p>
                        <p className="CardResult-Details-Data">RM 1200 - RM 1300</p>
                    </div>
                    <div className="CardResult-Details-Period">
                        <p className="CardResult-Details-Label">Period</p>
                        <p className="CardResult-Details-Data">12 months</p>
                    </div>
                </div>
            </div>
            <div className="CardResult-Returns" data-expanded={isExpanded}>
                <div className="CardResult-Returns-Category">
                    <p className="CardResult-Returns-Category-Title">Shopping (online)</p>
                    <div className="CardResult-Returns-Category-Content">
                        <div className="CardResult-Returns-Category-Icon">
                            <img src={Images.icon_ticket} alt="icon" />
                        </div>
                        <div className="CardResult-Returns-Category-Details">
                            <p className="CardResult-Returns-Category-Points">RM 80 <span>(cap at 80)</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5% from RM 1000 and above</span></p>
                        </div>
                    </div>
                </div>
                <div className="CardResult-Returns-Category">
                    <p className="CardResult-Returns-Category-Title">Shopping (online)</p>
                    <div className="CardResult-Returns-Category-Content">
                        <div className="CardResult-Returns-Category-Icon">
                            <img src={Images.icon_ticket} alt="icon" />
                        </div>
                        <div className="CardResult-Returns-Category-Details">
                            <p className="CardResult-Returns-Category-Points">RM 80 <span>(cap at 80)</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5% from RM 1000 and above</span></p>
                        </div>
                    </div>
                </div>
                <div className="CardResult-Returns-Category">
                    <p className="CardResult-Returns-Category-Title">Shopping (online)</p>
                    <div className="CardResult-Returns-Category-Content">
                        <div className="CardResult-Returns-Category-Icon">
                            <img src={Images.icon_ticket} alt="icon" />
                        </div>
                        <div className="CardResult-Returns-Category-Details">
                            <p className="CardResult-Returns-Category-Points">RM 80 <span>(cap at 80)</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5% from RM 1000 and above</span></p>
                        </div>
                    </div>
                </div>
                <div className="CardResult-Returns-Category">
                    <p className="CardResult-Returns-Category-Title">Shopping (online)</p>
                    <div className="CardResult-Returns-Category-Content">
                        <div className="CardResult-Returns-Category-Icon">
                            <img src={Images.icon_ticket} alt="icon" />
                        </div>
                        <div className="CardResult-Returns-Category-Details">
                            <p className="CardResult-Returns-Category-Points">RM 80 <span></span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>Uncapped</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CardResult-CardAction">
                <button className="CardResult-CardAction-ViewDetails">
                    View Details
                    <IconContext.Provider value={{ className: 'Icon Icon-Black Icon-Details-Forward' }} >
                        <IoIosArrowRoundForward />
                    </IconContext.Provider>
                </button>
                <button className="CardResult-CardAction-Expand" onClick={toggleExpanded} data-expanded={isExpanded}>
                    <IconContext.Provider value={{ className: 'Icon Icon-Details-Down' }} >
                        <IoIosArrowDown />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    );
};

export default CashbackItem;