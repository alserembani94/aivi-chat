import React from 'react';
import { InputBox, InputDropdown } from '../../CustomComponent';

type slotInputType = {
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
    slotInput: slotInputType[];
    updateSubmitted: () => void;
    handleInputChange: (value: string, stateName: string) => void;
    optionList?: InputOptionType[];
}

const CashFromCardForm: React.FC<CashFromCardProps> = ({slot, slotInput, updateSubmitted, handleInputChange, optionList}) => {

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
                        slotInput.map((slotInputItem: slotInputType, index: number) => (
                            slotInputItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={slot}
                                    inputProps={slotInputItem}
                                    index={index}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    slot={slot}
                                    inputProps={slotInputItem}
                                    index={index}
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