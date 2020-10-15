import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

interface WorkDetailsProps {
    workDetails: any;
    handleWorkDetailsUpdate: (updatedWorkDetails: any) => void;
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

const workDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'employerName',
        inputState: 'employerName',
        inputType: 'text',
        inputLabel: 'Employer Name',
    },
    {
        inputName: 'businessClassification',
        inputState: 'businessClassification',
        inputType: 'number',
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
        inputLabel: 'incomeType',
    },
    {
        inputName: 'employmentLength',
        inputState: 'employmentLength',
        inputType: 'text',
        inputLabel: 'Employment Length',
    },
];

const workAddressDetailsFormat: slotInputItemType[] = [
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
        inputClass: 'col-7',
    },
    {
        inputName: 'postcode',
        inputState: 'postcode',
        inputType: 'number',
        inputLabel: 'Postcode',
        inputClass: 'col-5',
    },
    {
        inputName: 'state',
        inputState: 'state',
        inputType: 'text',
        inputLabel: 'State',
    },
];

const prevWorkDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'prevEmployerName',
        inputState: 'prevEmployerName',
        inputType: 'text',
        inputLabel: 'Employer Name',
    },
    {
        inputName: 'prevEmployerLength',
        inputState: 'prevEmployerLength',
        inputType: 'text',
        inputLabel: 'Employer Length',
    },
    {
        inputName: 'prevEmployerPhone',
        inputState: 'prevEmployerPhone',
        inputType: 'text',
        inputLabel: 'Phone',
    },
    {
        inputName: 'prevSector',
        inputState: 'prevSector',
        inputType: 'dropdown',
        inputLabel: 'Sector',
    },
    {
        inputName: 'prevPosition',
        inputState: 'prevPosition',
        inputType: 'text',
        inputLabel: 'Position',
    },
];

const prevWorkAddressDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'prevAddress',
        inputState: 'prevAddress',
        inputType: 'text',
        inputLabel: 'Address',
    },
    {
        inputName: 'prevCity',
        inputState: 'prevCity',
        inputType: 'text',
        inputLabel: 'City',
        inputClass: 'col-7',
    },
    {
        inputName: 'prevPostcode',
        inputState: 'prevPostcode',
        inputType: 'number',
        inputLabel: 'Postcode',
        inputClass: 'col-5',
    },
    {
        inputName: 'prevState',
        inputState: 'prevState',
        inputType: 'text',
        inputLabel: 'State',
    },
];

const ResidentialContact: FC<WorkDetailsProps> = ({ workDetails, handleWorkDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedContactDetailsItem = {...workDetails, [stateName]: value};
        handleWorkDetailsUpdate(updatedContactDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    {
                        workDetailsFormat.map((workDetailsItem, index) => (
                            workDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={workDetails}
                                    inputProps={workDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={workDetails[workDetailsItem.inputState]}
                                    inputProps={workDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Work Address</b></p>
                    </div>
                    {
                        workAddressDetailsFormat.map((workAddressDetailsItem, index) => (
                            workAddressDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={workDetails}
                                    inputProps={workAddressDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={workDetails[workAddressDetailsItem.inputState]}
                                    inputProps={workAddressDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Previous Employer Detail</b></p>
                    </div>
                    {
                        prevWorkDetailsFormat.map((prevWorkDetailsItem, index) => (
                            prevWorkDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={workDetails}
                                    inputProps={prevWorkDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={workDetails[prevWorkDetailsItem.inputState]}
                                    inputProps={prevWorkDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Previous Employer Work Address</b></p>
                    </div>
                    {
                        prevWorkAddressDetailsFormat.map((prevWorkAddressDetailsItem, index) => (
                            prevWorkAddressDetailsItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={workDetails}
                                    inputProps={prevWorkAddressDetailsItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={workDetails[prevWorkAddressDetailsItem.inputState]}
                                    inputProps={prevWorkAddressDetailsItem}
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