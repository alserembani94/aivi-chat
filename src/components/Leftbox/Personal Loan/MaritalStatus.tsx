import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';
import MonthlyIncome from '../CreditCard/MonthlyIncome';

interface MaritalStatusProps {
    maritalInfo: any;
    updateMaritalInfo: (updatedMaritalStatus: any) => void;
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

const MaritalStatus: FC<MaritalStatusProps> = ({ maritalInfo, updateMaritalInfo }) => {
    const handleMaritalInfoUpdate = (value: string, stateName: string) => {
        if (stateName === 'maritalStatus') {
            if (value === 'Married') {
                const updatedMaritalInfo: any = {
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

    const handleIncomeInfoUpdate = (updatedIncomeInfo: any) => {
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
                            value={maritalInfo}
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