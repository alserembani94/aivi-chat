import React, { FC, Fragment } from 'react';
import { Images } from '../../utils/Images';

interface CardDetailsProps {
    cardDetails: any;
};

const CardDetails: FC<CardDetailsProps> = ({ cardDetails }) => (
    cardDetails
    ? (
        <Fragment>
            <div className="CardResult-Returns">
                <div className="CardResult-Returns-Category">

                    <div className="CardResult-Main">
                        <div className="CardResult-Card">
                            <div className="CardResult-Card-Image">
                                <img src={Images.icon_maybank} alt="icon-maybank" />
                            </div>
                        </div>
                        <div className="CardResult-Details">
                            <div className="CardResult-Details-TotalCollection">
                                <p className="CardResult-Details-Data">Maybank Loan</p>
                            </div>
                            <div className="CardResult-Details-Rewards">
                                <p className="CardResult-Details-Label">
                                    Pay no annual fees for your American Express and MasterCard or Visa. Extra Rewards<br/>
                                    with AMEX, 5x TreatsPoints on all retail & 5% cashback on weekend spends<br/><br/>
                                </p>
                                <p><button className="Pages-Red-Button">Apply Now</button></p>
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
                                        <p className="CardResult-CardDetails-Container-Category-Points">From 0% p.a.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="CardResult-CardDetails-Container-Income-Details">
                            <div className="CardResult-Returns-Category">
                                <p className="CardResult-CardDetails-Container-Category-Title">Interest Rate</p>
                                <div className="CardResult-CardDetails-Container-Category-Content">
                                    <div className="CardResult-CardDetails-Container-Category-Details">
                                        <p className="CardResult-CardDetails-Container-Category-Points">15% p.a.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="CardResult-CardDetails-Container-Income-Details">
                            <div className="CardResult-Returns-Category">
                                <p className="CardResult-CardDetails-Container-Category-Title">Interest-free</p>
                                <div className="CardResult-CardDetails-Container-Category-Content">
                                    <div className="CardResult-CardDetails-Container-Category-Details">
                                        <p className="CardResult-CardDetails-Container-Category-Points">20 days<span></span></p>
                                        {/* <p className="CardResult-CardDetails-Container-Category-UnitPoint"><span>Uncapped</span></p> */}
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
                                <div className="CardResult-Card CardResult-Padding">
                                    <div>
                                        <br/>
                                        5x TreatPoints for all the weekday spend on your Maybank 2 American Express Card. You <br/>
                                        can also earn 1x TreatPoints on all your spending with MasterCard or Visa.<br/><br/>
                                    </div>
                                    <div className="CardResult-TableContainer">
                                        <table className="CardResult-TableContainer-Table">
                                            <tbody>
                                                <tr>
                                                    <th>EARN</th>
                                                    <th>SPEND</th>
                                                </tr>
                                            
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
                                        </table>
                                    
                                    </div><br/><br/>
                                </div>
                                {/* <div className="CardResult-Details">
                                    <div className="CardResult-Card-Image"></div>
                                </div> */}
                            </div>
                        </div><br/><br/><br/>
                    </div>

                    <div>
                        <div className="CardResult-GroupTitle">Features</div>
                        <div className="CardResult-GroupBody CardResult-GroupPadding">

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

                            <div><br/><br/>
                                <p className="CardResult-Details-Data">Cash Advance /Cash Loans</p>
                                <div>.</div>
                                <div>
                                    <div>Maybank Cash Treats</div>
                                    <div>It's reassuring to know that you have access to cash in an emergency. With Maybankard Cash Treats it's so<br/>
                                        easy to apply as no documents are required and fast approval guaranteed!
                                    </div>
                                </div>
                            </div> 

                            <div><br/><br/>
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
                        <div className="CardResult-Main">
                        <div className="CardResult-GroupBody CardResult-Padding">
                            <div><br/>Maybank EzyPay offers payment terms of up to 36 months, at 0% interest, on purchases to approved merchants. For all other purchases, you can opt to Maybank EzyPay<br/>
                            Plus for installment up to 24 months and low interest rates. No penalty for early payment <br/><br/><br/></div>
                            <div>
                                <table className="CardResult-TableContainer-Table">
                                    <tbody>
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
                                    </tbody>
                                </table>
                            </div><br/><br/>
                        </div>
                        </div></div>
                    </div><br/><br/><br/>

                    <div>
                        <div className="CardResult-GroupTitle">Fees & Charges</div>
                        <div className="CardResult-GroupBody">
                            <div className="CardResult-TableContainer">
                                <table className="CardResult-TableContainer-Table">
                                    <tbody>
                                        <tr></tr>
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
                                    </tbody>
                                </table>
                            </div><br/><br/>
                        </div>
                    </div><br/><br/><br/>

                    <div>

                    </div>

                </div>
                    <div className="CardResult-GroupTitle">Requirements</div>
                    <div className="CardResult-GroupBody">
                        <div className="CardResult-TableContainer">
                            <table className="CardResult-TableContainer-Table">
                                <tbody>
                                <tr></tr>
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
                                </tbody>
                            </table>
                        </div><br/><br/>
                    </div>
                </div><br/><br/><br/>
                
            </div>
        </Fragment>
    )
    : (
        <Fragment>
            <p>Card Info Not Available</p>
        </Fragment>
    )
);

export default CardDetails;
