import React from 'react';
import { Chatbox } from '../../components';

// Construct types for component props
interface MainMenuProps {
    
}

const MainMenu: React.FC<MainMenuProps> = () => {
    return (
        <React.Fragment>
            <div className="MainMenu-Screen">
                <Chatbox />
            </div>
        </React.Fragment>
    );
};

export default MainMenu;