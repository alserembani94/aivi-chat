import React, { FC, useEffect } from 'react';
import { Chatbox } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { converseWithLex, initiateConversation } from '../../store/reducers/conversation';
import { useHistory } from 'react-router-dom';

// Construct types for component props
interface MainMenuProps {
    
}

const MainMenu: FC<MainMenuProps> = () => {
    const history = useHistory();

    const conversations = useSelector((state: any) => state.conversations);
    const auth = useSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const updateConversation = (newMessage: string) => {
        dispatch(converseWithLex(newMessage));
    };

    useEffect(() => {
        (auth.user.attributes?.email || auth.tempData.email)
        ? dispatch(initiateConversation('Hello'))
        : history.push('/register');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        [
            'AIVIRequestCard',
            'AIVIRequestLoan',
        ].some(currentIntent => currentIntent === conversations.currentIntent) && history.push('/smart-assistant');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversations]);

    return (
        <React.Fragment>
            <div className="MainMenu-Screen">
                <Chatbox
                    conversation={conversations.list}
                    updateConversation={updateConversation}
                    disableInput={conversations.list[conversations.list.length - 1]?.actions?.actionType === 'multipleOption'}
                />
            </div>
        </React.Fragment>
    );
};

export default MainMenu;