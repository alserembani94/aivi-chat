import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText,
} from '../../CustomComponent';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import {
    IoIosAdd,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

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

const incomeDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'industry',
        inputState: 'industry',
        inputType: 'dropdown',
        inputLabel: 'Industry',
    },
    {
        inputName: 'level',
        inputState: 'level',
        inputType: 'dropdown',
        inputLabel: 'Level',
    },
    {
        inputName: 'jobTitle',
        inputState: 'jobTitle',
        inputType: 'text',
        inputLabel: 'Job Title',
    },
    {
        inputName: 'income',
        inputState: 'income',
        inputType: 'text',
        inputLabel: 'Income',
        remarks: ['currency'],
    },
];

const incomeToggleOptions = ['Primary', 'Secondary'];

const OtherDetails: FC<FinancialReferenceDetailsProps> = ({ financialReferenceDetails, handleFinancialReferenceDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedFinancialReferenceDetailsItem = {...financialReferenceDetails, [stateName]: value};
        handleFinancialReferenceDetailsUpdate(updatedFinancialReferenceDetailsItem);
    }

    return (
        <React.Fragment>
            <div className="FinancialReference container-fluid">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Nav variant="pills">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Monthly Debt</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Additional Monthly Income</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="row mt-5">
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
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className="row mt-5">
                                <div className="col-12">
                                    <p><b>Income 1</b></p>
                                    <ToggleText
                                        optionList={incomeToggleOptions}
                                        selected={financialReferenceDetails.incomeOptions ? incomeToggleOptions[1] : incomeToggleOptions[0] }
                                        handleToggleUpdate={(value: string) => handleInputChange(value, 'incomeOptions')}
                                    />
                                </div>
                                {
                                    incomeDetailsFormat.map((incomeDetailsItem, index) => (
                                        incomeDetailsItem.inputType === 'dropdown'
                                        ? (
                                            <InputDropdown
                                                slot={financialReferenceDetails}
                                                inputProps={incomeDetailsItem}
                                                handleInputChange={handleInputChange}
                                                key={index}
                                            />
                                        )
                                        : (
                                            <InputBox
                                                value={financialReferenceDetails[incomeDetailsItem.inputState]}
                                                inputProps={incomeDetailsItem}
                                                handleInputChange={handleInputChange}
                                                key={index}
                                            />
                                        )
                                    ))
                                }
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                <div className="row">
                    <div className="FinancialReference-AddRef">
                        <button
                            className="FinancialReference-AddRef-Button"
                        >
                            <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Add' }} >
                                <IoIosAdd />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OtherDetails;