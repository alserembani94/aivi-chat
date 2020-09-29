import React from 'react';

import {
    Chatbox,
    CashFromCard,
    CreditCard,
    BalanceTransfer,
    PersonalLoan,

    conversationState,
} from '../../components';
import { Images } from '../../utils/Images';

// import { validateData } from './utils/DataValidation';

function SmartAssistant() {
    const [showChatInMobile, setShowChatInMobile] = React.useState(false);
    const [renderSection, setRenderSection] = React.useState('Cash From Card');
    const [renderModel, setRenderModel] = React.useState(false);
    const sections = ['Cash From Card', 'Credit Card', 'Balance Transfer', 'Personal Loan'];

    React.useEffect(() => {
        // const rootStyle = document.documentElement.style;
        // rootStyle.setProperty('--sidebar-width', '10px');
        // console.log(validateData('Hello', 'email'));
        // setInterval({}, 1000); // refresh every second - Is this a good practice?
        // console.log(showChatInMobile);
    }, [showChatInMobile]);

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
                return <BalanceTransfer />;
            case 'Personal Loan':
                return <PersonalLoan />
            default:
                return <>Not Found</>;
        }
    };
    
    const [conversation, setConversation] = React.useState<conversationState[]>([
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
        {
            user: 'bot',
            timestamp: '2020-09-09',
            message: 'Okay, what\'s next?',
        },
    ]);

    const updateConversation = (newConversation: conversationState) => setConversation(() => [...conversation, newConversation]);

    return (
        <main className="AIVI-Body">
            {/* <section className="AIVI-Body"> */}
                <section className="AIVI-Chatbox">
                    <img src={Images.logo_AIVI} alt="logo-aivi" className="AIVI-Logo" />
                    <Chatbox
                        conversation={conversation}
                        updateConversation={updateConversation}
                    />
                </section>
                <section className="AIVI-Leftbox">
                    { handleSectionRendering(renderSection) }
                </section>
            {/* </section> */}

            {/* FOR MOBILE VERSION ONLY */}
            {/* START */}
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
                    conversation={conversation}
                    updateConversation={updateConversation}
                />
            </section>
            {/* END */}


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

export default SmartAssistant;
