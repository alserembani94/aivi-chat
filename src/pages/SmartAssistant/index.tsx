import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import {
    Chatbox,
    CashFromCard,
    CreditCard,
    BalanceTransfer,
    PersonalLoan,
    conversationState,
    AuthModal,
} from '../../components';
import { converseWithLex, initiateConversation } from '../../store/reducers/conversation';
// import { hideAuthModal, showAuthModal } from '../../store/reducers/authModal';
// import { InputBox, Modal } from '../../components/CustomComponent';
import { Images } from '../../utils/Images';

// import { validateData } from './utils/DataValidation';

const SmartAssistant = () => {
    
    const conversations = useSelector((state: any) => state.conversations);
    const dispatch = useDispatch();
    
    const selectedSection = () => {
        switch (conversations.currentIntent) {
            case 'AIVIRequestCard': return 'Credit Card';
            case 'AIVIRequestLoan': return 'Personal Loan';
            default: return 'Cash From Card';
        }
    }

    const [showChatInMobile, setShowChatInMobile] = useState(false);
    const [renderSection, setRenderSection] = useState(selectedSection);
    const [renderModel, setRenderModel] = useState(false);
    const sections = ['Cash From Card', 'Credit Card', 'Balance Transfer', 'Personal Loan'];

    useEffect(() => {
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

    const handleSectionRendering = () => {
        switch (renderSection) {
            case 'Cash From Card': return <CashFromCard />;
            case 'Credit Card': return <CreditCard />;
            case 'Balance Transfer': return <BalanceTransfer />;
            case 'Personal Loan': return <PersonalLoan />
            default: return <>Not Found</>;
        }
    };

    const handleNextLocation = () => {
        switch (renderSection) {
            case 'Cash From Card': return '/';
            case 'Credit Card': return '/credit-card-result';
            case 'Balance Transfer': return '/';
            case 'Personal Loan': return '/loan-result';
            default: return '/';
        }
    }

    const updateConversation = (newMessage: string) => {
        dispatch(converseWithLex(newMessage));
    };

    // useEffect(() => {
    //     dispatch(initiateConversation('Hello'));
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
    
    return (
        <main className="AIVI-Body">
            {/* <section className="AIVI-Body"> */}
                <section className="AIVI-Chatbox">
                    <img src={Images.logo_AIVI} alt="logo-aivi" className="AIVI-Logo" />
                    <Chatbox
                        conversation={conversations.list}
                        updateConversation={updateConversation}
                        disableInput={conversations.list[conversations.list.length - 1]?.actions?.actionType === 'multipleOption'}
                    />
                </section>
                <section className="AIVI-Leftbox">
                    {handleSectionRendering()}
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
                    conversation={conversations.list}
                    updateConversation={updateConversation}
                    disableInput={conversations.list[conversations.list.length - 1]?.actions?.actionType === 'multipleOption'}
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
            {/* <button onClick={() => dispatch(showAuthModal())}>Show Auth Modal</button>
            <button onClick={() => dispatch(hideAuthModal())}>Hide Auth Modal</button> */}
            {/* END */}

            <AuthModal
                nextLocation={handleNextLocation()}
            />
        </main>
  );
}

export default SmartAssistant;
