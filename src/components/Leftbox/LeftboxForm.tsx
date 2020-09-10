import React from 'react';
import { InputBox, InputDropdown } from '../CustomInput';

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

interface LeftboxProps {
    slot: slotType;
    slotInput: slotInputType[];
    updateSubmitted: () => void;
    handleInputChange: (value: string, stateName: string) => void;
    optionList?: InputOptionType[];
}

const LeftboxForm: React.FC<LeftboxProps> = ({slot, slotInput, updateSubmitted, handleInputChange, optionList}) => {

    return (
        <>
            <section className="Leftbox-Content">
                <p className="Leftbox-Title">
                    Application Status: In Progress
                </p>
                <p className="Leftbox-Description">
                    You can view your progress so far here. Feel free to edit the information by clicking on the field.
                </p>
                <div className="Leftbox-Details">
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
            <section className="Leftbox-Button">
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

export default LeftboxForm;