import React from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';
import MonthlyIncome from '../Credit Card/MonthlyIncome';

type IncomeSourceType = {
    category: string,
    industry: string,
    level: string,
    jobTitle: string,
    income: string,
}[];

type MaritalInfoType = {
    maritalStatus: string,
    spouseName?: string,
    incomeInfo?: IncomeSourceType;
}

interface MaritalStatusProps {
    maritalInfo: MaritalInfoType;
    updateMaritalInfo: (updatedMaritalStatus: MaritalInfoType) => void;
}

const maritalInput = {
    inputName: 'maritalStatus',
    inputState: 'maritalStatus',
    inputType: 'dropdown',
    inputLabel: 'Marital Status',
    dropdownOption: {
        allowInput: false,
        optionList: [
            {
                name: 'Single',
                label: 'Single',
                value: 'Single',
            },
            {
                name: 'Married',
                label: 'Married',
                value: 'Married',
            },
            {
                name: 'Divorced',
                label: 'Divorced',
                value: 'Divorced',
            },
            {
                name: 'Widowed',
                label: 'Widowed',
                value: 'Widowed',
            },
        ],
    },
};

const spouseInput = {
    inputName: 'spouseName',
    inputState: 'spouseName',
    inputType: 'text',
    inputLabel: 'Name of Spouse',
};

const MaritalStatus: React.FC<MaritalStatusProps> = ({ maritalInfo, updateMaritalInfo }) => {
    const handleMaritalInfoUpdate = (value: string, stateName: string) => {
        if (stateName === 'maritalStatus') {
            if (value === 'Married') {
                const updatedMaritalInfo: MaritalInfoType = {
                    maritalStatus: 'Married',
                    spouseName: '',
                    incomeInfo: [
                        {
                            category: 'Primary',
                            industry: '',
                            level: '',
                            jobTitle: '',
                            income: '',
                        },
                    ],
                }
                updateMaritalInfo(updatedMaritalInfo);
            }
            else updateMaritalInfo({ maritalStatus: value });
        }
        else return updateMaritalInfo({...maritalInfo, [stateName]: value});
    }

    const handleIncomeInfoUpdate = (updatedIncomeInfo: IncomeSourceType) => {
        updateMaritalInfo({...maritalInfo, incomeInfo: updatedIncomeInfo});
    }

    return (
        <React.Fragment>
            <InputDropdown
                slot={maritalInfo}
                inputProps={maritalInput}
                handleInputChange={handleMaritalInfoUpdate}
            />
            {
                maritalInfo.incomeInfo && maritalInfo.maritalStatus === 'Married' && (
                    <>
                        <InputBox
                            slot={maritalInfo}
                            inputProps={spouseInput}
                            handleInputChange={handleMaritalInfoUpdate}
                        />
                        <MonthlyIncome
                            incomeSources={maritalInfo.incomeInfo}
                            handleIncomeSourceUpdate={handleIncomeInfoUpdate}
                        />
                    </>
                )
            }
        </React.Fragment>
    );
};

export default MaritalStatus;