import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText,
} from '../../CustomComponent';

interface PersonalDetailsProps {
    personalDetails: any;
    handlePersonalDetailsUpdate: (updatedPersonalDetails: any) => void;
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

const personalDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'salutation',
        inputState: 'salutation',
        inputType: 'text',
        inputLabel: 'Saluation',
        inputClass: 'col-md-3',
    },
    {
        inputName: 'nameOnCard',
        inputState: 'nameOnCard',
        inputType: 'text',
        inputLabel: 'Name On Card',
        inputClass: 'col-md-9',
    },
    {
        inputName: 'nationality',
        inputState: 'nationality',
        inputType: 'text',
        inputLabel: 'Nationality',
    },
    {
        inputName: 'icNumber',
        inputState: 'icNumber',
        inputType: 'number',
        inputLabel: 'IC Number',
    },
    {
        inputName: 'gender',
        inputState: 'gender',
        inputType: 'text',
        inputLabel: 'Gender',
    },
    {
        inputName: 'dateOfBirth',
        inputState: 'dateOfBirth',
        inputType: 'text',
        inputLabel: 'Date Of Birth',
    },
    {
        inputName: 'ethnicity',
        inputState: 'ethnicity',
        inputType: 'dropdown',
        inputLabel: 'Ethnicity',
    },
    {
        inputName: 'religion',
        inputState: 'religion',
        inputType: 'dropdown',
        inputLabel: 'Religion',
    },
    {
        inputName: 'educationLevel',
        inputState: 'educationLevel',
        inputType: 'dropdown',
        inputLabel: 'Education Level',
    },
    {
        inputName: 'loanPurpose',
        inputState: 'loanPurpose',
        inputType: 'dropdown',
        inputLabel: 'Loan Purpose',
    },
];

const residentialDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'prNumber',
        inputState: 'prNumber',
        inputType: 'number',
        inputLabel: 'PR Number',
    },
    {
        inputName: 'prCountry',
        inputState: 'prCountry',
        inputType: 'text',
        inputLabel: 'PR Country',
    },
    {
        inputName: 'passportNumber',
        inputState: 'passportNumber',
        inputType: 'text',
        inputLabel: 'Passport Number',
    }
];

const permanentResidenceToggleOptions = ['Yes', 'No'];

const PersonalDetails: FC<PersonalDetailsProps> = ({ personalDetails, handlePersonalDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedPersonalDetailsItem = {...personalDetails, [stateName]: value};
        handlePersonalDetailsUpdate(updatedPersonalDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {
                        personalDetailsFormat.map((personalDetailsItem, index) => (
                            personalDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={personalDetails}
                                    inputProps={personalDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={personalDetails[personalDetailsItem.inputState]}
                                    inputProps={personalDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Are you a permanent residence?</b></p>
                        <ToggleText
                            optionList={permanentResidenceToggleOptions}
                            selected={personalDetails.permanentResident}
                            handleToggleUpdate={(value: string) => handleInputChange(value, 'permanentResidence')}
                        />
                    </div>
                    {
                        residentialDetailsFormat.map((residentialDetailsItems, index) => (
                            <InputBox
                                value={personalDetails[residentialDetailsItems.inputState]}
                                inputProps={residentialDetailsItems}
                                handleInputChange={handleInputChange}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default PersonalDetails;