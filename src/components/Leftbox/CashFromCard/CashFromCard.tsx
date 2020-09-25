import React from 'react';
import CashFromCardForm from './CashFromCardForm';
import SubmittedView from '../SubmittedView';
import { connect } from 'react-redux';
// import { CashFromCardType } from '../../../store/reducers/cashFromCard';
// import { submitForRecommendation } from '../../../store/reducers/recommendCreditCard';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

const CashFromCard: React.FC = (props) => {
    const [userSlot, setUserSlot] = React.useState({
        transferFrom: '',
        name: '',
        phone: '',
        email: '',
        amount: 0,
    });

    React.useEffect(() => {
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

// const mapDispatchToProps = { submitForRecommendation };

export default connect(
    mapStateToProps,
    null,
)(CashFromCard);