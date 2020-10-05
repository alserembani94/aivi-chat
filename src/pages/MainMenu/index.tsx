import React, { FC, useEffect, useState } from 'react';
import { Chatbox, conversationState } from '../../components';
import axios from 'axios';

// Construct types for component props
interface MainMenuProps {
    
}

const MainMenu: FC<MainMenuProps> = () => {
    const [conversation, setConversation] = useState<conversationState[]>([]);

    const [pushConversation, setPushConversation] = useState<any>();
    const [sessionAttributes, setSessionAttributes] = useState<any>();

    // Trigger push conversation before sending to lex
    const updateConversation = (newConversation: conversationState) => {
        setPushConversation(() => newConversation);
        setConversation(() => [...conversation, newConversation]);
    };

    // Push conversation to lex after user response
    useEffect(() => {
        const endpoint = 'https://ykieujb749.execute-api.us-east-1.amazonaws.com/lex/';

        const data = pushConversation
        ? {
            message: pushConversation.message,
            userId: "client",
            sessionAttributes,
        }
        : {
            message: "Hello",
            userId: "client",
        };

        const headerConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'ANY',
            },
        };

        axios.post(endpoint, data, headerConfig)
        .then((res) => {
            const {
                message,
                user,
                timestamp,
                sessionAttributes,
                // responseCard,
                actions,
            } = res.data;
            setConversation(() => [...conversation, {
                message,
                user,
                timestamp,
                actions,
            }]);
            setSessionAttributes(() => sessionAttributes);
            // console.log(responseCard, actions);
        })
        .catch((err) => {
            console.log(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pushConversation]);

    useEffect(() => {
        
        return () => {
            
        }
    }, [])

    return (
        <React.Fragment>
            <div className="MainMenu-Screen">
                <Chatbox
                    conversation={conversation}
                    updateConversation={updateConversation}
                    disableInput={conversation[conversation.length - 1]?.actions?.actionType === 'multipleOption'}
                />
            </div>
        </React.Fragment>
    );
};

export default MainMenu;

// const [conversation, setConversation] = useState<conversationState[]>([
    //     {
    //         user: 'bot',
    //         timestamp: moment().format(),
    //         message: "To get started, how about choosing one of the options below?",
    //         actions: {
    //             actionType: "multipleOption",
    //             content: {
    //                 optionList: [
    //                     {
    //                         label: 'Credit Card',
    //                         value: 'Credit Card',
    //                     },
    //                     {
    //                         label: 'Balance Transfer',
    //                         value: 'Balance Transfer',
    //                     },
    //                     {
    //                         label: 'Personal Loan',
    //                         value: 'Personal Loan',
    //                     },
    //                     {
    //                         label: 'Cash From Card',
    //                         value: 'Cash From Card',
    //                     },
    //                 ],
    //             },
    //         },
    //     },
    // ]);