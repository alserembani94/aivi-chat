import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText,
} from '../../CustomComponent';

interface OtherDetailsProps {
    otherDetails: any;
    handleOtherDetailsUpdate: (updatedOtherDetails: any) => void;
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

const otherDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'loanAccount',
        inputState: 'loanAccount',
        inputType: 'text',
        inputLabel: 'Loan Account',
    }
];

const billingDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'lotNumber',
        inputState: 'lotNumber',
        inputType: 'text',
        inputLabel: 'lotNumber',
    },
    {
        inputName: 'address',
        inputState: 'address',
        inputType: 'text',
        inputLabel: 'Address',
    },
    {
        inputName: 'city',
        inputState: 'city',
        inputType: 'text',
        inputLabel: 'City',
        inputClass: 'col-md-7',
    },
    {
        inputName: 'postcode',
        inputState: 'postcode',
        inputType: 'number',
        inputLabel: 'Postcode',
        inputClass: 'col-md-5',
    },
    {
        inputName: 'state',
        inputState: 'state',
        inputType: 'text',
        inputLabel: 'State',
    },
];


const relativesBankToggleOptions = ['Yes', 'No'];

const OtherDetails: FC<OtherDetailsProps> = ({ otherDetails, handleOtherDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedOtherDetailsItem = {...otherDetails, [stateName]: value};
        handleOtherDetailsUpdate(updatedOtherDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {
                        otherDetailsFormat.map((otherDetailsItem, index) => (
                            otherDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={otherDetails}
                                    inputProps={otherDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={otherDetails[otherDetailsItem.inputState]}
                                    inputProps={otherDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Billing Address</b></p>
                    </div>
                    {
                        billingDetailsFormat.map((billingDetailsItem, index) => (
                            billingDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={otherDetails}
                                    inputProps={billingDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={otherDetails[billingDetailsItem.inputState]}
                                    inputProps={billingDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Do you have relatives working in the bank?</b></p>
                        <ToggleText
                            optionList={relativesBankToggleOptions}
                            selected={otherDetails.relativeInBank}
                            handleToggleUpdate={(value: string) => handleInputChange(value, 'relativesInBank')}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OtherDetails;