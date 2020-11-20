import React, { FC } from 'react';

interface ToggleTextProps {
    optionList: string[];
    selected: string;
    handleToggleUpdate: (value: string) => void;
    label?: string;
}

const ToggleText: FC<ToggleTextProps> = ({ label, optionList, selected, handleToggleUpdate }) => {
    const handleToggleChange = (value: string) => {
        handleToggleUpdate(value);
    };

    return (
        <div className="ToggleText-Container">
            { label && <p className="ToggleText-Label">{label}</p>}
            <ul>
                {
                    optionList.map((optionItem, index) => (
                        <li
                            key={index}
                            onClick={() => handleToggleChange(optionItem)}
                            data-active={optionItem === selected}
                        >{optionItem}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ToggleText;