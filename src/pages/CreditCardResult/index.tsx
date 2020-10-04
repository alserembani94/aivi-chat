import React, { FC, useState } from 'react';
import {
    CashbackItem,
    ResetExpenseModal,
    ReselectBankModal,
    RewardItem,
} from '../../components/CardResult';
import {
    Modal,
} from '../../components/CustomComponent';
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
    const handleModalOpen = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => true);
                break;
            case 'searchModal':
                setSearchModal(() => true);
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
            default:
                return;
        }
    }

    return (
        <React.Fragment>
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
                            <RewardItem
                                cardName="CardOne"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                            <RewardItem
                                cardName="CardTwo"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
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
                            />
                            <CashbackItem
                                cardName="CardFour"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                            <CashbackItem
                                cardName="CardFive"
                                selectedCard={selectedCard}
                                updateSelectedCard={handleCardChange}
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
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
                        
            </main>
        </React.Fragment>
    );
};

export default CreditCardResult;