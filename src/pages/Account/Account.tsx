import React, { FC, useState } from 'react';
import {
    TabBar,
} from '../../components/CustomComponent';
import Profile from './Profile';
import '../../styles/Account.scss';

type ProfileDetailsType = {
    username: string,
    email: string,
    password: string,
    phone: string,
}

const Account: FC = () => {
    // PROFILE DETAILS CONFIGURATION
    const [profileDetails, setProfileDetails] = useState<ProfileDetailsType>({
        username: '',
        email: '',
        password: '',
        phone: '',
    });

    const updateProfileDetails = (updatedProfileDetails: ProfileDetailsType) => {
        setProfileDetails(() => { return updatedProfileDetails });
    }

    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Profile');
    const tabMenuList = [
        {
            label: 'Profile',
            name: 'Profile',
            content: <Profile 
                ProfileDetails={profileDetails}
                handleProfileDetailsUpdate={updateProfileDetails}
            />
        },
        {
            label: 'Notification',
            name: 'Notification',
            content: <Profile 
                ProfileDetails={profileDetails}
                handleProfileDetailsUpdate={updateProfileDetails}
            />
        },
        {
            label: 'Personal Data',
            name: 'Personal Data',
            content: <Profile 
                ProfileDetails={profileDetails}
                handleProfileDetailsUpdate={updateProfileDetails}
            />
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