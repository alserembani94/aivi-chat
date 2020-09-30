import React, { FC } from 'react';

interface ToggleTextProps {
    optionList: string[];
    selected: string;
    handleToggleUpdate: (value: string) => void;
}

const ToggleText: FC<ToggleTextProps> = ({optionList, selected, handleToggleUpdate}) => {
    const handleToggleChange = (value: string) => {
        handleToggleUpdate(value);
    };

    return (
        <div className="ToggleText-Container">
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