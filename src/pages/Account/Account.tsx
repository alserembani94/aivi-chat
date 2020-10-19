import React, { FC, useState } from 'react';
import {
    TabBar,
} from '../../components/CustomComponent';
import Profile from './Profile';
import '../../styles/Account.scss';

const Account: FC = () => {
    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Profile');
    const tabMenuList = [
        {
            label: 'Profile',
            name: 'Profile',
            content: <Profile />
        },
        {
            label: 'Profile',
            name: 'Profile',
            content: <Profile />
        },
        {
            label: 'Profile',
            name: 'Profile',
            content: <Profile />
        },
    ];

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }

    return (
        <React.Fragment>
            <main className="Account-Body">
                <section className="Account-Body-Section">
                    <div className="Account-Body-Content">
                        <div className="Account-Body-Content-Header">
                            Account
                        </div>
                        <div className="Account-Body-Content-Tabs">
                        <TabBar 
                                currentTab={currentTab}
                                updateTab={handleChangeTab}
                                optionList={tabMenuList}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Account;