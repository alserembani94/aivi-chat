import React from 'react';
import ReactSlider from 'react-slider';

interface RangeSliderProps {
    min: number;
    max: number;
    defaultValue: number[];
    value: number[];
    handleChange: (value: number[]) => void;
    step: number;
    minDistance: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({min, max, defaultValue, value, handleChange, step, minDistance }) => {
    const handleSliderChange = (value: number | number[] | null | undefined) => {
        handleChange(value as number[]);
    }

    return (
        <React.Fragment>
            <div className="RangeSlider-Wrapper">
                <ReactSlider
                    className="RangeSlider-Item"
                    thumbClassName="RangeSlider-Thumb"
                    trackClassName="RangeSlider-Track"
                    defaultValue={defaultValue}
                    step={step}
                    minDistance={minDistance}
                    pearling={true}
                    min={min}
                    max={max}
                    onChange={handleSliderChange}
                />
            </div>
        </React.Fragment>
    );
};

export default RangeSlider;