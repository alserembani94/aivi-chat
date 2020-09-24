import React from 'react';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import {
    CounterInput,
} from '../../components/CustomComponent';
import ExpensesDetails from '../Leftbox/Credit Card/ExpensesDetails';

interface ResetExpenseModalProps {
    period: number;
    updatePeriodChange: (value: number) => void;
    expenseDetails: any;
    updateExpenseDetails: (updatedExpenseDetails: any) => void;
    closeModal: (modalName: string) => void;
}

const ResetExpenseModal: React.FC<ResetExpenseModalProps> = ({ period, updatePeriodChange, expenseDetails, updateExpenseDetails, closeModal }) => {
    return (
        <React.Fragment>
            <div className="ModalContent-CreditCardResult-Section">
                <div className="ModalContent-CreditCardResult-Container">
                    <p className="ModalContent-CreditCardResult-Title">Reset Period</p>
                    <div className="ModalContent-CreditCardResult-Content">
                        <CounterInput
                            value={period}
                            updateCounter={updatePeriodChange}
                            unit="months"
                            min={6}
                            max={24}
                        />
                    </div>
                </div>
                <div className="ModalContent-CreditCardResult-Container">
                    <p className="ModalContent-CreditCardResult-Title">Reset your monthly spending range</p>
                    <div className="ModalContent-CreditCardResult-Content">
                        <ExpensesDetails
                            details={expenseDetails}
                            updateExpenseObject={updateExpenseDetails}
                        />
                    </div>
                </div>
            </div>
            <div className="ModalContent-CreditCardResult-Action">
                <button
                    className="ModalContent-CreditCardResult-Action-Cancel"
                    onClick={() => closeModal('resetModal')}
                >Cancel</button>
                <button
                    className="ModalContent-CreditCardResult-Action-Confirm"
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

export default ResetExpenseModal;