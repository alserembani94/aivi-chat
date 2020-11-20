import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { estimateCashback, estimatePoints, findPotentialRewards } from '../../store/reducers/cardRecommender';
import { Images } from '../../utils/Images';

const LoadingScreen = () => {
    const form = useSelector((state: any) => state.form);
    const [loadingMessage, setLoadingMessage] = useState('');
    const history = useHistory();
    const cards = useSelector((state: any) => state.cardRecommender);
    const dispatch = useDispatch();

    const getCards = async () => {

        const selectedBanks = form.formContent.selectedBanks;

        let selectedCategories: any = {};
        form.formContent.expenseObject.forEach((item: any) => {
            if (item.subcategory) {
                item.subcategory.forEach((subItem: any) => {
                    if (subItem.name.toLowerCase() === 'online') {
                        selectedCategories[`${item.category.toLowerCase()}_${subItem.name.toLowerCase()}`] = subItem.expenseRange;
                    }
                    else {
                        selectedCategories[`${item.category.toLowerCase()}`] = subItem.expenseRange;
                    }
                })
            }
            else if (item.category.toLowerCase() === "health & insurance") {
                selectedCategories['health_insurance'] = item.expenseRange;
            }
            else {
                selectedCategories[item.category.toLowerCase()] = item.expenseRange;
            }
        });


        // console.log(selectedCategories);

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
            // message,
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
                { cards.error && <p>Return to home</p> }
                <img className="CardRecommenderLoading-Arte" src={Images.card_recommender_loading} alt="Card Loading" />
                <div className="CardRecommenderLoading-Tips">
                    <h6>Tips from AIVI:</h6>
                    <p>{currentTips}</p>
                </div>
            </main>
        </Fragment>
    )
}

export default LoadingScreen;
