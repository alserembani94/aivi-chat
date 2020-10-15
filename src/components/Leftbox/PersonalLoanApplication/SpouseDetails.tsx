import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText,
} from '../../CustomComponent';

interface SpouseDetailsProps {
    spouseDetails: any;
    handleSpouseDetailsUpdate: (updatedSpouseDetails: any) => void;
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

const maritalDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'maritalStatus',
        inputState: 'maritalStatus',
        inputType: 'dropdown',
        inputLabel: 'Marital Status',
        inputClass: 'col-md-6',
    },
    {
        inputName: 'numberOfChildren',
        inputState: 'numberOfChildren',
        inputType: 'number',
        inputLabel: 'Number Of Children',
        inputClass: 'col-md-6',
    },
    {
        inputName: 'numberOfDependants',
        inputState: 'numberOfDependants',
        inputType: 'number',
        inputLabel: 'Number Of Dependants',
    },
    {
        inputName: 'numberOfSchoolChildren',
        inputState: 'numberOfSchoolChildren',
        inputType: 'number',
        inputLabel: 'Number of School Children',
    },
];

const spouseDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'name',
        inputState: 'name',
        inputType: 'text',
        inputLabel: 'Name',
    },
    {
        inputName: 'phoneNumber',
        inputState: 'phoneNumber',
        inputType: 'text',
        inputLabel: 'Phone Number',
    },
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email',
    },
    {
        inputName: 'dateOfBirth',
        inputState: 'dateOfBirth',
        inputType: 'string',
        inputLabel: 'Date of Birth',
    },
    {
        inputName: 'ethnicity',
        inputState: 'ethnicity',
        inputType: 'dropdown',
        inputLabel: 'Ethnicity',
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
        inputType: 'text',
        inputLabel: 'IC Number',
    },
    {
        inputName: 'passport',
        inputState: 'passport',
        inputType: 'text',
        inputLabel: 'Passport',
    },
];

const spouseEmploymentDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'employerName',
        inputState: 'employerName',
        inputType: 'text',
        inputLabel: 'Employer Name',
    },
    {
        inputName: 'businessClassification',
        inputState: 'businessClassification',
        inputType: 'text',
        inputLabel: 'Business Classification',
    },
    {
        inputName: 'sector',
        inputState: 'sector',
        inputType: 'dropdown',
        inputLabel: 'Sector',
    },
    {
        inputName: 'position',
        inputState: 'position',
        inputType: 'text',
        inputLabel: 'Position',
    },
    {
        inputName: 'employmentType',
        inputState: 'employmentType',
        inputType: 'dropdown',
        inputLabel: 'Employment Type',
    },
    {
        inputName: 'incomeType',
        inputState: 'incomeType',
        inputType: 'dropdown',
        inputLabel: 'Income Type',
    },
    {
        inputName: 'employmentLength',
        inputState: 'employmentLength',
        inputType: 'text',
        inputLabel: 'Employment Length',
    },
];

const spouseWorkAddress: slotInputItemType[] = [
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
    {
        inputName: 'homeNumber',
        inputState: 'homeNumber',
        inputType: 'text',
        inputLabel: 'Home Number',
    },
    {
        inputName: 'residency',
        inputState: 'residency',
        inputType: 'text',
        inputLabel: 'Residency',
    },
];

const spouseEmploymentToggleOptions = ['Yes', 'No'];

const SpouseDetails: FC<SpouseDetailsProps> = ({ spouseDetails, handleSpouseDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedSpouseDetailsItem = {...spouseDetails, [stateName]: value};
        handleSpouseDetailsUpdate(updatedSpouseDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {
                        maritalDetailsFormat.map((maritalDetailsItem, index) => (
                            maritalDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={spouseDetails}
                                    inputProps={maritalDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={spouseDetails[maritalDetailsItem.inputState]}
                                    inputProps={maritalDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Spouse Details</b></p>
                    </div>
                    {
                        spouseDetailsFormat.map((spouseDetailsItem, index) => (
                            spouseDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={spouseDetails}
                                    inputProps={spouseDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={spouseDetails[spouseDetailsItem.inputState]}
                                    inputProps={spouseDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Is your spouse currently employed?</b></p>
                        <ToggleText
                            optionList={spouseEmploymentToggleOptions}
                            selected={spouseDetails.spouseEmployment}
                            handleToggleUpdate={(value: string) => handleInputChange(value, 'spouseEmployment')}
                        />
                    </div>
                    <div className="col-12">
                        <p><b>Employment Details</b></p>
                    </div>
                    {
                        spouseEmploymentDetailsFormat.map((spouseEmploymentDetailsItem, index) => (
                            spouseEmploymentDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={spouseDetails}
                                    inputProps={spouseEmploymentDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={spouseDetails[spouseEmploymentDetailsItem.inputState]}
                                    inputProps={spouseEmploymentDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Spouse Work Address</b></p>
                    </div>
                    {
                        spouseWorkAddress.map((spouseWorkAddressItem, index) => (
                            spouseWorkAddressItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={spouseDetails}
                                    inputProps={spouseWorkAddressItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={spouseDetails[spouseWorkAddressItem.inputState]}
                                    inputProps={spouseWorkAddressItem}
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

export default SpouseDetails;