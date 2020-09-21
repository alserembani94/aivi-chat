import React from 'react';
import CashFromCardForm from './CashFromCardForm';
import SubmittedView from '../SubmittedView';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

const CashFromCard: React.FC = () => {
    const [userSlot, setUserSlot] = React.useState({
        transferFrom: '',
        name: '',
        phone: '',
        email: '',
        amount: '',
    });
    
    const [submitted, setSubmitted] = React.useState(false);

    const handleInputChange = (value: string, stateName: string) => {
        setUserSlot(() => {return {...userSlot, [stateName]: value}});
    };

    const handleSubmit = () => {
        setSubmitted(prevState => { return !prevState});
    };

    if (!submitted) return <CashFromCardForm
                                slot={userSlot}
                                updateSubmitted={handleSubmit}
                                handleInputChange={handleInputChange}
                            />
    else return <SubmittedView updateSubmitted={handleSubmit} />
}

export default CashFromCard;