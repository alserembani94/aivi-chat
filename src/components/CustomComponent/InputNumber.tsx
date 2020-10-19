import React, { FC } from 'react';
import {
    convertToInt,
} from '../../utils/DataValidation';

// Construct types for component props
interface InputNumberProps {
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    max?: number;
    numberType?: 'integer' | 'float';
    className?: string;
    children?: any;
}

const InputNumber: FC<InputNumberProps> = ({
    value,
    onChange,
    numberType = 'integer',
    min = -Infinity,
    max = Infinity,
    className,
    children,
}) => {
    const handleInputUpdate = (value: string) => {
        onChange(convertToInt({
                value,
                min,
                max,
        }));
    };

    return (
        <React.Fragment>
            <input
                type="text"
                value={value}
                inputMode="numeric"
                className={`InputNumber ${className}`}
                onChange={({ currentTarget: { value } }) => handleInputUpdate(value)}
            >
                {children}
            </input>
        </React.Fragment>
    );
};

export default InputNumber;