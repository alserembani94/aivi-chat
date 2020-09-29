import React from 'react';
import { Chatbox, conversationState } from '../../components';

// Construct types for component props
interface MainMenuProps {
    
}

const MainMenu: React.FC<MainMenuProps> = () => {
    const [conversation, setConversation] = React.useState<conversationState[]>([
        {
            user: 'bot',
            timestamp: '2020-09-09',
            message: "",
            actions: {
                actionType: "multipleOption",
                content: {
                    optionList: [
                        {
                            label: 'Credit Card',
                            value: 'Credit Card',
                        },
                        {
                            label: 'Balance Transfer',
                            value: 'Balance Transfer',
                        },
                        {
                            label: 'Personal Loan',
                            value: 'Personal Loan',
                        },
                        {
                            label: 'Cash From Card',
                            value: 'Cash From Card',
                        },
                    ],
                },
            },
        },
    ]);

    const updateConversation = (newConversation: conversationState) => setConversation(() => [...conversation, newConversation]);

    return (
        <React.Fragment>
            <div className="MainMenu-Screen">
                <Chatbox
                    conversation={conversation}
                    updateConversation={updateConversation}
                />
            </div>
        </React.Fragment>
    );
};

export default MainMenu;