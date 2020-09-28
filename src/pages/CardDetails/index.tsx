import React from 'react';
// import {
//     CashbackItem,
//     RewardItem,
// } from '../../components/CardResult';
import {
    CounterInput,
    Modal,
} from '../../components/CustomComponent';
// import { Images } from '../../utils/Images';
import ExpensesDetails from '../../components/Leftbox/CreditCard/ExpensesDetails';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import AvailableCard from '../../components/Leftbox/CreditCard/AvailableCard';
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

const CardDetails: React.FC = () => {
    // const [allExpanded, setAllExpanded] = React.useState(false);

    // const toggleAllExpanded = () => {
    //     setAllExpanded(prevState => !prevState);
    // };
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

    // const handleModalOpen = (modalName: string) => {
    //     modalName === 'resetModal'
    //     ? setResetModal(prevState => true)
    //     : modalName === 'searchModal'
    //     && setSearchModal(prevState => true);
    // }

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
                <div className="CardResult-Wrapper">
                    <div className="CardResult-Returns">
                        <div className="CardResult-Returns-Category">

                            <div className="CardResult-Main">
                                <div className="CardResult-Card">
                                    <div className="CardResult-Card-Image">

                                    </div>

                                </div>
                                <div className="CardResult-Details">
                                    <div className="CardResult-Details-TotalCollection">
                                        <p className="CardResult-Details-Data">Maybank 2 Gold Cards</p>
                                    </div>
                                    <div className="CardResult-Details-Period">
                                        &nbsp;
                                    </div>
                                    <div className="CardResult-Details-Rewards">
                                        <p className="CardResult-Details-Label">
                                            Pay no annual fees for your American Express and MasterCard or Visa. Extra Rewards<br/>
                                            with AMEX, 5x TreatsPoints on all retail & 5% cashback on weekend spends<br/><br/>
                                        </p>
                                        <p><button className="CreditCardResult-BottomContent-Apply">Apply Now</button></p>
                                    </div>
                                </div>
                            </div>
                        <div className="CardResult-CardDetails">
                            <div className="CardResult-CardDetails-Container">
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Container-Category-Title">Min. Income</p>
                                        <div className="CardResult-CardDetails-Container-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">RM2,500/month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Container-Category-Title">Annual Fee</p>
                                        <div className="CardResult-CardDetails-Container-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">Free</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Category-Title">Cashback</p>
                                        <div className="CardResult-CardDetails-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">up to 5%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Container-Category-Title">Balance Transfer</p>
                                        <div className="CardResult-CardDetails-Container-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">From 0% p.a.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Container-Category-Title">Easy Payment Plan</p>
                                        <div className="CardResult-CardDetails-Container-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">15% p.a.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Container-Category-Title">Interest Rate</p>
                                        <div className="CardResult-CardDetails-Container-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">20 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardResult-CardDetails-Container-Income-Details">
                                    <div className="CardResult-Returns-Category">
                                        <p className="CardResult-CardDetails-Container-Category-Title">Interest-free</p>
                                        <div className="CardResult-CardDetails-Container-Category-Content">
                                            <div className="CardResult-CardDetails-Container-Category-Details">
                                                <p className="CardResult-CardDetails-Container-Category-Points">RM 80 <span></span></p>
                                                <p className="CardResult-CardDetails-Container-Category-UnitPoint"><span>Uncapped</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/><br/><br/>
                        <div>
                            <div>
                                <div className="CardResult-GroupTitle">Rewards</div>
                                <div className="CardResult-GroupBody">
                                    <div className="CardResult-Main">
                                        <div className="CardResult-Card">
                                            <div>
                                                5x TreatPoints for all the weekday spend on your Maybank 2 American Express Card. You <br/>
                                                can also earn 1x TreatPoints on all your spending with MasterCard or Visa.
                                            </div>
                                            <div>
                                                {/* <table>
                                                    <tr>
                                                        <th>EARN</th>
                                                        <th>SPEND</th>
                                                    </tr>
                                                    <tbody>
                                                        <tr>
                                                            <td>5 point per RM1</td>
                                                            <td>on all retail with Maybank 2 American Express Card (weekdays)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1 point per RM1</td>
                                                            <td>on utilities, insurance and EzyPay installment with Maybank 2 American Express Card</td>
                                                        </tr>
                                                        <tr>
                                                            <td>5 points per RM1</td>
                                                            <td>on all retail with Maybank 2 Mastercard or Visa</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1 point per RM1</td>
                                                            <td>on all retail with Maybank 2 Mastercard or Visa</td>
                                                        </tr>
                                                    </tbody>
                                                </table> */}
                                                
                                            </div>
                                        </div>
                                        <div className="CardResult-Details">
                                            <div className="CardResult-Card-Image"></div>
                                        </div>
                                    </div>
                                </div><br/><br/><br/>
                            </div>

                            <div>
                                <div className="CardResult-GroupTitle">Features</div>
                                <div className="CardResult-GroupBody">

                                    <div>
                                        <p className="CardResult-Details-Data">Easy Payment Plan</p>
                                        <div>.</div>
                                        <div>
                                            <div>Maybankard EzPay</div>
                                            <div>Easypay is, well, easy: a 0% interest installment plan which lets you spread your payments over 36 months.<br/>
                                                Available at participating merchants only.
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="CardResult-Details-Data">Cash Advance /Cash Loans</p>
                                        <div>.</div>
                                        <div>
                                            <div>Maybank Cash Treats</div>
                                            <div>It's reassuring to know that you have access to cash in an emergency. With Maybankard Cash Treats it's so<br/>
                                                easy to apply as no documents are required and fast approval guaranteed!
                                            </div>
                                        </div>
                                    </div> 

                                    <div>
                                        <p className="CardResult-Details-Data">Balance Transfer Plans</p>
                                        <div>.</div>
                                        <div>
                                            <div>Maybank Balance Transfer Program</div>
                                            <div>Save on your credit card bills with lower interest rates, choose the plan that meets your need, and enjoy a<br/>
                                                longer repayment period of up to 36 months
                                            </div>
                                        </div>
                                    </div>   

                                </div>
                                <br/><br/><br/>
                            </div>


                            <div>
                                <div className="CardResult-GroupTitle">Easy Payment Plans</div>
                                <div className="CardResult-GroupBody">
                                    <div>Maybank EzyPay offers payment terms of up to 36 months, at 0% interest, on purchases to approved merchants. For all other purchases, you can opt to Maybank EzyPay<br/>
                                    Plus for installment up to 24 months and low interest rates. No penalty for early payment</div>
                                    <div>
                                        {/* <table>
                                            <tr>
                                                <th>PAYOVER</th>
                                                <th>WITH INTEREST RATE AT</th>
                                                <th>WHEN YOU SPEND</th>
                                            </tr>
                                            <tr>
                                                <td>3 months</td>
                                                <td>0% p.a. and no one-time upfront handling fee</td>
                                                <td>RM50</td>
                                            </tr>
                                            <tr>
                                                <td>6 months</td>
                                                <td>0% p.a. and no one-time upfront handling pay</td>
                                                <td>RM50</td>
                                            </tr>
                                            <tr>
                                                <td>12 months</td>
                                                <td>0% p.a. and no one-time upfront handling pay</td>
                                                <td>RM50</td>
                                            </tr>
                                            <tr>
                                                <td>18 months</td>
                                                <td>0% p.a. and no one-time upfront handling pay</td>
                                                <td>RM50</td>
                                            </tr>
                                        </table> */}
                                    </div>
                                </div>
                            </div><br/><br/><br/>

                            <div>
                                <div className="CardResult-GroupTitle">Fees & Charges</div>
                                <div className="CardResult-GroupBody">
                                    <div>
                                        {/* <table>
                                            <tr>
                                                <td>Annual Fee</td>
                                                <td>RM0 primary card, Free for life</td>
                                            </tr>
                                            <tr>
                                                <td>Sales And Service Tax</td>
                                                <td>RM25 on each principle and supplementary card upon activation and anniversary date</td>
                                            </tr>
                                            <tr>
                                                <td>Minimum Monthly</td>
                                                <td>RM25 or 5% of outstanding amount, whichever is higher</td>
                                            </tr>
                                            <tr>
                                                <td>Late Payment Fee</td>
                                                <td>RM10 or 1% of outstanding amount, up to a maximum amount of RM100</td>
                                            </tr>
                                        </table> */}
                                    </div>
                                </div>
                            </div><br/><br/><br/>

                            <div>

                            </div>

                        </div>
                            <div className="CardResult-GroupTitle">Requirements</div>
                            <div className="CardResult-GroupBody">
                                <div>
                                    {/* <table>
                                        <tr>
                                            <td>Minimum Annual Income</td>
                                            <td>RM30,000</td>
                                        </tr>
                                        <tr>
                                            <td>Minimum Age</td>
                                            <td>21 to 65 years old primary card<br/>18 years old supplementary card</td>
                                        </tr>
                                        <tr>
                                            <td>Who Can Apply</td>
                                            <td>Anyone</td>
                                        </tr>
                                    </table> */}
                                </div>
                            </div>
                        </div><br/><br/><br/>
                       
                    </div>
                </div>
 

                    
                </section>
                {/* <section className="CreditCardResult-BottomContent">
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
                </section> */}

                {/* RESET EXPENSE MODAL */}
                <Modal
                    modalName='resetModal'
                    visible={resetModal}
                    closeModal={handleModalClose}
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
                    modalName='searchModal'
                    visible={resetModal}
                    closeModal={handleModalClose}
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

export default CardDetails;