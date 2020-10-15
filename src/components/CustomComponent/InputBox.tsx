import React, { FC, useState } from 'react';

type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    inputAutocomplete?: string,
    remarks?: string[],
    inputClass?: string;
};

interface InputBoxProps {
    value: string | number;
    inputProps: slotInputType;
    handleInputChange: (value: string, stateName: string) => void;
}

const InputBox: FC<InputBoxProps> = ({value, inputProps, handleInputChange}) => {
    const [isFocused, setFocused] = useState(false);
    const handleInputFocus = (e: React.FocusEvent) => {
        setFocused(() => true);
        // if (e.currentTarget.parentElement?.parentElement) e.currentTarget.parentElement.parentElement.style.boxShadow = '$selected-box-shadow';
    };

    const handleInputBlur = (e: any) => {
        setFocused(() => false);
        // if (e.currentTarget.parentElement?.parentElement)  e.currentTarget.parentElement.parentElement.style.boxShadow = '$box-shadow';
    };

    return (
        <div className={inputProps.inputClass ? inputProps.inputClass : "col-12" }>
            <div
                className="InputBox-Container"
            >
                <p className="InputBox-Label" data-populated={!!value || !!inputProps.remarks} data-focused={isFocused}>{inputProps.inputLabel}</p>
                <div className="InputBox-InputArea">
                    {
                        inputProps.remarks?.includes('currency') && <p className="InputBox-Currency">RM</p>
                    }
                    <input
                        type={inputProps.inputType}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        autoComplete={inputProps.inputAutocomplete ? inputProps.inputAutocomplete : "off"}
                        value={value}
                        onChange={({ currentTarget: { value } }) => handleInputChange(value, inputProps.inputName)}
                    />
                </div>
            </div>
        </div> 
    );
};

export default InputBox;