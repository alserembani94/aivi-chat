import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
} from '../../CustomComponent';
import {
    IoIosArrowRoundForward
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

type slotInputItemType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
};

type slotType = {
    [transferFrom: string]: string,
    name: string,
    phone: string,
    email: string,
    amount: string,
};

type InputOptionType = {
    name: string;
    label: string;
    value: string;
};

interface BalanceTransferProps {
    slot: slotType;
    updateSubmitted: () => void;
    handleInputChange: (value: string, stateName: string) => void;
}

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    dropdownOption?: {
        allowInput: boolean;
        optionList: InputOptionType[];
    },
    remarks?: string[],
};

const dualDropdown: slotInputType[] = [
    {
        inputName: 'transferFrom',
        inputState: 'transferFrom',
        inputType: 'dropdown',
        inputLabel: 'Transfer from',
        dropdownOption: {
            allowInput: true,
            optionList: [
                {
                    name: 'Hello',
                    label: 'Hello',
                    value: 'Hello',
                },
                {
                    name: 'World',
                    label: 'World',
                    value: 'World',
                },
                {
                    name: 'React',
                    label: 'React',
                    value: 'React',
                },
            ],
        },
    },
    {
        inputName: 'transferTo',
        inputState: 'transferTo',
        inputType: 'dropdown',
        inputLabel: 'Transfer to',
        dropdownOption: {
            allowInput: true,
            optionList: [
                {
                    name: 'Hello',
                    label: 'Hello',
                    value: 'Hello',
                },
                {
                    name: 'World',
                    label: 'World',
                    value: 'World',
                },
                {
                    name: 'React',
                    label: 'React',
                    value: 'React',
                },
            ],
        },
    },
];

const slotInput: slotInputType[] = [
    {
        inputName: 'name',
        inputState: 'name',
        inputType: 'text',
        inputLabel: 'Name',
    },
    {
        inputName: 'phone',
        inputState: 'phone',
        inputType: 'text',
        inputLabel: 'Phone',
    },
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email',
    },
    {
        inputName: 'amount',
        inputState: 'amount',
        inputType: 'number',
        inputLabel: 'Amount',
        remarks: ['amount'],
    },
];

const BalanceTransferForm: FC<BalanceTransferProps> = ({slot, updateSubmitted, handleInputChange}) => {
    return (
        <React.Fragment>
            <section className="AIVIForm-Content">
                <p className="AIVIForm-Title">
                    Application Status: In Progress
                </p>
                {/* <p className="AIVIForm-Description">
                    You can view your progress so far here. Feel free to edit the information by clicking on the field.
                </p> */}
                <div className="AIVIForm-Details">
                    <div className="BalanceTransfer-DualDropdown-Wrapper">
                        <div className="BalanceTransfer-DualDropdown-Item">
                            <InputDropdown
                                slot={slot}
                                inputProps={dualDropdown[0]}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                        <div className="BalanceTransfer-DualDropdown-Arrow">
                            <IconContext.Provider value={{ className: 'Icon Icon-TransferTo' }} >
                                <IoIosArrowRoundForward />
                            </IconContext.Provider>
                        </div>
                        <div className="BalanceTransfer-DualDropdown-Item">
                            <InputDropdown
                                slot={slot}
                                inputProps={dualDropdown[1]}
                                handleInputChange={handleInputChange}
                            />
                        </div>
                    </div>
                    {
                        slotInput.map((slotInputItem: slotInputItemType, index: number) => (
                            slotInputItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={slot}
                                    inputProps={slotInputItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={slot[slotInputItem.inputState]}
                                    inputProps={slotInputItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
            </section>
            <section className="AIVIForm-Button">
                <button
                    className="Button Button-Full"
                    onClick={updateSubmitted}
                    // disabled={[slot.transferFrom, slot.name, slot.phone, slot.email, slot.amount].some(check => check === '')}
                >
                    Submit Application
                </button>
            </section>
        </React.Fragment>
    );
};

export default BalanceTransferForm;