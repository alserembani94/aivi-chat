import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { estimateCashback, estimatePoints, findPotentialRewards } from '../../store/reducers/cardRecommender';
import { recommendLoan } from '../../store/reducers/loanRecommender';
import { Images } from '../../utils/Images';

const LoadingScreen = () => {
    const form = useSelector((state: any) => state.form);
    const [loadingMessage, setLoadingMessage] = useState('');
    const history = useHistory();
    const loans = useSelector((state: any) => state.loanRecommender);
    const dispatch = useDispatch();

    const getLoans = async () => {

        const {
            selectedBanks,
            loanDetails: { loanAmount, repaymentPeriod },
            incomeSource,
            loanCommitments,
        } = form.formContent;

        const monthlyIncome = incomeSource.map((income: any) => Number(income.income)).reduce((sum: number, income: number) => sum + income);
        const monthlyDebt = loanCommitments.map((loan: any) => Number(loan.amount)).reduce((sum: number, loan: number) => sum + loan);
        const tenure = Number(repaymentPeriod);

        console.log(monthlyIncome);
        console.log(monthlyDebt);

        // const selectedBanks = ["rhb", "maybank", "cimb"];
        // const monthlyIncome = 3500;
        // const monthlyDebt = 500;
        // const loanAmount = 3000;
        // const tenure = 24;

        await dispatch(recommendLoan({
            selectedBanks,
            monthlyIncome,
            monthlyDebt,
            loanAmount: Number(loanAmount),
            tenure,
        }))
    };

    useEffect(() => {
        getLoans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const {
            loan,
            error,
            loading,
        } = loans;
        if (!loan && loading) setLoadingMessage(() => 'Matching to the best loan for you!');
        else if (error) setLoadingMessage(() =>' Aivi is facing some issues. Sorry for the inconvenience');
        // if (!estimatedPoints && loading) setLoadingMessage(() => 'Getting cards with the best rewards!');
        // else if (error) setLoadingMessage(() => 'Aivi is facing some issues. Sorry for the inconvenience');
        // else if (estimatedPoints?.length && !estimatedCashback && loading) setLoadingMessage(() => 'Cards with great cashback is on its way too!');
        // else if (!rewardsFetched && loading) setLoadingMessage(() => 'Optimising the maximum rewards, just for you!');
        else if (loan) {
            setLoadingMessage(() => 'Finalizing your results...');
            setTimeout(() => {
                history.push('/loan-result');
            }, 3000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loans]);

    // Tips section
    const tipsList = [
        "A good financial management is with us!",
        "Utilise AIVI to get more benefits of one of the best financial management!",
        "Always be careful of online transactions for any fraudulent, scams and identity theft.",
        "To manage your budget even more, download our app at Playstore and Apple Store today!",
    ];

    const randomIndexGenerator: (max: number) => number = (max) => {
        const randomize = Math.floor(Math.random() * Math.floor(max));
        // if (randomize === prevIndex) return randomIndexGenerator(max);
        // else {
        //     setPrevIndex(() => randomize);
        //     return randomize;
        // }
        return randomize;
    };
    const [currentTips, setCurrentTips] = useState(tipsList[randomIndexGenerator(tipsList.length)]);

    useEffect(() => {
        const randomTipsInterval = setInterval(() => {
            // Getting random index based on length of list of tips
            const randomIndex = randomIndexGenerator(tipsList.length);
            const randomTips = tipsList[randomIndex];
            setCurrentTips(() => randomTips);
        }, 4000);
        return () => clearInterval(randomTipsInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <main className="CardRecommenderLoading-Screen">
                <img className="CardRecommenderLoading-Logo" src={Images.logo_AIVI} alt="AIVI-Logo" />
                <p className="CardRecommenderLoading-Message" >{loadingMessage}</p>
                { loans.error && <p>Return to home</p> }
                <img className="CardRecommenderLoading-Arte" src={Images.card_recommender_loading} alt="Loan Loading" />
                <div className="CardRecommenderLoading-Tips">
                    <h6>Tips from AIVI:</h6>
                    <p>{currentTips}</p>
                </div>
            </main>
        </Fragment>
    )
}

export default LoadingScreen;
