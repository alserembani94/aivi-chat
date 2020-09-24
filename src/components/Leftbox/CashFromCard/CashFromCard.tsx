import React from 'react';
import CashFromCardForm from './CashFromCardForm';
import SubmittedView from '../SubmittedView';
import { connect } from 'react-redux';
import { CashFromCardType, informationAdded } from '../../../store/reducers/cashFromCard';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

const CashFromCard: React.FC<CashFromCardType> = ({transferFrom, name, phone, email, amount}) => {
    const [userSlot, setUserSlot] = React.useState({
        transferFrom: '',
        name: '',
        phone: '',
        email: '',
        amount: 0,
    });

    React.useEffect(() => {
        setUserSlot(() => ({
            transferFrom,
            name,
            phone,
            email,
            amount,
        }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
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

const mapStateToProps = (state: any) => state.cashFromCard.data;

const mapDispatchToProps = { informationAdded };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CashFromCard);