import React, { FC, useState } from 'react';
import {
    TabBar,
} from '../../components/CustomComponent';
import Privacy from './Privacy';
import Security from './Security';
import Terms from './Terms';
import Disclaimer from './Disclaimer';
import '../../styles/Legal.scss';

const Legal: FC = () => {

    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Privacy');
    const tabMenuList = [
        {
            label: 'Privacy',
            name: 'Privacy',
            content: <Privacy />,
        },
        {
            label: 'Security',
            name: 'Security',
            content: <Security />,
        },
        {
            label: 'Terms of Use',
            name: 'Terms of Use',
            content: <Terms />,
        },
        {
            label: 'Disclaimer',
            name: 'Disclaimer',
            content: <Disclaimer />,
        },
    ];

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }
    
    return (
        <React.Fragment>
            <main className="Legal-Body">
                <section className="Legal-Body-Section">
                    <div className="Legal-Body-Content">
                        <div className="Legal-Body-Content-Header">
                            Legal
                        </div>
                        <div className="Legal-Body-Content-Tabs">
                            {currentTab == 'Privacy' ? <div className="Legal-Body-Content-Tabs-Bg"></div> 
                            : currentTab == 'Security' ? <div className="Legal-Body-Content-Tabs-Bg"></div> 
                            : <div></div> }
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
};

export default Legal;