import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

interface financialReferenceProps {
    referenceDetails: any;
    handleReferenceUpdate: (updatedReference: any) => void;
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

const financialReferenceFormat: slotInputItemType[] = [
    {
        inputName: 'Bank',
        inputState: 'Bank',
        inputType: 'text',
        inputLabel: 'Bank',
        inputClass: 'col-6',
    },
    {
        inputName: 'financeType',
        inputState: 'financeType',
        inputType: 'text',
        inputLabel: 'Type of Finance',
        inputClass: 'col-6',
    },
    {
        inputName: 'financingAmount',
        inputState: 'financingAmount',
        inputType: 'text',
        inputLabel: 'Financing Amount',
        remarks: ['currency'],
        inputClass: 'col-4',
    },
    {
        inputName: 'outstandingBalance',
        inputState: 'outstandingBalance',
        inputType: 'text',
        inputLabel: 'Outstanding Balance',
        remarks: ['currency'],
        inputClass: 'col-4'
    },
    {
        inputName: 'monthlyPayment',
        inputState: 'monthlyPayment',
        inputType: 'text',
        inputLabel: 'Monthly Payment',
        remarks: ['currency'],
        inputClass: 'col-4'
    },
];

const FinancialReference: FC<financialReferenceProps> = ({ referenceDetails, handleReferenceUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedFinancialReferenceItem = {...referenceDetails, [stateName]: value};
        handleReferenceUpdate(updatedFinancialReferenceItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <p>Monthly Debt</p>
                <div className="row">
                {
                financialReferenceFormat.map((financialReferenceItem, index) => (
                    financialReferenceItem.inputType === 'dropdown'
                    ? (
                        <InputDropdown
                            slot={referenceDetails}
                            inputProps={financialReferenceItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                    : (
                        <InputBox
                            value={referenceDetails[financialReferenceItem.inputState]}
                            inputProps={financialReferenceItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                ))
            }
                </div>
            </div>
        </React.Fragment>
    );
}

export default FinancialReference;