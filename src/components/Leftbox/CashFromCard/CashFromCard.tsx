import React, { FC, useEffect, useState } from 'react';
import CashFromCardForm from './CashFromCardForm';
import SubmittedView from '../SubmittedView';
import { useSelector } from 'react-redux';
// import { CashFromCardType } from '../../../store/reducers/cashFromCard';
// import { submitForRecommendation } from '../../../store/reducers/recommendCreditCard';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

const CashFromCard: FC = () => {
    const { slots } = useSelector((state: any) => state.conversations);
    const [userSlot, setUserSlot] = useState({
        transferFrom: '',
        name: '',
        phone: '',
        email: '',
        amount: 0,
    });

    useEffect(() => {
        const {
            cfc_applicant_name,
            cfc_bank,
            cfc_applicant_email,
            cfc_amount,
        } = slots;

        if (cfc_applicant_name !== null) setUserSlot(prevState => ({ ...prevState, name: cfc_applicant_name }));
        if (cfc_bank !== null) setUserSlot(prevState => ({ ...prevState, transferFrom: cfc_bank }));
        if (cfc_applicant_email !== null) setUserSlot(prevState => ({ ...prevState, email: cfc_applicant_email }));
        if (cfc_amount !== null) setUserSlot(prevState => ({ ...prevState, amount: parseInt(cfc_amount) }));

    }, [slots]);
    
    const [submitted, setSubmitted] = useState(false);

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