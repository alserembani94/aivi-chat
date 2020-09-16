import React from 'react';
import { InputBox, InputDropdown } from '../../CustomComponent';

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

interface CashFromCardProps {
    slot: slotType;
    updateSubmitted: () => void;
    handleInputChange: (value: string, stateName: string) => void;
    optionList?: InputOptionType[];
}

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    optionList?: InputOptionType[];
};

const slotInput: slotInputType[] = [
        {
            inputName: 'transferFrom',
            inputState: 'transferFrom',
            inputType: 'dropdown',
            inputLabel: 'Transfer from',
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
        },
    ];

const CashFromCardForm: React.FC<CashFromCardProps> = ({slot, updateSubmitted, handleInputChange, optionList}) => {
    return (
        <>
            <section className="CashFromCard-Content">
                <p className="CashFromCard-Title">
                    Application Status: In Progress
                </p>
                <p className="CashFromCard-Description">
                    You can view your progress so far here. Feel free to edit the information by clicking on the field.
                </p>
                <div className="CashFromCard-Details">
                    {
                        slotInput.map((slotInputItem: slotInputItemType, index: number) => (
                            slotInputItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={slot}
                                    inputProps={slotInputItem}
                                    handleInputChange={handleInputChange}
                                    allowInput={true}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    slot={slot}
                                    inputProps={slotInputItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
            </section>
            <section className="CashFromCard-Button">
                <button
                    className="Button Button-Full"
                    onClick={updateSubmitted}
                    disabled={[slot.transferFrom, slot.name, slot.phone, slot.email, slot.amount].some(check => check === '')}
                >
                    Submit Application
                </button>
            </section>
        </>
    );
}

export default CashFromCardForm;