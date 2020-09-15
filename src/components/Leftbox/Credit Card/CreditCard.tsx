import React from 'react';
import {
    TabBar,
} from '../../CustomComponent';
import AvailableCard from './AvailableCard';
import Expenses from './Expenses';

const CreditCard = () => {
    const [currentTab, setCurrentTab] = React.useState('Available Card');

    const tabMenuList = [
        {
            label: 'Available Card',
            name: 'Available Card',
            content: <AvailableCard />,
        },
        {
            label: 'Expenses',
            name: 'Expenses',
            content: <Expenses />,
        },
        {
            label: 'Monthly Income',
            name: 'Monthly Income',
            content: <div>Income Element</div>,
        },
        // {
        //     label: 'Card',
        //     name: 'Card',
        //     content: <AvailableCard />,
        // },
        // {
        //     label: 'Hello',
        //     name: 'Hello',
        //     content: <div>Expenses Element</div>,
        // },
        // {
        //     label: 'Malaysia',
        //     name: 'Malaysia',
        //     content: <div>Income Element</div>,
        // },
    ];

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }

    return (
        <React.Fragment>
            <div className="CreditCard-Content">
                <TabBar
                    currentTab={currentTab}
                    updateTab={handleChangeTab}
                    optionList={tabMenuList}
                />
            </div>
            <div className="CreditCard-Button">
                <button
                    className="Button Button-Full"
                >
                    Submit Application
                </button>
            </div>
        </React.Fragment>
    );
};

export default CreditCard;