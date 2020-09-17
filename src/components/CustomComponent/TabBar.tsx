import React from 'react';
import {
    IoMdArrowRoundForward,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

type optionList = {
    label: string,
    name: string,
    content: JSX.Element;
    enabled?: boolean;
};

interface TabBarProps {
    currentTab: string;
    updateTab: (selectedTab: string) => void;
    optionList: optionList[];
    progressStrict: boolean;
    updateStrictTab?: (optionList: optionList[], nextActiveTab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({currentTab, updateTab, optionList, progressStrict = false, updateStrictTab}) => {
    const handleTabChange = (selectedTab: string) => {
        const tabBody = document.getElementById(selectedTab);
        tabBody && tabBody.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
        updateTab(selectedTab);
    }

    const handleProceedTab = () => {
        let enablingFlag = false;
        let nextActiveTab = currentTab;
        const updatedTabConfig = optionList.map(optionItem => {
            if (optionItem.name === currentTab) {
                enablingFlag = true;
                return optionItem;
            };
            if (enablingFlag) {
                enablingFlag = false;
                nextActiveTab = optionItem.name;
                return {...optionItem, enabled: true};
            }
            return optionItem;
        });
        updateStrictTab && updateStrictTab(updatedTabConfig, nextActiveTab);
    }

    React.useEffect(() => {
        const tabBody = document.getElementById(currentTab);
        tabBody && tabBody.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTab]);

    return (
        <React.Fragment>
            <div className="TabBar-Container">
                <ul className="TabBar-Header">
                    {
                        optionList.map((optionItem, index) => (
                            <li
                                data-active={optionItem.name === currentTab}
                                data-enabled={optionItem.enabled}
                                onClick={() => optionItem.enabled && handleTabChange(optionItem.name)}
                                key={index}
                            >
                                {optionItem.label}
                            </li>
                        ))
                    }
                </ul>
                <div className="TabBar-Body" id="TabBar-Body">
                    {
                        optionList.map((optionItem, index) => (
                            optionItem.enabled && <div className="TabBar-Body-Item" id={optionItem.name} key={index}>
                                {optionItem.content}
                            </div>
                        ))
                    }
                </div>
                {
                    (progressStrict && (!optionList.every(optionItem => optionItem.enabled)) ) && (
                        <div className="TabBar-ProgressAction">
                            <button
                                className="TabBar-ProgressAction-Proceed"
                                onClick={handleProceedTab}
                            >
                                <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Proceed' }} >
                                    <IoMdArrowRoundForward />
                                </IconContext.Provider>
                            </button>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    );
};

export default TabBar;