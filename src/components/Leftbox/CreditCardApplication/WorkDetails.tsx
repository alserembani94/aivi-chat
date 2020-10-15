import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';

interface WorkDetailsProps {
    workDetails: any;
    handleWorkDetailsUpdate: (updateWorkDetails: any) => void;
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
        inputType: 'text',
        inputLabel: 'Business Classification',
    },
    {
        inputName: 'sector',
        inputState: 'sector',
        inputType: 'dropdown',
        inputLabel: 'Sector',
        dropdownOption: {
            allowInput: false,
            optionList: [
                {
                    name: 'Executive',
                    label: 'Executive',
                    value: 'Executive'
                }
            ]
        }
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
        dropdownOption: {
            allowInput: false,
            optionList: [
                {
                    name: 'Permanent',
                    label: 'Permanent',
                    value: 'Permanent'
                }
            ]
        }
    },
    {
        inputName: 'incomeType',
        inputState: 'incomeType',
        inputType: 'dropdown',
        inputLabel: 'Income Type',
        dropdownOption: {
            allowInput: false,
            optionList: [
                {
                    name: 'Salaried',
                    label: 'Salaried',
                    value: 'Salaried'
                }
            ]
        }
    },
    {
        inputName: 'employmentLength',
        inputState: 'employmentLength',
        inputType: 'text',
        inputLabel: 'Employment Length',
    },
];

const workAddressFormat: slotInputItemType[] = [
    {
        inputName: 'workAddress',
        inputState: 'workAddress',
        inputType: 'text',
        inputLabel: 'Address',
    },
    {
        inputName: 'workCity',
        inputState: 'workCity',
        inputType: 'text',
        inputLabel: 'City',
        inputClass: 'col-md-7'
    },
    {
        inputName: 'workPostcode',
        inputState: 'workPostcode',
        inputType: 'number',
        inputLabel: 'Postcode',
        inputClass: 'col-md-5'
    },
    {
        inputName: 'workState',
        inputState: 'workState',
        inputType: 'text',
        inputLabel: 'State',
    },
];

const debtDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'monthlyDebt',
        inputState: 'monthlyDebt',
        inputType: 'number',
        inputLabel: 'Monthly Debt',
        remarks: ['currency'],
    },
    {
        inputName: 'retirementIncome',
        inputState: 'retirementIncome',
        inputType: 'number',
        inputLabel: 'Retirement Income',
        remarks: ['currency'],
    },
    {
        inputName: 'employmentTerms',
        inputState: 'employmentTerms',
        inputType: 'number',
        inputLabel: 'Employment Terms',
        remarks: ['currency'],
    },
];

const WorkDetails: FC<WorkDetailsProps> = ({ workDetails, handleWorkDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string ) => {
        const updatedWorkDetailsItem = {...workDetails, [stateName]: value};
        handleWorkDetailsUpdate(updatedWorkDetailsItem);
    };

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                        <p><b>Employer Details</b></p>
                    </div>
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
                        workAddressFormat.map((workAddressItems, index) => (
                            <InputBox
                                value={workDetails[workAddressItems.inputState]}
                                inputProps={workAddressItems}
                                handleInputChange={handleInputChange}
                                key={index}
                            />
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Debt and Income Details</b></p>
                    </div>
                    {
                        debtDetailsFormat.map((debtDetailsItems, index) => (
                            <InputBox
                                value={workDetails[debtDetailsItems.inputState]}
                                inputProps={debtDetailsItems}
                                handleInputChange={handleInputChange}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default WorkDetails;