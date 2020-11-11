import React, { FC, useEffect, useState } from 'react';
import {
    IoIosArrowDown,
    IoIosArrowRoundForward,
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { Images } from '../../utils/Images';
import ReactTooltip from 'react-tooltip';

interface RewardItemProps {
    cardName: string;
    selectedCard: string;
    updateSelectedCard: (cardName: string) => void;
    expandAll?: boolean;
    toggleExpandAll?: () => void;
    toggleDetail: (modalName: string, cardName: string) => void;
    cardInfo: any;
}

const RewardItem: FC<RewardItemProps> = ({ cardName, selectedCard, updateSelectedCard, expandAll, toggleExpandAll, toggleDetail, cardInfo }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(prevState => !prevState);
    }

    useEffect(() => {
        (expandAll !== undefined) && setExpanded(() => expandAll);
    }, [expandAll]);

    return (
        <div className="CardResult-Wrapper" data-selected={selectedCard === cardName}>
            <div className="CardResult-Main" onClick={() => updateSelectedCard(cardName)}>
                <div className="CardResult-Card">
                    <div className="CardResult-Card-Image">
                        {/* Card Image Here */}
                    </div>
                    <div className="CardResult-Card-Selected" data-selected={selectedCard === cardName}>
                        <IconContext.Provider value={{ className: 'Icon Icon-Brand Icon-Result-Check' }} >
                            <IoIosCheckmark />
                        </IconContext.Provider>
                    </div>
                    <p className="CardResult-Card-Name">{cardName}</p>
                </div>
                <div className="CardResult-Details">
                    <div className="CardResult-Details-TotalCollection">
                        <p className="CardResult-Details-Label">Total Estimated Points</p>
                        <p className="CardResult-Details-Data">1200 - 6000<span>PTS</span></p>
                    </div>
                    <div className="CardResult-Details-Period">
                        <p className="CardResult-Details-Label">Period</p>
                        <p className="CardResult-Details-Data">12 months</p>
                    </div>
                    <div className="CardResult-Details-Rewards">
                        <p className="CardResult-Details-Label">Potential Rewards</p>
                        <div>
                            <div data-tip data-for='imageOne'>
                                
                            </div>
                            <div data-tip data-for='imageTwo'>
                                
                            </div>
                            <div data-tip data-for='imageThree'>
                                
                            </div>
                        </div>
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
                            <p className="CardResult-Returns-Category-Points">200 <span>PTS</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5</span> PTS PER <span>RM1</span></p>
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
                            <p className="CardResult-Returns-Category-Points">200 <span>PTS</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5</span> PTS PER <span>RM1</span></p>
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
                            <p className="CardResult-Returns-Category-Points">200 <span>PTS</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5</span> PTS PER <span>RM1</span></p>
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
                            <p className="CardResult-Returns-Category-Points">200 <span>PTS</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5</span> PTS PER <span>RM1</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CardResult-CardAction">
                <button className="CardResult-CardAction-ViewDetails" onClick={() => toggleDetail('cardDetailsModal', cardName)}>
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
            
            <ReactTooltip id="imageOne" place="bottom">
                <div className="CardResult-Tooltip-Image" />
                <div className="CardResult-Tooltip-Container">
                    <p>Samsung Level Box Slim Speaker</p>
                    <div>
                        <p>PTS <span>20 200</span></p>
                        <p><span>240</span></p>
                    </div>
                </div>
            </ReactTooltip>
            <ReactTooltip id="imageTwo" place="bottom">
                <div className="CardResult-Tooltip-Image" />
                <div className="CardResult-Tooltip-Container">
                    <p>Garmin Watch</p>
                    <div>
                        <p>PTS <span>40 200</span></p>
                        <p><span>450</span></p>
                    </div>
                </div>
            </ReactTooltip>
            <ReactTooltip id="imageThree" place="bottom">
                <div className="CardResult-Tooltip-Image" />
                <div className="CardResult-Tooltip-Container">
                    <p>Razor V2</p>
                    <div>
                        <p>PTS <span>80 900</span></p>
                        <p><span>4000</span></p>
                    </div>
                </div>
            </ReactTooltip>
        </div>
    );
};

export default RewardItem;
