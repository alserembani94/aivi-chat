import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Prompt, useHistory } from 'react-router-dom';
import {
    CardDetails,
    CashbackItem,
    ResetExpenseModal,
    ReselectBankModal,
    RewardItem,
} from '../../components/CardResult';
import {
    Modal,
} from '../../components/CustomComponent';
import { cardRecommenderReset } from '../../store/reducers/cardRecommender';
import { Images } from '../../utils/Images';
// import { csv } from 'd3';
// import { CSVFiles } from '../../utils/DataSample';

// const cardMockData = {
//     image: '',
//     name: 'Maybank 2 Gold',
//     estimatedPoints: [1200, 1600],
//     period: '12 months',
// };

type ExpenseDetails = {
    category: string,
    subcategory?: {
        name: string,
        expenseRange: number[],
    }[],
    expenseRange?: number[],
}[];

const CreditCardResult: FC = () => {
    // EXPAND / COLLAPSE CONFIGURATION
    const [allExpanded, setAllExpanded] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const cards = useSelector((state: any) => state.cardRecommender)

    const toggleAllExpanded = () => {
        setAllExpanded(prevState => !prevState);
    };
    // Temporary Period Details
    const [period, setPeriod] = useState(6);
    
    const handlePeriodChange = (value: number) => setPeriod(() => value);

    // Temporary Expense Details
    const [expenseDetails, setExpenseDetails] = useState<ExpenseDetails>([
        {
            category: 'Shopping',
            subcategory: [
                {
                    name: 'Online',
                    expenseRange: [2200, 8800],
                },
                {
                    name: 'Traditional',
                    expenseRange: [3000, 7000],
                },
            ],
        },
        {
            category: 'Dining',
            expenseRange: [3000, 7000],
        },
        {
            category: 'Health & Insurance',
            expenseRange: [3000, 7000],
        },
    ]);
    

    const handleExpenseDetailsUpdate = (expenseDetails: ExpenseDetails) => {
        setExpenseDetails(() => expenseDetails);
    }

    // CONFIGURATION FOR BANKS
    const [selectedBanks, setSelectedBanks] = useState<string[]>([]);

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };

    // CONFIGURATION FOR SELECTED CARD
    const [selectedCard, setSelectedCard] = useState('');
    const handleCardChange = (cardName: string) => cardName === selectedCard ? setSelectedCard(() => '') : setSelectedCard(() => cardName);
    // const [data, setData] = useState<any>();
    // useEffect(() => {
    //     csv(CSVFiles.rewardCatalogue).then(data => {
    //         setData(() => data);
    //     })
    // }, []);

    // CONFIGURATION FOR MODALS
    const [resetModal, setResetModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [cardDetailsModal, setCardDetailsModal] = useState(false);
    const [cardDetails, setCardDetails] = useState<any>({});
    const handleCardDetailsModal = (modalName: string = 'cardDetailsModal', cardName: string = '') => {
        console.table({modalName})
        if (cardDetailsModal) {
            // Close if modal is open, and purge cardDetails state
            setTimeout(() => setCardDetails(() => {}), 500);
            handleModalClose(modalName);
        } else {
            // Open if modal is close, and load cardDetails data to state - API
            setCardDetails(() => ({
                name: cardName,
            }));
            handleModalOpen(modalName);
        }
    };

    const handleModalOpen = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => true);
                break;
            case 'searchModal':
                setSearchModal(() => true);
                break;
            case 'cardDetailsModal':
                setCardDetailsModal(() => true);
                break;
            default:
                return;
        }
    }
    const handleModalClose = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => false);
                break;
            case 'searchModal':
                setSearchModal(() => false);
                break;
            case 'cardDetailsModal':
                setCardDetailsModal(() => false);
                break;
            default:
                return;
        }
    }

    // useEffect(() => {
    //     return history.listen(location => {
    //         switch (history.action) {
    //             case 'PUSH':
    //             case 'POP':
    //                 dispatch(cardRecommenderReset({}));
    //         }
    //     });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [history]);

    const clearCardRecommender = () => {
        dispatch(cardRecommenderReset({}));
    };

    useEffect(() => {
        window.addEventListener('unload', clearCardRecommender);
        return () => {
            window.removeEventListener('unload', clearCardRecommender);
            clearCardRecommender();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    return (
        <React.Fragment>
            <Prompt
                message={(location, action) => {
                    return 'Are you sure you want to leave this page?\n\nYour card recommendation data will be lost once you leave this page.';
                }}
            />
            <main className="ResultPage-Body">
                <section className="ResultPage-TopContent">
                    <div className="ResultPage-TopBar">
                        <div className="ResultPage-TopBar-TitleBar">
                            <p className="ResultPage-TopBar-Title">Your results are in!</p>
                            <p className="ResultPage-TopBar-Subtitle">Click on the card to select.</p>
                        </div>
                        <button onClick={toggleAllExpanded}>{ allExpanded ? `Collapse` : `Expand`} All</button>
                        <button
                            onClick={() => handleModalOpen('resetModal')}
                        >
                            Reset Expense
                            <img src={Images.icon_readjust} alt="Reset" />
                        </button>
                        <button
                            onClick={() => handleModalOpen('searchModal')}
                        >Not what you're looking for?
                            <img src={Images.icon_search} alt="Search" />
                        </button>
                    </div>
                    <div className="ResultPage-Content">
                        <div className="ResultPage-Content-Column">
                            <p className="ResultPage-Content-Title">Rewards</p>
                            {
                                cards.estimatedPoints && cards.estimatedPoints.map(({ cardName, cardInfo }: any) => (
                                    <RewardItem
                                        cardName={cardName}
                                        cardInfo={cardInfo}
                                        selectedCard={selectedCard}
                                        updateSelectedCard={handleCardChange}
                                        expandAll={allExpanded}
                                        toggleExpandAll={toggleAllExpanded}
                                        toggleDetail={handleCardDetailsModal}
                                        key={cardName}
                                    />
                                ))
                            }
                            {/* <RewardItem
                                cardName="CardOne"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                                toggleDetail={handleCardDetailsModal}
                            />
                            <RewardItem
                                cardName="CardTwo"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                                toggleDetail={handleCardDetailsModal}
                            /> */}
                        </div>
                        <div className="ResultPage-Content-Seperator" />
                        <div className="ResultPage-Content-Column">
                            <p className="ResultPage-Content-Title">Cashbacks</p>
                            <CashbackItem
                                cardName="CardThree"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                                toggleDetail={handleCardDetailsModal}
                            />
                            <CashbackItem
                                cardName="CardFour"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                                toggleDetail={handleCardDetailsModal}
                            />
                            <CashbackItem
                                cardName="CardFive"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                                toggleDetail={handleCardDetailsModal}
                            />
                        </div>
                    </div>
                </section>
                <section className="ResultPage-BottomContent">
                    <button className="ResultPage-BottomContent-Chat">
                        Chat
                    </button>
                    <div className="ResultPage-BottomContent-Description">
                        <p className="ResultPage-BottomContent-Description-Title">Ready To Apply?</p>
                        {/* <p className="ResultPage-BottomContent-Description-Subtitle">You Selected: {selectedCard}</p> */}
                    </div>
                    <button className="ResultPage-BottomContent-Apply" disabled>
                        Apply Now
                    </button>
                </section>

                {/* MODAL SECTIONS */}
                <Modal
                    modalName='resetModal'
                    visible={resetModal}
                    closeModal={handleModalClose}
                >
                    <ResetExpenseModal
                        period={period}
                        updatePeriodChange={handlePeriodChange}
                        expenseDetails={expenseDetails}
                        updateExpenseDetails={handleExpenseDetailsUpdate}
                        closeModal={handleModalClose}
                    />
                </Modal>
                <Modal
                    modalName='searchModal'
                    visible={searchModal}
                    closeModal={handleModalClose}
                >
                    <ReselectBankModal
                        selectedBanks={selectedBanks}
                        updateSelectedOptions={handleSelectedBanks}
                        closeModal={handleModalClose}
                    />
                </Modal>
                <Modal
                    modalName='cardDetailsModal'
                    visible={cardDetailsModal}
                    closeModal={handleCardDetailsModal}
                >
                    <CardDetails
                        cardDetails={cardDetails}
                    />                    
                </Modal>
                        
            </main>
        </React.Fragment>
    );
};

export default CreditCardResult;