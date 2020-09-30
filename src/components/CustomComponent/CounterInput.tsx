import React, { FC } from 'react';
import InputNumber from './InputNumber';

interface CounterInputProps {
    value: number;
    updateCounter: (value: number) => void;
    unit: string;
    min?: number;
    max?: number;
}

const CounterInput: FC<CounterInputProps> = ({value, updateCounter, unit, min = -Infinity ,max = Infinity}) => {
    const handleCounterInput = (value: number) => {
        updateCounter(value);
    }

    const handleCounterFlactuate = (operation: string) => {
        operation === '+' && (value + 1 <= max)
        ? updateCounter(value + 1)
        : operation === '-'&& (value - 1 >= min) && updateCounter(value - 1);
    };

    return (
        <React.Fragment>
            <div className="CounterInput-Wrapper">
                <InputNumber
                    min={min}
                    max={max}
                    value={value}
                    onChange={handleCounterInput}
                />
                <p>{unit}</p>
                <button onClick={() => handleCounterFlactuate('-')}>-</button>
                <button onClick={() => handleCounterFlactuate('+')}>+</button>
            </div>
        </React.Fragment>
    );
};

export default CounterInput;