import React, { FC, useEffect, useState } from 'react';
import CashFromCardForm from './CashFromCardForm';
import SubmittedView from '../SubmittedView';
// import { CashFromCardType } from '../../../store/reducers/cashFromCard';
// import { submitForRecommendation } from '../../../store/reducers/recommendCreditCard';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

const CashFromCard: FC = () => {
    const [userSlot, setUserSlot] = useState({
        transferFrom: '',
        name: '',
        phone: '',
        email: '',
        amount: 0,
    });

    useEffect(() => {
        // dispatch(submitForRecommendation());
        // console.log(props);
        // setUserSlot(() => ({
        //     transferFrom,
        //     name,
        //     phone,
        //     email,
        //     amount,
        // }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
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