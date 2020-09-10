import React from 'react';
import LeftboxForm from './LeftboxForm';
import SubmittedView from './SubmittedView';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

interface LeftboxProps {
    slot: {
        [transferFrom: string]: string,
        name: string,
        phone: string,
        email: string,
        amount: string,
    };
    slotInput: slotInputType[];
    submitted: boolean;
    updateSubmitted: () => void;
    handleInputChange: (value: string, stateName: string) => void;
}

const Leftbox: React.FC<LeftboxProps> = ({slot, slotInput, submitted, updateSubmitted, handleInputChange}) => {
    if (!submitted) return <LeftboxForm
                                slot={slot}
                                slotInput={slotInput}
                                updateSubmitted={updateSubmitted}
                                handleInputChange={handleInputChange}
                            />
    else return <SubmittedView updateSubmitted={updateSubmitted} />
}

export default Leftbox;