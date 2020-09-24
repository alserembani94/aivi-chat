import React from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

interface LoanDetailsProps {
    loanDetails: any;
    handleLoanDetailsUpdate: (updatedLoanDetails: any) => void;
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
};

const loanDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'loanAmount',
        inputState: 'loanAmount',
        inputType: 'number',
        inputLabel: 'Loan Amount',
        remarks: ['currency'],
    },
    {
        inputName: 'repaymentPeriod',
        inputState: 'repaymentPeriod',
        inputType: 'text',
        inputLabel: 'Repayment Period',
    },
];

const LoanDetails: React.FC<LoanDetailsProps> = ({ loanDetails, handleLoanDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedLoanDetailsItem = {...loanDetails, [stateName]: value};
        handleLoanDetailsUpdate(updatedLoanDetailsItem);
    }

    return (
        <React.Fragment>
            {
                loanDetailsFormat.map((loanDetailsItem, index) => (
                    loanDetailsItem.inputType === 'dropdown'
                    ? (
                        <InputDropdown
                            slot={loanDetails}
                            inputProps={loanDetailsItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                    : (
                        <InputBox
                            value={loanDetails[loanDetailsItem.inputState]}
                            inputProps={loanDetailsItem}
                            handleInputChange={handleInputChange}
                            key={index}
                        />
                    )
                ))
            }
        </React.Fragment>
    );
};

export default LoanDetails;