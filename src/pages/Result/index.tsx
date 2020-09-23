import React from 'react';
import {
    CashbackItem,
    RewardItem,
} from '../../components/CardResult';
import { Images } from '../../utils/Images';
import ExpensesDetails from '../../components/Leftbox/Credit Card/ExpensesDetails';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
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
    // const [data, setData] = React.useState<any>();
    // React.useEffect(() => {
    //     csv(CSVFiles.rewardCatalogue).then(data => {
    //         setData(() => data);
    //     })
    // }, []);

    // React.useEffect(() => {
    //     data && console.log(data[0]);
    // }, [data]);

    return (
        <React.Fragment>
            <main className="CreditCardResult-Body">
                <section className="CreditCardResult-TopContent">
                    <div className="CreditCardResult-TitleBar">
                        <p>Your results are in!</p>
                        <button onClick={toggleAllExpanded}>{ allExpanded ? `Collapse` : `Expand`} All</button>
                        <button>Reset Expense
                            <img src={Images.icon_readjust} alt="Reset" />
                        </button>
                        <button>Not what you're looking for?
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
                <section className="CreditCardResult-Modal" data-visible={true}>
                    <div className="CreditCardResult-Modal-Wrapper">
                        <div className="CreditCardResult-Modal-Section">
                            <div className="CreditCardResult-Modal-Container">
                                <p className="CreditCardResult-Modal-Title">Reset Period</p>
                                <div className="CreditCardResult-Modal-Content">
                                    
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
                            <button className="CreditCardResult-Modal-Action-Cancel">Cancel</button>
                            <button className="CreditCardResult-Modal-Action-Confirm">
                                <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Result-Check' }} >
                                    <IoIosCheckmark />
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Result;