import React from 'react';
import { Chatbox, conversationState } from '../../components';
import moment from 'moment';
import axios from 'axios';

// Construct types for component props
interface MainMenuProps {
    
}

const MainMenu: React.FC<MainMenuProps> = () => {
    const [conversation, setConversation] = React.useState<conversationState[]>([
        {
            user: 'bot',
            timestamp: moment().format(),
            message: "To get started, how about choosing one of the options below?",
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

    const [pushConversation, setPushConversation] = React.useState<any>();
    const [sessionAttributes, setSessionAttributes] = React.useState<any>();

    const updateConversation = (newConversation: conversationState) => {
        setPushConversation(() => newConversation);
        setConversation(() => [...conversation, newConversation]);

        // const endpoint = 'https://ykieujb749.execute-api.us-east-1.amazonaws.com/lex/';

        // const data = {
        //     message: newConversation.message,
        //     userId: "client",
        // };

        // const headerConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'ANY',
        //     },
        // };
        
        // axios.post(endpoint, data, headerConfig)
        // .then((res) => {
        //     console.log(res.data);
        //     setConversation(() => [...conversation, res.data]);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });

    };

    React.useEffect(() => {
        const endpoint = 'https://ykieujb749.execute-api.us-east-1.amazonaws.com/lex/';

        const data = pushConversation
        ? {
            message: pushConversation.message,
            userId: "client",
            sessionAttributes,
        }
        :{
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
            } = res.data;
            setConversation(() => [...conversation, {
                message,
                user,
                timestamp,
            }]);
            setSessionAttributes(() => sessionAttributes);
        })
        .catch((err) => {
            console.log(err);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pushConversation]);

    // React.useEffect(() => {
    //     const endpoint = 'https://ykieujb749.execute-api.us-east-1.amazonaws.com/lex/';

    //     const data = pushConversation;

    //     const headerConfig = {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'ANY',
    //         },
    //     };

    //     axios.post(endpoint, data, headerConfig)
    //     .then((res) => {
    //         console.log(res.data);
    //         setConversation(() => [...conversation, res.data]);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [pushConversation]);

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