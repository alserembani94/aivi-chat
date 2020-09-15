import React from 'react';

type optionList = {
    label: string,
    name: string,
    content: JSX.Element;
};

interface TabBarProps {
    currentTab: string;
    updateTab: (selectedTab: string) => void;
    optionList: optionList[];
}

const TabBar: React.FC<TabBarProps> = ({currentTab, updateTab, optionList}) => {
    const handleTabChange = (selectedTab: string) => {
        const tabBody = document.getElementById(selectedTab);
        tabBody && tabBody.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
        updateTab(selectedTab);
    }

    React.useEffect(() => {
        const tabBody = document.getElementById(currentTab);
        tabBody && tabBody.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <div className="TabBar-Container">
                <ul className="TabBar-Header">
                    {
                        optionList.map((optionItem, index) => (
                            <li
                                data-active={(optionItem.name === currentTab).toString()}
                                onClick={() => handleTabChange(optionItem.name)}
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
                            <div className="TabBar-Body-Item" id={optionItem.name} key={index}>
                                {optionItem.content}
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default TabBar;