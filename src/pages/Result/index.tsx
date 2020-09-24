import React from 'react';
import {
    CashbackItem,
    RewardItem,
} from '../../components/CardResult';
import {
    CounterInput,
    Modal,
} from '../../components/CustomComponent';
import { Images } from '../../utils/Images';
import ExpensesDetails from '../../components/Leftbox/Credit Card/ExpensesDetails';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import AvailableCard from '../../components/Leftbox/Credit Card/AvailableCard';
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

const Result: React.FC = () => {
    const [allExpanded, setAllExpanded] = React.useState(false);

    const toggleAllExpanded = () => {
        setAllExpanded(prevState => !prevState);
    };
    // Temporary Period Details
    const [period, setPeriod] = React.useState(6);
    
    const handlePeriodChange = (value: number) => setPeriod(() => value);

    // Temporary Expense Details
    const [expenseDetails, setExpenseDetails] = React.useState<ExpenseDetails>([
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
    const [selectedBanks, setSelectedBanks] = React.useState<string[]>([]);
    const banksLimit = 1;

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };
    // const [data, setData] = React.useState<any>();
    // React.useEffect(() => {
    //     csv(CSVFiles.rewardCatalogue).then(data => {
    //         setData(() => data);
    //     })
    // }, []);

    // React.useEffect(() => {
    //     data && console.log(data[0]);
    // }, [data]);

    // CONFIGURATION FOR MODALS
    const [resetModal, setResetModal] = React.useState(false);
    const [searchModal, setSearchModal] = React.useState(false);

    const handleModalOpen = (modalName: string) => {
        modalName === 'resetModal'
        ? setResetModal(prevState => true)
        : modalName === 'searchModal'
        && setSearchModal(prevState => true);
    }

    const handleModalClose = (modalName: string) => {
        modalName === 'resetModal'
        ? setResetModal(prevState => false)
        : modalName === 'searchModal'
        && setSearchModal(prevState => false);
    }

    React.useEffect(() => {
        console.log({resetModal, searchModal});
    }, [resetModal, searchModal]);

    return (
        <React.Fragment>
            <main className="CreditCardResult-Body">
                <section className="CreditCardResult-TopContent">
                    <div className="CreditCardResult-TitleBar">
                        <p>Your results are in!</p>
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
                    <div className="CreditCardResult-Content">
                        <div className="CreditCardResult-Content-Column">
                            <p className="CreditCardResult-Content-Title">Rewards</p>
                            <RewardItem
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                            <RewardItem
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                        </div>
                        <div className="CreditCardResult-Content-Seperator" />
                        <div className="CreditCardResult-Content-Column">
                            <p className="CreditCardResult-Content-Title">Cashbacks</p>
                            <CashbackItem
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                            <CashbackItem
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                            <CashbackItem
                                expandAll={allExpanded}
                                toggleExpandAll={toggleAllExpanded}
                            />
                        </div>
                    </div>
                </section>
                <section className="CreditCardResult-BottomContent">
                    <button className="CreditCardResult-BottomContent-Chat">
                        Chat
                    </button>
                    <div className="CreditCardResult-BottomContent-Description">
                        <p className="CreditCardResult-BottomContent-Description-Title">Ready To Apply?</p>
                        <p className="CreditCardResult-BottomContent-Description-Subtitle">You Selected: Selected Card</p>
                    </div>
                    <button className="CreditCardResult-BottomContent-Apply">
                        Apply Now
                    </button>
                </section>

                {/* RESET EXPENSE MODAL */}
                <Modal
                    visible={resetModal}
                >
                    <div className="CreditCardResult-Modal-Section">
                        <div className="CreditCardResult-Modal-Container">
                            <p className="CreditCardResult-Modal-Title">Reset Period</p>
                            <div className="CreditCardResult-Modal-Content">
                                <CounterInput
                                    value={period}
                                    updateCounter={handlePeriodChange}
                                    unit="months"
                                    min={6}
                                    max={24}
                                />
                            </div>
                        </div>
                        <div className="CreditCardResult-Modal-Container">
                            <p className="CreditCardResult-Modal-Title">Reset your monthly spending range</p>
                            <div className="CreditCardResult-Modal-Content">
                                <ExpensesDetails
                                    details={expenseDetails}
                                    updateExpenseObject={handleExpenseDetailsUpdate}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="CreditCardResult-Modal-Action">
                        <button
                            className="CreditCardResult-Modal-Action-Cancel"
                            onClick={() => handleModalClose('resetModal')}
                        >Cancel</button>
                        <button
                            className="CreditCardResult-Modal-Action-Confirm"
                            onClick={() => handleModalClose('resetModal')}
                        >
                            <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Result-Check' }} >
                                <IoIosCheckmark />
                            </IconContext.Provider>
                        </button>
                    </div>
                </Modal>

                {/* NOT LOOKING FOR MODAL */}
                <Modal
                    visible={searchModal}
                >
                    <div className="CreditCardResult-Modal-Section">
                        <div className="CreditCardResult-Modal-Container">
                            <p className="CreditCardResult-Modal-Title">Choose your preferred bank...</p>
                            <AvailableCard
                                selectedOptions={selectedBanks}
                                updateSelectedOptions={handleSelectedBanks}
                                optionLimit={banksLimit}
                            />
                        </div>
                    </div>
                    <div className="CreditCardResult-Modal-Action">
                        <button
                            className="CreditCardResult-Modal-Action-Cancel"
                            onClick={() => handleModalClose('searchModal')}
                        >Cancel</button>
                        <button
                            className="CreditCardResult-Modal-Action-Confirm"
                            onClick={() => handleModalClose('searchModal')}
                        >
                            <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Result-Check' }} >
                                <IoIosCheckmark />
                            </IconContext.Provider>
                        </button>
                    </div>
                </Modal>
                        
            </main>
        </React.Fragment>
    );
};

export default Result;