import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

interface ContactDetailsProps {
    contactDetails: any;
    handleContactDetailsUpdate: (updatedContactDetails: any) => void;
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

const contactDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'residentialStatus',
        inputState: 'residentialStatus',
        inputType: 'dropdown',
        inputLabel: 'Residential Status',
        inputClass: 'col-md-7',
    },
    {
        inputName: 'residentialLength',
        inputState: 'residentialLength',
        inputType: 'number',
        inputLabel: 'Residential Length',
        inputClass: 'col-md-5',
    },
    {
        inputName: 'homePhone',
        inputState: 'homePhone',
        inputType: 'text',
        inputLabel: 'Home Phone',
    },
    {
        inputName: 'mobilePhone',
        inputState: 'mobilePhone',
        inputType: 'text',
        inputLabel: 'Mobile Phone',
    },
    {
        inputName: 'officePhone',
        inputState: 'officePhone',
        inputType: 'text',
        inputLabel: 'Office Phone',
    },
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email',
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

const ResidentialContact: FC<ContactDetailsProps> = ({ contactDetails, handleContactDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedContactDetailsItem = {...contactDetails, [stateName]: value};
        handleContactDetailsUpdate(updatedContactDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {
                        contactDetailsFormat.map((contactDetailsItem, index) => (
                            contactDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={contactDetails}
                                    inputProps={contactDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={contactDetails[contactDetailsItem.inputState]}
                                    inputProps={contactDetailsItem}
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

export default ResidentialContact;