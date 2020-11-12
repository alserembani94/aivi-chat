import React, { FC, useEffect, useState } from 'react';
import {
    IoIosArrowDown,
    IoIosArrowRoundForward,
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import { Images } from '../../utils/Images';

interface CashbackItemProps {
    cardName: string;
    cardInfo: any;
    selectedCard: string;
    updateSelectedCard: (cardName: string) => void;
    expandAll?: boolean;
    toggleExpandAll?: () => void;
    toggleDetail: (modalName: string, cardName: string) => void;
}

const CashbackItem: FC<CashbackItemProps> = ({ cardName, cardInfo, selectedCard, updateSelectedCard, expandAll, toggleExpandAll, toggleDetail }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(prevState => !prevState);
    }

    useEffect(() => {
        (expandAll !== undefined) && setExpanded(() => expandAll);
    }, [expandAll]);

    const generateExpenseReturns = () => {
        
        return Object.entries(cardInfo).filter(([category, key]: any[]) => {
            return !['card_metadata', 'minmax_points', 'minmax_cashback'].includes(category);
        })
        .map(([category, data]: any[]) => {
            const adjustedCategory: () => string = () => {
                switch (category) {
                    case 'shopping_online': return 'Shopping (online)';
                    case 'dinning': return 'Dining';
                    case 'health_insurance': return 'Health & Insurance';
                    case 'shopping':
                    case 'education':
                    case 'petrol':
                    case 'entertainment':
                    case 'groceries':
                    case 'travel':
                    case 'utilities':
                    default: return category.charAt(0).toUpperCase() + category.slice(1);
                }
            }

            const normaliseCategory = adjustedCategory();

            return (
                // <div className="CardResult-Returns-Category">
                //     <p className="CardResult-Returns-Category-Title">{normaliseCategory}</p>
                //     <div className="CardResult-Returns-Category-Content">
                //         <div className="CardResult-Returns-Category-Icon">
                //             <img src={Images.icon_ticket} alt={normaliseCategory} />
                //         </div>
                //         <div className="CardResult-Returns-Category-Details">
                //             <p className="CardResult-Returns-Category-Points">{data[0].toLocaleString('en-MY')} - {data[1].toLocaleString('en-MY')} <span>PTS</span></p>
                //             <p className="CardResult-Returns-Category-UnitPoint"><span>5</span> PTS PER <span>RM1</span></p>
                //         </div>
                //     </div>
                // </div>
                <div className="CardResult-Returns-Category">
                    <p className="CardResult-Returns-Category-Title">{normaliseCategory}</p>
                    <div className="CardResult-Returns-Category-Content">
                        <div className="CardResult-Returns-Category-Icon">
                            <img src={Images.icon_ticket} alt={normaliseCategory} />
                        </div>
                        <div className="CardResult-Returns-Category-Details">
                            <p className="CardResult-Returns-Category-Points">{data[0] === data[1] ? `RM ${data[0].toLocaleString('en-MY')}` : `RM ${data[0].toLocaleString('en-MY')} - RM ${data[1].toLocaleString('en-MY')}`} <span>(cap at 80)</span></p>
                            <p className="CardResult-Returns-Category-UnitPoint"><span>5% from RM 1000 and above</span></p>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="CardResult-Wrapper" data-selected={selectedCard === cardName}>
            <div className="CardResult-Main" onClick={() => updateSelectedCard(cardName)}>
                <div className="CardResult-Card">
                    <div className="CardResult-Card-Image">
                        {/* Card Image Here */}
                        <img src={cardInfo.card_metadata[0]} alt={cardName} />
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
                        <p className="CardResult-Details-Label">Potential Cashback</p>
                        <p className="CardResult-Details-Data">{cardInfo.minmax_cashback[0] === cardInfo.minmax_cashback[1] ? `RM ${cardInfo.minmax_cashback[0].toLocaleString('en-MY')}` :`RM ${cardInfo.minmax_cashback[0].toLocaleString('en-MY')} - RM ${cardInfo.minmax_cashback[1].toLocaleString('en-MY')}`}</p>
                    </div>
                    <div className="CardResult-Details-Period">
                        <p className="CardResult-Details-Label">Period</p>
                        <p className="CardResult-Details-Data">12 months</p>
                    </div>
                </div>
            </div>
            <div className="CardResult-Returns" data-expanded={isExpanded}>
                {generateExpenseReturns()}
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
        </div>
    );
};

export default CashbackItem;