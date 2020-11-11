import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    TabBar,
} from '../../components/CustomComponent';
import Profile from './Profile';
import Notification from './Notification';
import PersonalData from './PersonalData';
import '../../styles/Account.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

type ProfileDetailsType = {
    username: string,
    email: string,
    password: string,
    phone: string,
}

const Account: FC = () => {
    const { section } = useParams<any>();
    
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
    const [currentTab, setCurrentTab] = useState(section || 'profile');
    const tabMenuList = [
        {
            label: 'Profile',
            name: 'profile',
            content: <Profile 
                ProfileDetails={profileDetails}
                handleProfileDetailsUpdate={updateProfileDetails}
            />
        },
        {
            label: 'Notification',
            name: 'notification',
            content: <Notification />
        },
        {
            label: 'Personal Data',
            name: 'personal-data',
            content: <PersonalData />
        },
    ];

    useEffect(() => setCurrentTab(() => section), [section]);

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }

    return (
        <React.Fragment>
            <main className="Account-Body">
                <Header />
                <div className="Account-Body-Content">
                    <div className="Account-Body-Content-Header">
                        Account
                    </div>
                    <div className="Account-Body-Content-Tabs">
                        <TabBar 
                            currentTab={currentTab}
                            updateTab={handleChangeTab}
                            optionList={tabMenuList}
                            enableScroll={false}
                        />
                    </div>
                </div>
                <Footer />
            </main>
        </React.Fragment>
    );
}

export default Account;