import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    Chatbox,
    CashFromCard,
    CreditCard,
    BalanceTransfer,
    PersonalLoan,
    AuthModal,
} from '../../components';
import { converseWithLex, initiateIntent } from '../../store/reducers/conversation';
import { Images } from '../../utils/Images';

const SmartAssistant = () => {
    const { section_path } = useParams<any>();
    
    const conversations = useSelector((state: any) => state.conversations);
    const dispatch = useDispatch();
    
    const selectedSection = () => {
        if (section_path) {
            switch (section_path) {
                case 'credit-card': return 'Credit Card';
                case 'personal-loan': return 'Personal Loan';
                case 'cash-from-card': return 'Cash From Card';
                case 'balance-transfer': return 'Balance Transfer';
            }
        }
        switch (conversations.currentIntent) {
            case 'AIVIRequestCard': return 'Credit Card';
            case 'AIVIRequestLoan': return 'Personal Loan';
            case 'AIVICashFromCard': return 'Cash From Card';
            case 'AIVIBalanceTransfer': return 'Balance Transer';
            default: return 'Cash From Card';
        }
    }

    const [showChatInMobile, setShowChatInMobile] = useState(false);
    const [renderSection, setRenderSection] = useState(selectedSection);
    // const [renderModel, setRenderModel] = useState(false);
    // const sections = ['Cash From Card', 'Credit Card', 'Balance Transfer', 'Personal Loan'];

    const handleChatboxModal = () => {
        setShowChatInMobile(prevState => { return !prevState });
    };

    useEffect(() => {
        dispatch(initiateIntent(section_path || ""));
        setRenderSection(prevState => selectedSection());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [section_path]);

    // FOR DEBUG PURPOSE ONLY
    // START
    // const handleSectionsMenu =  () => {
    //     setRenderModel(prevState => { return !prevState });
    // };

    // const handleChangeSection = (section: string) => {
    //     setRenderSection(() => { return section })
    //     setRenderModel(prevState => { return !prevState });
    // };
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
            case 'Credit Card': return '/loading';
            case 'Balance Transfer': return '/';
            case 'Personal Loan': return '/loan-result';
            default: return '/';
        }
    };

    const updateConversation = (newMessage: string) => {
        dispatch(converseWithLex(newMessage));
    };
    
    return (
        <React.Fragment>
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
            {/* <button className="Temporary-ChangeRender" onClick={handleSectionsMenu}>
                Change Section
            </button>
            <div className="Temporary-Sections" data-visible={renderModel.toString()}>
                <ul>
                    {
                        sections.map((section, index) => <li onClick={() => handleChangeSection(section)} key={index}>{section}</li>)
                    }
                </ul>
            </div> */}
            {/* END */}

            <AuthModal
                nextLocation={handleNextLocation()}
            />
        </React.Fragment>
    );
}

export default SmartAssistant;
