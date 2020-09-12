import React from 'react';
import {
    MdAdd,
    MdMic,
} from 'react-icons/md';
import {
    // RiEmotionHappyLine,
    RiSendPlaneFill,
} from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import moment from 'moment';

interface ChatboxProps {
    userInput: string;
    updateInput: (userInput: string) => void;
    submitInput: () => void,
    conversation: {
        user?: string;
        timestamp?: string;
        message?: string;
    }[];
}

const Chatbox: React.FC<ChatboxProps> = ({userInput, updateInput, submitInput, conversation}) => {
    React.useEffect(() => {
        // Single Element only
        // const element = document.getElementById('Last-Dialog');
        // element?.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'});
        // element?.scrollIntoView(false);
        const elements: Element[] = Array.from(document.getElementsByClassName('Last-Dialog'));
        elements.forEach(element => element.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'}));
    }, [conversation]);

    const handleUpdate = (text: string) => updateInput(text);
    const handleSubmit = (pressedKey: string) => pressedKey === 'Enter' && submitInput();

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
                                        </div>
                                        <p className="Dialog-Timestamp">{moment(conversationItem.timestamp).format('Do MMM YYYY h:mmA')}</p>
                                    </div>
                                ))
                            }
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
                                value={userInput}
                                onChange={({ currentTarget: {value} }) => handleUpdate(value)}
                                onKeyPress={({ key: pressedKey}) => handleSubmit(pressedKey)}
                            /> */}
                            <input
                                className="Chatbox-Input-InputBox"
                                placeholder="Input here"
                                value={userInput}
                                onChange={({ currentTarget: {value} }) => handleUpdate(value)}
                                onKeyPress={({ key: pressedKey}) => handleSubmit(pressedKey)}
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
                                onClick={() => handleSubmit('Enter')}
                                disabled={userInput === ''}
                            >
                                <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Send' }} >
                                    <RiSendPlaneFill />
                                </IconContext.Provider>
                            </button>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default Chatbox;