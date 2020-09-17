import React from 'react';
import './App.scss';
import {
    MdMenu,
} from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';

import {
    Chatbox,
    CashFromCard,
    CreditCard,
} from './components';
import BalanceTransfer from './components/Leftbox/BalanceTransfer/BalanceTransfer';

// import { validateData } from './utils/DataValidation';

type mockSlotType = {
    [transferFrom: string]: string,
    name: string,
    phone: string,
    email: string,
    amount: string,
};

type InputOptionType = {
    name: string;
    label: string;
    value: string;
};

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    optionList?: InputOptionType[];
};

interface conversationState {
    user?: string;
    timestamp?: string;
    message?: string;
}

const mockConversation = [
    {
        user: 'bot',
        timestamp: '2020-09-09',
        message: 'Welcome!',
    },
    {
        user: 'user',
        timestamp: '2020-09-09',
        message: 'Hey!',
    },
    {
        user: 'bot',
        timestamp: '2020-09-09',
        message: 'Are you interested in anything?',
    },
    {
        user: 'user',
        timestamp: '2020-09-09',
        message: 'I would like to order an aglio e olio, with a freckle of cinnamon, and the cherry on top!',
    },
];

function App() {
    const [userChatInput, setUserChatInput] = React.useState('');
    const [conversation, setConversation] = React.useState<conversationState[]>(mockConversation);
    const [showChatInMobile, setShowChatInMobile] = React.useState(false);
    const [renderSection, setRenderSection] = React.useState('Balance Transfer');
    const [renderModel, setRenderModel] = React.useState(false);

    const sections = ['Cash From Card', 'Credit Card', 'Balance Transfer'];

    React.useEffect(() => {
        // const rootStyle = document.documentElement.style;
        // rootStyle.setProperty('--sidebar-width', '10px');
        // console.log(validateData('Hello', 'email'));
        // setInterval({}, 1000); // refresh every second - Is this a good practice?
        // console.log(showChatInMobile);
    }, [showChatInMobile]);

    // Functions for chatbox
    const handleChatInputUpdate = (value: string) => {
        setUserChatInput(() => value);
    };

    const handleChatSubmit = () => {
        if (userChatInput !== '') {
            const conversationMap = {
                user: 'User',
                timestamp: moment().format(),
                message: userChatInput,
            };
            setConversation(prevConversation => { return [...prevConversation, conversationMap] });
            setUserChatInput('');
        }
    };

    const handleChatboxModal = () => {
        setShowChatInMobile(prevState => { return !prevState });
    }

    // FOR DEBUG PURPOSE ONLY
    // START
    const handleSectionsMenu = () => {
        setRenderModel(prevState => { return !prevState });
    }

    const handleChangeSection = (section: string) => {
        setRenderSection(() => { return section })
        setRenderModel(prevState => { return !prevState });
    }
    // END

    const handleSectionRendering = (sectionToRender: string) => {
        switch (renderSection) {
            case 'Cash From Card':
                return <CashFromCard />;
            case 'Credit Card':
                return <CreditCard />;
            case 'Balance Transfer':
                return <BalanceTransfer />
            default:
                return <>Not Found</>;
        }
    }

    return (
        <main className="AIVI-Page">
            <section className="AIVI-Sidebar">
                <div className="Button Button-Hamburger">
                    <IconContext.Provider value={{ className: 'Icon-Rotate Icon-Light Icon-Hamburger' }} >
                        <MdMenu />
                    </IconContext.Provider>
                </div>
            </section>
            <section className="AIVI-Chatbox">
                <Chatbox
                    userInput={userChatInput}
                    updateInput={handleChatInputUpdate}
                    submitInput={handleChatSubmit}
                    conversation={conversation}
                />
            </section>
            <section className="AIVI-Leftbox">
                { handleSectionRendering(renderSection) }
            </section>
            <button
                className="AIVI-Chatbox-Mobile-Button Button"
                onClick={handleChatboxModal}
            >
                C
            </button>
            <section
                className={`AIVI-Chatbox-Mobile-Model ${showChatInMobile ? `AIVI-Chatbox-Mobile-Show` : `AIVI-Chatbox-Mobile-Hide`}`}
            >
                <Chatbox
                    userInput={userChatInput}
                    updateInput={handleChatInputUpdate}
                    submitInput={handleChatSubmit}
                    conversation={conversation}
                />
            </section>
            {/* FOR DEBUG PURPOSE ONLY */}
            {/* START */}
            <button className="Temporary-ChangeRender" onClick={handleSectionsMenu}>
                Change Section
            </button>
            <div className="Temporary-Sections" data-visible={renderModel.toString()}>
                <ul>
                    {
                        sections.map((section, index) => <li onClick={() => handleChangeSection(section)} key={index}>{section}</li>)
                    }
                </ul>
            </div>
            {/* END */}
        </main>
  );
}

export default App;
