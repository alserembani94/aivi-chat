import React from 'react';
// import {
//     CashbackItem,
//     RewardItem,
// } from '../../components/CardResult';
import {
    CounterInput,
    Modal,
} from '../../components/CustomComponent';
// import { Images } from '../../utils/Images';
import ExpensesDetails from '../../components/Leftbox/CreditCard/ExpensesDetails';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import AvailableCard from '../../components/Leftbox/CreditCard/AvailableCard';
import { Images } from '../../utils/Images';
// import { csv } from 'd3';
// import { CSVFiles } from '../../utils/DataSample';

// const cardMockData = {
//     image: '',
//     name: 'Maybank 2 Gold',
//     estimatedPoints: [1200, 1600],
//     period: '12 months',
// };

type ExpenseDetails = {
    category: string,
    subcategory?: {
        name: string,
        expenseRange: number[],
    }[],
    expenseRange?: number[],
}[];

const SiteBlogArticle: React.FC = () => {
    // const [allExpanded, setAllExpanded] = React.useState(false);

    // const toggleAllExpanded = () => {
    //     setAllExpanded(prevState => !prevState);
    // };
    // Temporary Period Details
    const [period, setPeriod] = React.useState(6);
    
    const handlePeriodChange = (value: number) => setPeriod(() => value);

    // Temporary Expense Details
    const [expenseDetails, setExpenseDetails] = React.useState<ExpenseDetails>([
        {
            category: 'Shopping',
            subcategory: [
                {
                    name: 'Online',
                    expenseRange: [2200, 8800],
                },
                {
                    name: 'Traditional',
                    expenseRange: [3000, 7000],
                },
            ],
        },
        {
            category: 'Dining',
            expenseRange: [3000, 7000],
        },
        {
            category: 'Health & Insurance',
            expenseRange: [3000, 7000],
        },
    ]);
    

    const handleExpenseDetailsUpdate = (expenseDetails: ExpenseDetails) => {
        setExpenseDetails(() => expenseDetails);
    }

    // CONFIGURATION FOR BANKS
    const [selectedBanks, setSelectedBanks] = React.useState<string[]>([]);
    const banksLimit = 1;

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };
    // const [data, setData] = React.useState<any>();
    // React.useEffect(() => {
    //     csv(CSVFiles.rewardCatalogue).then(data => {
    //         setData(() => data);
    //     })
    // }, []);

    // React.useEffect(() => {
    //     data && console.log(data[0]);
    // }, [data]);

    // CONFIGURATION FOR MODALS
    const [resetModal, setResetModal] = React.useState(false);
    const [searchModal, setSearchModal] = React.useState(false);

    // const handleModalOpen = (modalName: string) => {
    //     modalName === 'resetModal'
    //     ? setResetModal(prevState => true)
    //     : modalName === 'searchModal'
    //     && setSearchModal(prevState => true);
    // }

    const handleModalClose = (modalName: string) => {
        modalName === 'resetModal'
        ? setResetModal(prevState => false)
        : modalName === 'searchModal'
        && setSearchModal(prevState => false);
    }

    React.useEffect(() => {
        console.log({resetModal, searchModal});
    }, [resetModal, searchModal]);

    return (
        <React.Fragment>
            <main className="ResultPage-Body">
                <section className="ResultPage-TopContent">
                    <div>
                        <div className="ResultPage-TopBar">
                            <div className="ResultPage-TopBar-TitleBar">
                                &nbsp;
                            </div>
                            <button
                               
                            ><img src={Images.icon_search} alt="Search" />Search an article...
                            </button>
                        </div>
                    
                        <div>
                            <div>
                                <div>14 August 2020 / FINANCE</div>
                                <div>Financial World with AIVI</div>
                                <div>Explore and test different ideas, themes, and styles instantly whether you want to experiment<br/>
                                    with your team in a design sprint
                                </div>
                                <div><img src={Images.image_finance_world_with_aivi}/></div>
                            </div>
                                                  
                        </div>
                        <div>
                            <div>Surveys repeatedly show that advisers risk being out of step, particularly with their millenial clients, who want to<br/>
                                know more about socially responsible or environmental,  social and governance investing.
                            </div>
                            <div>In a recent TIAA Global Asset Manangement survey, some 36% of the advisers who participated said that they,<br/>
                                can't adequately evaluate the performance of socially responsible investments.
                            </div>
                            <div>At the same time, investors, particularly millenials and women, expressed a growing interest in adding socially<br/>
                                responsible investments to their portfolios.
                            </div>
                            <div><img src={Images.image_finance_chart}/></div>
                        </div>
                    </div>
                    
                    <div>
                      
                    </div>
                    
                </section>
                        
            </main>
        </React.Fragment>
    );
};

export default SiteBlogArticle;