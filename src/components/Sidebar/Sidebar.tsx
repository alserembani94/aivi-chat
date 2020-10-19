import React, { useState } from 'react';
import {
    MdMenu,
} from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import Menu from './Menu';


const Sidebar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    const handleMenuVisibility = () => {
        setToggleMenu(prevState => { return !prevState });
    };

    return (
        <React.Fragment>
            <section className="AIVI-Sidebar">
                <button className="Button Button-Hamburger" onClick={handleMenuVisibility}>
                    <IconContext.Provider value={{ className: 'Icon-Rotate Icon-Light Icon-Hamburger' }} >
                        <MdMenu />
                    </IconContext.Provider>
                </button>
            </section>
            <Menu
                visible={toggleMenu}
                toggleVisibility={handleMenuVisibility}
            />
        </React.Fragment>
    );
};

export default Sidebar;