import React from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

type IncomeSourceType = {
    category: string,
    industry: string,
    level: string,
    jobTitle: string,
    income: string,
};

interface IncomeSourceItemProps {
    incomeSource: IncomeSourceType;
    incomeNo: number;
    handleIncomeSourceItemUpdate: (incomeSourceItem: IncomeSourceType) => void;
}

interface MonthlyIncomeProps {
    incomeSources: IncomeSourceType[];
    handleIncomeSourceUpdate: (updatedIncomeSource: IncomeSourceType[]) => void;
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
    optionList?: InputOptionType[];
};

const incomeSourceFormat: slotInputItemType[] = [
    // {
    //     inputName: 'transferFrom',
    //     inputState: 'transferFrom',
    //     inputType: 'dropdown',
    //     inputLabel: 'Transfer from',
    //     optionList: [
    //         {
    //             name: 'Hello',
    //             label: 'Hello',
    //             value: 'Hello',
    //         },
    //         {
    //             name: 'World',
    //             label: 'World',
    //             value: 'World',
    //         },
    //         {
    //             name: 'React',
    //             label: 'React',
    //             value: 'React',
    //         },
    //     ],
    // },
    {
        inputName: 'industry',
        inputState: 'industry',
        inputType: 'dropdown',
        inputLabel: 'Industry',
        optionList: [
            {
                name: 'Hello',
                label: 'Hello',
                value: 'Hello',
            },
            {
                name: 'World',
                label: 'World',
                value: 'World',
            },
            {
                name: 'React',
                label: 'React',
                value: 'React',
            },
        ],
    },
    {
        inputName: 'level',
        inputState: 'level',
        inputType: 'dropdown',
        inputLabel: 'Level',
        optionList: [
            {
                name: 'Hello',
                label: 'Hello',
                value: 'Hello',
            },
            {
                name: 'World',
                label: 'World',
                value: 'World',
            },
            {
                name: 'React',
                label: 'React',
                value: 'React',
            },
        ],
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
    },
];

const MonthlyIncomeItem: React.FC<IncomeSourceItemProps> = ({incomeSource, incomeNo, handleIncomeSourceItemUpdate}) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedIncomeSourceItem = {...incomeSource, [stateName]: value};
        handleIncomeSourceItemUpdate(updatedIncomeSourceItem);
    }

    return (
        <div className="MonthlyIncome-Container">
            <p>Income {incomeNo}</p>
            {
                incomeSourceFormat.map((incomeSourceItem, index) => (
                    incomeSourceItem.inputType === 'dropdown'
                    ? (
                        <InputDropdown
                            slot={incomeSource}
                            inputProps={incomeSourceItem}
                            handleInputChange={handleInputChange}
                            allowInput={true}
                            key={index}
                        />
                    )
                    : (
                        <InputBox
                            slot={incomeSource}
                            inputProps={incomeSourceItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                ))
            }
            {/* <InputBox
                slot={incomeSource}
                inputProps={incomeSourceFormat[0]}

            /> */}
        </div>
    );
}

const MonthlyIncome: React.FC<MonthlyIncomeProps> = ({ incomeSources, handleIncomeSourceUpdate }) => {
    const updateIncomeSources = (incomeSourceItem: IncomeSourceType, index: number) => {
        const updatedIncomeSource = [...incomeSources];
        updatedIncomeSource[index] = incomeSourceItem;
        handleIncomeSourceUpdate(updatedIncomeSource);
    };

    const addIncomeSource = () => {
        const emptyIncomeSource = {
            category: '',
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
                <button onClick={addIncomeSource}>Add</button>
            </div>
        </React.Fragment>
    );
};

export default MonthlyIncome;