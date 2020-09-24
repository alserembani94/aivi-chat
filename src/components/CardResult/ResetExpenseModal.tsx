import React from 'react';

interface ResetExpenseModalProps {
    
}

const ResetExpenseModal: React.FC<ResetExpenseModalProps> = () => {
    return (
        <React.Fragment>
            {/* <div className="CreditCardResult-Modal-Section">
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
            </div> */}
        </React.Fragment>
    );
};

export default ResetExpenseModal;