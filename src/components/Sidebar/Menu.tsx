import React from 'react';
import {
    useHistory,
} from 'react-router-dom';
import {
    Images,
} from '../../utils/Images';

interface MenuProps {
    visible: boolean;
    toggleVisibility: () => void;
}

const menuNav = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/smart-assistant/',
        label: 'Smart Assistant',
    },
    {
        path: '/results/',
        label: 'Result',
    },
];

const Menu: React.FC<MenuProps> = ({ visible, toggleVisibility }) => {
    const history = useHistory();

    const handleNavigation = (route: string) => {
        history.push(route);
        toggleVisibility();
    };

    return (
        <React.Fragment>
            <section className="Menu-Wrapper" data-visible={visible} onClick={toggleVisibility}>
            </section>
            <section className="Menu-Container" data-visible={visible}>
                <button
                    className="Menu-Logo"
                    onClick={() => handleNavigation('/')}
                >
                    <img
                        src={Images.logo_AIVI}
                        alt="AIVI"
                    />
                </button>
                <div className="Menu-Drawer">
                    {/* <button className="Menu-Button">
                        Hello
                    </button> */}
                    {
                        menuNav.map((menuItem, index) => (
                            <button
                                key={index}
                                className="Menu-Button"
                                onClick={() => handleNavigation(menuItem.path)}
                            >{menuItem.label}</button>
                        ))
                    }
                </div>
            </section>
        </React.Fragment>
    );
};

export default Menu;