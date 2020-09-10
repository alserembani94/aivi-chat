import React from 'react';

type slotInputType = {
    [inputName: string]: string,
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

interface InputBoxProps {
    slot: slotType;
    inputProps: slotInputType;
    index: number;
    handleInputChange: (value: string, stateName: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({slot, inputProps, index, handleInputChange}) => {
    const handleInputFocus = (e: React.FocusEvent) => {
        if (e.currentTarget.parentElement?.parentElement) e.currentTarget.parentElement.parentElement.style.boxShadow = 'var(--selected-box-shadow)';
    };

    const handleInputBlur = (e: any) => {
        if (e.currentTarget.parentElement?.parentElement)  e.currentTarget.parentElement.parentElement.style.boxShadow = 'var(--box-shadow)';
    };

    return (
        <div
            className="InputBox-Container"
            key={index}
        >
            <p className="InputBox-Label">{inputProps.inputLabel}</p>
            <div className="InputBox-InputArea">
                {
                    inputProps.inputName === 'amount' && <p className="InputBox-Currency">RM</p>
                }
                <input
                    type={inputProps.inputType}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={slot[inputProps.inputState]}
                    onChange={({ currentTarget: {value} }) => handleInputChange(value, inputProps.inputName)}
                />
            </div>
        </div>
    );
};

export default InputBox;