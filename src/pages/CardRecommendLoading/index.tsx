import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { estimateCashback, estimatePoints, findPotentialRewards } from '../../store/reducers/cardRecommender';

const LoadingScreen = () => {
    const [loadingMessage, setLoadingMessage] = useState('');
    const history = useHistory();
    const cards = useSelector((state: any) => state.cardRecommender);
    const dispatch = useDispatch();

    const getCards = async () => {
        const selectedBanks = ["cimb_bank", "maybank"];
        const selectedCategories = {
            shopping: [200, 1000],
            shopping_online: [800, 2000],
            education: [200, 800],
            dinning: [100, 400],
        };
        const months_to_estimate = 12;

        await dispatch(estimatePoints({ selectedBanks, selectedCategories, months_to_estimate }))
        .then(() => dispatch(estimateCashback({ selectedBanks, selectedCategories, months_to_estimate })))
        .then(() => dispatch(findPotentialRewards()));
    };

    useEffect(() => {
        getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const {
            estimatedPoints,
            estimatedCashback,
            rewardsFetched,
            error,
            loading,
            message,
        } = cards;
        if (!estimatedPoints && loading) setLoadingMessage(() => 'Getting cards with the best rewards!');
        else if (error) setLoadingMessage(() => 'Aivi is facing some issues. Sorry for the inconvenience');
        else if (estimatedPoints?.length && !estimatedCashback && loading) setLoadingMessage(() => 'Cards with great cashback is on its way too!');
        else if (!rewardsFetched && loading) setLoadingMessage(() => 'Optimising the maximum rewards, just for you!');
        else if (estimatedPoints?.length && estimatedCashback?.length && rewardsFetched) {
            setLoadingMessage(() => 'Finalizing your results...');
            setTimeout(() => {
                history.push('/credit-card-result');
            }, 5000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards]);


    return (
        <Fragment>
            <main className="CardRecommenderLoading-Screen">
                <p>{loadingMessage}</p>
            </main>
        </Fragment>
    )
}

export default LoadingScreen;
