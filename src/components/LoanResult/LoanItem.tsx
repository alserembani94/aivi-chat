import React, { FC } from 'react';
import { calculateMonthlyLoanPayment } from '../../utils/Calculator';

// Construct types for component props
interface LoanItemProps {
    logoUrl: string;
    loanName: string;
    loanTenure: number;
    loanRate: number;
    loanAmount: number;
    selectedLoan: string;
    updateSelectedLoan: (loanName: string) => void;
    openLoanDetail: (loanName: string) => void;
}

const LoanItem: FC<LoanItemProps> = ({ logoUrl, loanName, loanTenure, loanRate, loanAmount, selectedLoan, updateSelectedLoan, openLoanDetail }) => {
    return (
        <React.Fragment>
            <div className="LoanItem-Wrapper" data-selected={selectedLoan === loanName}>
                <div className="LoanItem-Content" onClick={() => updateSelectedLoan(loanName)}>
                    <div className="LoanItem-Bank">
                        <img src={logoUrl} alt="Bank Logo" />
                        <p>{loanName}</p>
                    </div>
                    <div className="LoanItem-Detail">
                        <div className="LoanItem-Detail-Item">
                            <p className="LoanItem-Detail-Item-Label">
                                Loan Amount
                            </p>
                            <p className="LoanItem-Detail-Item-Content">
                                RM {loanAmount}
                            </p>
                        </div>
                        <div className="LoanItem-Detail-Item">
                            <p className="LoanItem-Detail-Item-Label">
                                Tenure
                            </p>
                            <p className="LoanItem-Detail-Item-Content">
                                {loanTenure} years
                            </p>
                        </div>
                        <div className="LoanItem-Detail-Item">
                            <p className="LoanItem-Detail-Item-Label">
                                Monthly Payment
                            </p>
                            <p className="LoanItem-Detail-Item-Content">
                                RM {calculateMonthlyLoanPayment(loanAmount, loanRate, loanTenure)}
                            </p>
                        </div>
                        <div className="LoanItem-Detail-Item">
                            <p className="LoanItem-Detail-Item-Label">
                                Interest Rate
                            </p>
                            <p className="LoanItem-Detail-Item-Content">
                                from {loanRate}% p.a.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="LoanItem-Action">
                    <button onClick={() => openLoanDetail(loanName)}>View Details</button>
                </div>
                {/* <p>Loan Payment = {calculateMonthlyLoanPayment(loanAmount, loanRate, loanTenure)}</p> */}
            </div>
        </React.Fragment>
    );
};

export default LoanItem;