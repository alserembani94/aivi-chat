import React from 'react';
import {
    convertToInt,
} from '../../utils/DataValidation';

interface CounterInputProps {
    value: number;
    updateCounter: (value: number) => void;
    unit: string;
    limit?: number;
}

const CounterInput: React.FC<CounterInputProps> = ({value, updateCounter, unit, limit = Infinity}) => {
    const handleCounterInput = (value: string) => {
        updateCounter(convertToInt(value, limit));
    }

    const handleCounterFlactuate = (operation: string) => {
        operation === '+' && (value + 1 <= limit)
        ? updateCounter(value + 1)
        : operation === '-'&& (value - 1 >= 0) && updateCounter(value - 1);
    };

    return (
        <React.Fragment>
            <div className="CounterInput-Wrapper">
                <input
                    type="text"
                    min={0}
                    max={20}
                    value={value}
                    inputMode="numeric"
                    onChange={({ currentTarget: { value } }) => handleCounterInput(value)}
                />
                <p>{unit}</p>
                <button onClick={() => handleCounterFlactuate('-')}>-</button>
                <button onClick={() => handleCounterFlactuate('+')}>+</button>
            </div>
        </React.Fragment>
    );
};

export default CounterInput;