import React from 'react';
import {
    RewardItem,
} from '../../components/CardResult';
// import { csv } from 'd3';
// import { CSVFiles } from '../../utils/DataSample';

const cardMockData = {
    image: '',
    name: 'Maybank 2 Gold',
    estimatedPoints: [1200, 1600],
    period: '12 months',

};

const Result: React.FC = () => {
    // const [data, setData] = React.useState<any>();
    // React.useEffect(() => {
    //     csv(CSVFiles.rewardCatalogue).then(data => {
    //         setData(() => data);
    //     })
    // }, []);

    // React.useEffect(() => {
    //     data && console.log(data[0]);
    // }, [data]);

    return (
        <React.Fragment>
            <main className="CreditCardResult-Body">
                <section className="CreditCardResult-TopContent">
                    <div className="CreditCardResult-TitleBar">
                        <p>Your results are in!</p>
                        <button>Expand All</button>
                        <button>Reset Expense</button>
                        <button>Not what you're looking for?</button>
                    </div>
                    <div className="CreditCardResult-Content">
                        <div className="CreditCardResult-Content-Column">
                            <p className="CreditCardResult-Content-Title">Rewards</p>
                            <RewardItem

                            />
                            <RewardItem

                            />
                        </div>
                        <div className="CreditCardResult-Content-Seperator" />
                        <div className="CreditCardResult-Content-Column">
                            <p className="CreditCardResult-Content-Title">Cashbacks</p>
                            <RewardItem />
                        </div>
                    </div>
                </section>
                <section className="CreditCardResult-BottomContent">
                    <p>Bottom Content</p>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Result;