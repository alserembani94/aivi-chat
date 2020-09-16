import React from 'react';
import CashFromCardForm from './CashFromCardForm';
import SubmittedView from '../SubmittedView';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

interface CashFromCardProps {
    slot: {
        [transferFrom: string]: string,
        name: string,
        phone: string,
        email: string,
        amount: string,
    };
    submitted: boolean;
    updateSubmitted: () => void;
    handleInputChange: (value: string, stateName: string) => void;
}

const CashFromCard: React.FC<CashFromCardProps> = ({slot, submitted, updateSubmitted, handleInputChange}) => {
    if (!submitted) return <CashFromCardForm
                                slot={slot}
                                updateSubmitted={updateSubmitted}
                                handleInputChange={handleInputChange}
                            />
    else return <SubmittedView updateSubmitted={updateSubmitted} />
}

export default CashFromCard;