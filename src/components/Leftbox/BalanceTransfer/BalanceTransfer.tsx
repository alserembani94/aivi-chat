import React, { useEffect, useState } from 'react';
import BalanceTransferForm from './BalanceTransferForm';
import SubmittedView from '../SubmittedView';
import { useSelector } from 'react-redux';

const BalanceTransfer = () => {
    const { slots } = useSelector((state: any) => state.conversations);
    const [userSlot, setUserSlot] = useState({
        transferFrom: '',
        transferTo: '',
        name: '',
        phone: '',
        email: '',
        amount: '',
    });

    const handleInputChange = (value: string, stateName: string) => {
        setUserSlot(() => {return {...userSlot, [stateName]: value}});
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(prevState => { return !prevState});
    };

    useEffect(() => {
        const {
            bt_applicant_name,
            bt_transfer_from,
            bt_transfer_to,
            bt_email,
            bt_amount,
            bt_applicant_phone,
        } = slots;

        if (bt_applicant_name !== null) setUserSlot(prevState => ({ ...prevState, name: bt_applicant_name }));
        if (bt_transfer_from !== null) setUserSlot(prevState => ({ ...prevState, transferFrom: bt_transfer_from }));
        if (bt_transfer_to !== null) setUserSlot(prevState => ({ ...prevState, transferTo: bt_transfer_to }));
        if (bt_email !== null) setUserSlot(prevState => ({ ...prevState, email: bt_email }));
        if (bt_applicant_phone !== null) setUserSlot(prevState => ({ ...prevState, phone: bt_applicant_phone }));
        if (bt_amount !== null) setUserSlot(prevState => ({ ...prevState, amount: bt_amount }));

    }, [slots]);

    if (!submitted) return <BalanceTransferForm
                                slot={userSlot}
                                updateSubmitted={handleSubmit}
                                handleInputChange={handleInputChange}
                            />
    else return <SubmittedView updateSubmitted={handleSubmit}/>
};

export default BalanceTransfer;