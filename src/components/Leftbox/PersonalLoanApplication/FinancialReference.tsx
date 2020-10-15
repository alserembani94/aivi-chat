import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText,
} from '../../CustomComponent';

interface FinancialReferenceDetailsProps {
    financialReferenceDetails: any;
    handleFinancialReferenceDetailsUpdate: (updatedFinancialReferenceDetails: any) => void;
};

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
    inputClass?: string
};

const monthlyDebtDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'bank',
        inputState: 'bank',
        inputType: 'text',
        inputLabel: 'Bank',
        inputClass: 'col-md-6'
    },
    {
        inputName: 'typeOfFinance',
        inputState: 'typeOfFinance',
        inputType: 'text',
        inputLabel: 'Type Of Finance',
        inputClass: 'col-md-6'
    },
    {
        inputName: 'financingAccount',
        inputState: 'financingAccount',
        inputType: 'text',
        inputLabel: 'Financing Account',
        remarks: ['currency'],
        inputClass: 'col-md-4'
    },
    {
        inputName: 'outstandingBalance',
        inputState: 'outstandingBalance',
        inputType: 'text',
        inputLabel: 'outstandingBalance',
        remarks: ['currency'],
        inputClass: 'col-md-4'
    },
    {
        inputName: 'monthlyPayment',
        inputState: 'monthlyPayment',
        inputType: 'text',
        inputLabel: 'Monthly Payment',
        remarks: ['currency'],
        inputClass: 'col-md-4'
    },
];

const OtherDetails: FC<FinancialReferenceDetailsProps> = ({ financialReferenceDetails, handleFinancialReferenceDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedFinancialReferenceDetailsItem = {...financialReferenceDetails, [stateName]: value};
        handleFinancialReferenceDetailsUpdate(updatedFinancialReferenceDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p><b>Monthly Debt</b></p>
                    </div>
                    {
                        monthlyDebtDetailsFormat.map((monthlyDebtDetailsItem, index) => (
                            monthlyDebtDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={financialReferenceDetails}
                                    inputProps={monthlyDebtDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={financialReferenceDetails[monthlyDebtDetailsItem.inputState]}
                                    inputProps={monthlyDebtDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default OtherDetails;