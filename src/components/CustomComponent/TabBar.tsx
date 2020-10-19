import React, { FC, useEffect } from 'react';
import {
    IoMdArrowForward,
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
    progressStrict?: boolean;
    updateStrictTab?: (enabledTab: boolean[] | undefined, nextActiveTab: string) => void;
    enabledTab?: boolean[];
}

const TabBar: FC<TabBarProps> = ({currentTab, updateTab, optionList, progressStrict = false, updateStrictTab, enabledTab}) => {
    const handleTabChange = (selectedTab: string) => {
        const tabBody = document.getElementById(selectedTab);
        tabBody && tabBody.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
        updateTab(selectedTab);
    }

    const handleProceedTab = () => {
        // let enablingFlag = false;
        // let nextActiveTab = currentTab;
        // const updatedTabConfig = optionList.map(optionItem => {
        //     if (optionItem.name === currentTab) {
        //         enablingFlag = true;
        //         return optionItem;
        //     };
        //     if (enablingFlag) {
        //         enablingFlag = false;
        //         nextActiveTab = optionItem.name;
        //         return {...optionItem, enabled: true};
        //     }
        //     return optionItem;
        // });
        // updateStrictTab && updateStrictTab(updatedTabConfig, nextActiveTab);
        let nextActiveTabIndex = -1;
        const updatedEnabledTab = enabledTab?.map((enabledItem, index) => {
            enabledItem && (nextActiveTabIndex = index + 1);
            if (nextActiveTabIndex === index) { return true; } else { return enabledItem; }
        });
        updateStrictTab && updateStrictTab(updatedEnabledTab, optionList[nextActiveTabIndex].name);
    }

    useEffect(() => {
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
                                data-enabled={progressStrict ? (enabledTab ? enabledTab[index] : true) : true}
                                // onClick={() => handleTabChange(optionItem.name)}
                                onClick={() => progressStrict ? (enabledTab && enabledTab[index] && handleTabChange(optionItem.name)) : handleTabChange(optionItem.name)}
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
                            (!progressStrict || (enabledTab && enabledTab[index])) && <div className="TabBar-Body-Item" id={optionItem.name} key={index}>
                                {optionItem.content}
                            </div>
                        ))
                    }
                </div>
                {
                    (progressStrict && !enabledTab?.every(enabledTabItem => enabledTabItem) ) && (
                        <div className="TabBar-ProgressAction">
                            <button
                                className="TabBar-ProgressAction-Proceed"
                                onClick={handleProceedTab}
                            >
                                <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Proceed' }} >
                                    <IoMdArrowForward />
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