import React from 'react';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    inputAutocomplete?: string,
    remarks?: string[],
};

interface InputBoxProps {
    value: string | number;
    inputProps: slotInputType;
    handleInputChange: (value: string, stateName: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({value, inputProps, handleInputChange}) => {
    // const handleInputFocus = (e: React.FocusEvent) => {
    //     if (e.currentTarget.parentElement?.parentElement) e.currentTarget.parentElement.parentElement.style.boxShadow = '$selected-box-shadow';
    // };

    // const handleInputBlur = (e: any) => {
    //     if (e.currentTarget.parentElement?.parentElement)  e.currentTarget.parentElement.parentElement.style.boxShadow = '$box-shadow';
    // };

    return (
        <div
            className="InputBox-Container"
        >
            <p className="InputBox-Label">{inputProps.inputLabel}</p>
            <div className="InputBox-InputArea">
                {
                    inputProps.remarks?.includes('currency') && <p className="InputBox-Currency">RM</p>
                }
                <input
                    type={inputProps.inputType}
                    // onFocus={handleInputFocus}
                    // onBlur={handleInputBlur}
                    autoComplete={inputProps.inputAutocomplete ? inputProps.inputAutocomplete : "off"}
                    value={value}
                    onChange={({ currentTarget: { value } }) => handleInputChange(value, inputProps.inputName)}
                />
            </div>
        </div>
    );
};

export default InputBox;