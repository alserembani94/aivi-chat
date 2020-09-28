import React from 'react';
import {
    MdAdd,
    MdMic,
} from 'react-icons/md';
// import {
//     // RiEmotionHappyLine,
//     RiSendPlaneFill,
// } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { Images } from '../../utils/Images';
import moment from 'moment';

type conversationState = {
    user: string,
    timestamp: string,
    message: string,
    actions?: {
        actionType: "links" | "images" | "dropdown" | "suggestedReply",
        content: {
            url?: string,
            imageUrl?: string,
            caption?: string,
            optionList?: {
                label: string,
                value: string,
            }[],
        },
        remarks?: string[],
    },
};

const Chatbox: React.FC = () => {
    const [userChatInput, setUserChatInput] = React.useState('');
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
            actions: {
                actionType: 'links',
                content: {
                    url: 'https://stackoverflow.com/questions/26855423/how-to-require-a-specific-string-in-typescript-interface',
                    caption: 'I just want to follow the links.',
                }
            },
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
    ]);


    React.useEffect(() => {
        // Single Element only
        // const element = document.getElementById('Last-Dialog');
        // element?.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'});
        // element?.scrollIntoView(false);
        const elements: Element[] = Array.from(document.getElementsByClassName('Last-Dialog'));
        elements.forEach(element => element.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'}));
    }, [conversation]);

    // Functions for chatbox
    const handleChatInputUpdate = (value: string) => {
        setUserChatInput(() => value);
    };

    const handleChatSubmit = (pressedKey: string) => {
        if (pressedKey === 'Enter') {
            if (userChatInput !== '') {
                const conversationMap = {
                    user: 'User',
                    timestamp: moment().format(),
                    message: userChatInput,
                };
                setConversation(prevConversation => { return [...prevConversation, conversationMap] });
                setUserChatInput('');
            }
        }
    };

    // const handleChatInputUpdate = (text: string) => updateInput(text);
    // const handleChatSubmit = (pressedKey: string) => pressedKey === 'Enter' && submitInput();

    return (
        <React.Fragment>
            <div className="Chatbox-Container">
                    <div className="Chatbox-Avatar Button">
                        <img
                            src="https://i.imgur.com/gqSZQbW.png"
                            alt="AIVI Avatar"
                        />
                    </div>
                    <div className="Chatbox-Box">
                        <div className="Chatbox-Dialog">
                            {
                                conversation.map((conversationItem, index) => (
                                    <div
                                        className={`Dialog-Container ${index === (conversation.length - 1) ? 'Last-Dialog' : 'Not-Last-Dialog'}`}
                                        data-side={conversationItem.user === 'bot' ? 'left' : 'right'}
                                        id={index === (conversation.length - 1) ? 'Last-Dialog' : 'Not-Last-Dialog'}
                                        key={index}
                                    >
                                        <div className="Dialog-Bubble">
                                            <p>{conversationItem.message}</p>
                                            <p className="Dialog-Timestamp">{moment(conversationItem.timestamp).format('HH:mm')}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="Chatbox-Suggestions">
                            <p>Hello87b2yhr97832nr978hv4g98472mnhgm9834mhurweffiuwrhjgmfrywbn8h34joiruhfdjrew987gvgq37rtbcvb8736ertcfg3726cfb8gn87qwengcfjhny4h3jfgidhuwerojgimuhj</p>
                        </div>
                        <div className="Chatbox-Input">
                            <button className="Chatbox-Input-UploadOptions Button">
                                <IconContext.Provider value={{ className: 'Icon Icon-Rotate Icon-Light Icon-Add' }} >
                                    <MdAdd />
                                </IconContext.Provider>
                            </button>
                            {/* <textarea
                                className="Chatbox-Input-InputBox"
                                placeholder="Input here"
                                value={userChatInput}
                                onChange={({ currentTarget: {value} }) => handleChatInputUpdate(value)}
                                onKeyPress={({ key: pressedKey}) => handleChatSubmit(pressedKey)}
                            /> */}
                            <input
                                className="Chatbox-Input-InputBox"
                                placeholder="Input here"
                                value={userChatInput}
                                onChange={({ currentTarget: {value} }) => handleChatInputUpdate(value)}
                                onKeyPress={({ key: pressedKey}) => handleChatSubmit(pressedKey)}
                            />
                            
                            <button className="Chatbox-Input-Audible Button">
                                <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Audible' }} >
                                    <MdMic />
                                </IconContext.Provider>
                            </button>
                            {/* <button className="Chatbox-Input-Smiley Button">
                                <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Smiley' }} >
                                    <RiEmotionHappyLine />
                                </IconContext.Provider>
                            </button> */}
                            <button
                                className="Chatbox-Input-Send Button Button-Send"
                                onClick={() => handleChatSubmit('Enter')}
                                disabled={userChatInput === ''}
                            >
                                {/* <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Send' }} >
                                    <RiSendPlaneFill />
                                </IconContext.Provider> */}
                                <img
                                    src={Images.icon_send}
                                    alt="Send"
                                />
                            </button>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default Chatbox;