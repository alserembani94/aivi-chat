import React, { FC } from 'react';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

type optionType = {
    name: string,
    label: string,
};

interface CheckboxProps {
    name: string;
    label?: string;
    updateSelected: (value: string, isActive: boolean) => void;
    rows?: number;
    active: boolean;
    children?: any;
}

interface MultipleCheckboxProps {
    optionList: optionType[];
    selectedOptions: string[];
    updateSelected: (selectedList: string[]) => void;
    maxOption?: number;
    rows?: number;
    children?: any;
}

const Checkbox: FC<CheckboxProps> = ({name, label, updateSelected, rows, active, children}) => {
    const handleUpdate = (value: string) => {
        updateSelected(value, active);
    }

    return (
        <React.Fragment>
            <div
                className="Checkbox-Container"
                data-rows={rows?.toString()}
                data-active={active}
                onClick={() => handleUpdate(name)}
            >
                <div className="Checkbox-Indicator">
                    <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Check' }} >
                        <IoIosCheckmark />
                    </IconContext.Provider>
                </div>
                { children ? children : <p>{label}</p>}
            </div>
        </React.Fragment>
    );
};

const MultipleCheckbox: FC<MultipleCheckboxProps> = ({optionList, selectedOptions, updateSelected, maxOption = Infinity, rows = 1}) => {

    const handleArrayUpdate = (value: string, isActive: boolean) => {
        // Deselect Option
        if (isActive) {
            const removedOptions = selectedOptions.filter(selected => selected !== value);
            updateSelected(removedOptions);
        }
        // Select Option
        else {
            if (selectedOptions.length < maxOption) updateSelected([...selectedOptions, value]);
        }
    }

    return (
        <React.Fragment>
            <div className="Checkbox-Multiple">
            {
                optionList.map((optionItem, index) => (
                    <Checkbox
                        name={optionItem.name}
                        label={optionItem.label}
                        updateSelected={handleArrayUpdate}
                        rows={rows}
                        active={selectedOptions.some(selected => selected === optionItem.name)}
                        key={index}
                    />
                ))
            }
            </div>
            {
                maxOption !== Infinity && <p className="Checkbox-Limit">Max: {maxOption}</p>
            }
        </React.Fragment>
    );
};

export {
    Checkbox,
    MultipleCheckbox,
};