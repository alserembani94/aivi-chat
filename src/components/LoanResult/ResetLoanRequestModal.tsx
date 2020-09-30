import React, { FC } from 'react';
import {
    CounterInput,
    InputNumber,
} from '../../components/CustomComponent';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
// import {
//     convertToInt,
// } from '../../utils/DataValidation';

// Construct types for component props
interface ResetLoanModalProps {
    loanTenure: number;
    updateLoanTenure: (tenure: number) => void;
    loanAmount: number;
    updateLoanAmount: (amount: number) => void;
    closeModal: (modalName: string) => void;
}

const ResetLoanModal: FC<ResetLoanModalProps> = ({ loanTenure, updateLoanTenure, loanAmount, updateLoanAmount, closeModal }) => {
    return (
        <React.Fragment>
            <div className="ModalContent-CreditCardResult-Section">
                <div className="ModalContent-CreditCardResult-Container">
                    <p className="ModalContent-CreditCardResult-Title">Reset loan tenure</p>
                    <div className="ModalContent-CreditCardResult-Content">
                        <CounterInput
                            value={loanTenure}
                            updateCounter={updateLoanTenure}
                            unit="years"
                            min={2}
                            max={15}
                        />
                    </div>
                </div>
                <div className="ModalContent-CreditCardResult-Container">
                    <p className="ModalContent-CreditCardResult-Title">Reset your loan amount</p>
                    <div className="ModalContent-CreditCardResult-Content">
                        {/* <CounterInput
                            value={loanTenure}
                            updateCounter={updateLoanTenure}
                            unit="years"
                            min={2}
                            max={15}
                        /> */}
                        <div className="SingleInput-Wrapper">
                            <p>How much do you want to borrow?</p>
                            <div className="SingleInput-Container">
                                <div className="SingleInput-Container-Input">
                                    <p>RM
                                        <InputNumber
                                            value={loanAmount}
                                            onChange={updateLoanAmount}
                                            // onChange={({ currentTarget: { value } }) => updateLoanAmount(convertToInt({value}))}
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="ModalContent-CreditCardResult-Container">
                    <p className="ModalContent-CreditCardResult-Title">Reset your monthly spending range</p>
                    <div className="ModalContent-CreditCardResult-Content">
                        <ExpensesDetails
                            details={expenseDetails}
                            updateExpenseObject={updateExpenseDetails}
                        />
                    </div>
                </div> */}
            </div>
            <div className="ModalContent-CreditCardResult-Action">
                <button
                    className="ModalContent-CreditCardResult-Action-Cancel"
                    onClick={() => closeModal('resetModal')}
                >Cancel</button>
                <button
                    className={"ModalContent-CreditCardResult-Action-Confirm"}
                    onClick={() => closeModal('resetModal')}
                >
                    <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Result-Check' }} >
                        <IoIosCheckmark />
                    </IconContext.Provider>
                </button>
            </div>
        </React.Fragment>
    );
};

export default ResetLoanModal;