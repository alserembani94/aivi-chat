import React from 'react';
import BalanceTransferForm from './BalanceTransferForm';
import SubmittedView from '../SubmittedView';

const BalanceTransfer = () => {
    const [userSlot, setUserSlot] = React.useState({
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

    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = () => {
        setSubmitted(prevState => { return !prevState});
    };

    if (!submitted) return <BalanceTransferForm
                                slot={userSlot}
                                updateSubmitted={handleSubmit}
                                handleInputChange={handleInputChange}
                            />
    else return <SubmittedView updateSubmitted={handleSubmit}/>
};

export default BalanceTransfer;