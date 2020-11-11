import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    TabBar,
} from '../../components/CustomComponent';
import Privacy from './Privacy';
import Security from './Security';
import Terms from './Terms';
import Disclaimer from './Disclaimer';
import '../../styles/Legal.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Legal: FC = () => {
    const { section } = useParams<any>();

    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState(section || 'privacy');
    const tabMenuList = [
        {
            label: 'Privacy',
            name: 'privacy',
            content: <Privacy />,
        },
        {
            label: 'Security',
            name: 'security',
            content: <Security />,
        },
        {
            label: 'Terms of Use',
            name: 'terms',
            content: <Terms />,
        },
        {
            label: 'Disclaimer',
            name: 'disclaimer',
            content: <Disclaimer />,
        },
    ];

    useEffect(() => setCurrentTab(() => section), [section]);

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }
    
    return (
        <React.Fragment>
            <main className="Legal-Body">
                <Header />
                <section className="Legal-Body-Section">
                    <div className="Legal-Body-Content">
                        <div className="Legal-Body-Content-Header">
                            Legal
                        </div>
                        <div className="Legal-Body-Content-Tabs">
                            <TabBar 
                                currentTab={currentTab}
                                updateTab={handleChangeTab}
                                optionList={tabMenuList}
                            />
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </React.Fragment>
    );
};

export default Legal;