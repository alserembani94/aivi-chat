import React from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText,
} from '../../CustomComponent';
import {
    IoIosAdd,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

interface IncomeSourceItemProps {
    incomeSource: any;
    incomeNo: number;
    handleIncomeSourceItemUpdate: (incomeSourceItem: any) => void;
}

interface MonthlyIncomeProps {
    incomeSources: any[];
    handleIncomeSourceUpdate: (updatedIncomeSource: any[]) => void;
}

type InputOptionType = {
    name: string;
    label: string;
    value: string;
};

type slotInputItemType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    dropdownOption?: {
        allowInput: boolean,
        optionList: InputOptionType[],
    },
    remarks?: string[],
};

const incomeSourceFormat: slotInputItemType[] = [
    {
        inputName: 'industry',
        inputState: 'industry',
        inputType: 'dropdown',
        inputLabel: 'Industry',
        dropdownOption: {
            allowInput: true,
            optionList: [
                {
                    name: 'Food',
                    label: 'Food',
                    value: 'Food',
                },
                {
                    name: 'Hospitality',
                    label: 'Hospitality',
                    value: 'Hospitality',
                },
                {
                    name: 'Technology',
                    label: 'Technology',
                    value: 'Technology',
                },
                {
                    name: 'Tourism',
                    label: 'Tourism',
                    value: 'Tourism',
                },
                {
                    name: 'Healthcare',
                    label: 'Healthcare',
                    value: 'Healthcare',
                },
                {
                    name: 'Defense & Security',
                    label: 'Defense & Security',
                    value: 'Defense & Security',
                },
            ],
        },
        
    },
    {
        inputName: 'level',
        inputState: 'level',
        inputType: 'dropdown',
        inputLabel: 'Level',
        dropdownOption: {
            allowInput: false,
            optionList: [
                {
                    name: 'Non-executive',
                    label: 'Non-executive',
                    value: 'Non-executive',
                },
                {
                    name: 'Executive',
                    label: 'Executive',
                    value: 'Executive',
                },
                {
                    name: 'Management',
                    label: 'Management',
                    value: 'Management',
                },
            ],
        },
    },
    {
        inputName: 'jobTitle',
        inputState: 'jobTitle',
        inputType: 'text',
        inputLabel: 'Job Title',
    },
    {
        inputName: 'income',
        inputState: 'income',
        inputType: 'number',
        inputLabel: 'Income',
        remarks: ['currency'],
    },
];

const categoryToggleOptions = ['Primary', 'Secondary'];

const MonthlyIncomeItem: React.FC<IncomeSourceItemProps> = ({incomeSource, incomeNo, handleIncomeSourceItemUpdate}) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedIncomeSourceItem = {...incomeSource, [stateName]: value};
        handleIncomeSourceItemUpdate(updatedIncomeSourceItem);
    }

    return (
        <div className="MonthlyIncome-Container">
            <div className="MonthlyIncome-SectionHeader">
                <p className="MonthlyIncome-SectionTitle">Income {incomeNo}</p>
                <button className="MonthlyIncome-RemoveIncome">Remove</button>
            </div>
            <ToggleText
                optionList={categoryToggleOptions}
                selected={incomeSource.category}
                handleToggleUpdate={(value: string) => handleInputChange(value, 'category')}
            />
            {
                incomeSourceFormat.map((incomeSourceItem, index) => (
                    incomeSourceItem.inputType === 'dropdown'
                    ? (
                        <InputDropdown
                            slot={incomeSource}
                            inputProps={incomeSourceItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                    : (
                        <InputBox
                            value={incomeSource[incomeSourceItem.inputState]}
                            inputProps={incomeSourceItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                ))
            }
        </div>
    );
}

const MonthlyIncome: React.FC<MonthlyIncomeProps> = ({ incomeSources, handleIncomeSourceUpdate }) => {
    const updateIncomeSources = (incomeSourceItem: any, index: number) => {
        const updatedIncomeSource = [...incomeSources];
        updatedIncomeSource[index] = incomeSourceItem;
        handleIncomeSourceUpdate(updatedIncomeSource);
    };

    const addIncomeSource = () => {
        const emptyIncomeSource = {
            category: 'Secondary',
            industry: '',
            level: '',
            jobTitle: '',
            income: '',
        };
        handleIncomeSourceUpdate([...incomeSources, emptyIncomeSource])
    }

    return (
        <React.Fragment>
            <div className="MonthlyIncome-Wrapper">
                {
                    incomeSources.map((incomeSourceItem, index) => (
                        <MonthlyIncomeItem
                            incomeSource={incomeSourceItem}
                            incomeNo={index + 1}
                            handleIncomeSourceItemUpdate={(incomeSourceItem) => updateIncomeSources(incomeSourceItem, index)}
                            key={index}
                        />
                    ))
                }
                <div className="MonthlyIncome-Action">
                    <button className="MonthlyIncome-AddButton" onClick={addIncomeSource}>
                        <IconContext.Provider value={{ className: 'Icon Icon-AddIncome' }} >
                            <IoIosAdd />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MonthlyIncome;