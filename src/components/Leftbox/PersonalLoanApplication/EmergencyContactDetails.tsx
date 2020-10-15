import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

interface EmergencyContactDetailsProps {
    emergencyContactDetails: any;
    handleEmergencyContactDetailsUpdate: (updatedEmergencyContactDetails: any) => void;
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

const emergencyPersonalDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'emergencyContact',
        inputState: 'emergencyContact',
        inputType: 'text',
        inputLabel: 'Emergency Contact Person',
    },
    {
        inputName: 'phoneNumber',
        inputState: 'phoneNumber',
        inputType: 'number',
        inputLabel: 'Phone Number',
    },
    {
        inputName: 'relationship',
        inputState: 'relationship',
        inputType: 'text',
        inputLabel: 'Relationship',
    },
];

const emergencyEmployerDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'emergencyCompany',
        inputState: 'emergencyCompany',
        inputType: 'text',
        inputLabel: 'Emergency Company',
    },
    {
        inputName: 'emergencyEmployer',
        inputState: 'emergencyEmployer',
        inputType: 'text',
        inputLabel: 'Emergency Contact',
    },
];

const emergencyEmployerAddressFormat: slotInputItemType[] = [
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
        inputClass: 'col-md-7'
    },
    {
        inputName: 'postcode',
        inputState: 'postcode',
        inputType: 'text',
        inputLabel: 'Postcode',
        inputClass: 'col-md-5'
    },
    {
        inputName: 'state',
        inputState: 'state',
        inputType: 'text',
        inputLabel: 'State',
    },
];

const EmergencyContactDetails: FC<EmergencyContactDetailsProps> = ({ emergencyContactDetails, handleEmergencyContactDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedEmergencyContactDetailsItem = {...emergencyContactDetails, [stateName]: value};
        handleEmergencyContactDetailsUpdate(updatedEmergencyContactDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p><b>Personal</b></p>
                    </div>
                    {
                        emergencyPersonalDetailsFormat.map((emergencyContactDetailsItem, index) => (
                            emergencyContactDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={emergencyContactDetails}
                                    inputProps={emergencyContactDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={emergencyContactDetails[emergencyContactDetailsItem.inputState]}
                                    inputProps={emergencyContactDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Employer</b></p>
                    </div>
                    {
                        emergencyEmployerDetailsFormat.map((emergencyEmployerDetailsItem, index) => (
                            emergencyEmployerDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={emergencyContactDetails}
                                    inputProps={emergencyEmployerDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={emergencyContactDetails[emergencyEmployerDetailsItem.inputState]}
                                    inputProps={emergencyEmployerDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Emergency Address</b></p>
                    </div>
                    {
                        emergencyEmployerAddressFormat.map((emergencyEmployerAddressItem, index) => (
                            emergencyEmployerAddressItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={emergencyContactDetails}
                                    inputProps={emergencyEmployerAddressItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={emergencyContactDetails[emergencyEmployerAddressItem.inputState]}
                                    inputProps={emergencyEmployerAddressItem}
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

export default EmergencyContactDetails;