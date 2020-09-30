import React from 'react';
import {
    CashbackItem,
    RewardItem,
} from '../../components/CardResult';
import {
    Modal,
} from '../../components/CustomComponent';
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

const SiteBlogList: React.FC = () => {
    // EXPAND / COLLAPSE CONFIGURATION
    const [allExpanded, setAllExpanded] = React.useState(false);

    const toggleAllExpanded = () => {
        setAllExpanded(prevState => !prevState);
    };
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

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };

    // CONFIGURATION FOR SELECTED CARD
    const [selectedCard, setSelectedCard] = React.useState('');
    const handleCardChange = (cardName: string) => cardName === selectedCard ? setSelectedCard(() => '') : setSelectedCard(() => cardName);
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
    const handleModalOpen = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => true);
                break;
            case 'searchModal':
                setSearchModal(() => true);
                break;
            default:
                return;
        }
    }
    const handleModalClose = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => false);
                break;
            case 'searchModal':
                setSearchModal(() => false);
                break;
            default:
                return;
        }
    }

    return (
        <React.Fragment>
            <main className="ResultPage-Body">
                <section className="ResultPage-TopContent">
                    <div className="ResultPage-TopBar">
                        <div className="ResultPage-TopBar-TitleBar">
                            <p className="ResultPage-TopBar-Title">Your results are in!</p>
                            <p className="ResultPage-TopBar-Subtitle">Click on the card to select.</p>
                        </div>
                        <button
                            onClick={() => handleModalOpen('searchModal')}
                        ><img src={Images.icon_search} alt="Search" />Search an article...
                        </button>
                    </div>
                    <div className="ResultPage-Content">
                        <div className="ResultPage-Content-Column">
                            <p className="ResultPage-Content-Title">Rewards</p>
                            
                        </div>
                        <div className="ResultPage-Content-Seperator" />
                        <div className="ResultPage-Content-Column">
                            <p className="ResultPage-Content-Title">Cashbacks</p>
                         
                        </div>
                    </div>
                </section>
                <section className="ResultPage-BottomContent">
                    <button className="ResultPage-BottomContent-Chat">
                        Chat
                    </button>
                    <div className="ResultPage-BottomContent-Description">
                        <p className="ResultPage-BottomContent-Description-Title">Ready To Apply?</p>
                        {/* <p className="ResultPage-BottomContent-Description-Subtitle">You Selected: {selectedCard}</p> */}
                    </div>
                    <button className="ResultPage-BottomContent-Apply" disabled>
                        Apply Now
                    </button>
                </section>

              
                        
            </main>
        </React.Fragment>
    );
};

export default SiteBlogList;