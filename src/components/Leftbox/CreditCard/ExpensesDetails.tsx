import React, { FC } from 'react';
// import {
//     RangeSlider,
// } from '../../CustomComponent';
import ReactSlider from 'react-slider';

type ExpenseDetails = {
    category: string,
    subcategory?: {
        name: string,
        expenseRange: number[],
    }[],
    expenseRange?: number[],
};

interface ExpenseItemProps {
    name?: string;
    expenseRange: number[];
    updateRange: (value: number[]) => void;
}

interface ExpenseCategoryProps {
    details: ExpenseDetails;
    updateExpenseItem: (expenseItem: ExpenseDetails) => void;
}

interface ExpenseDetailsProps {
    details: ExpenseDetails[];
    updateExpenseObject: (expenseObject: ExpenseDetails[]) => void;
}

const ExpenseItem: FC<ExpenseItemProps> = ({name, expenseRange, updateRange}) => {
    const minRange = 200;
    const maxRange = 10000;
    const sliderStep = 100;
    const sliderMinDistance = 500;

    const handleRangeChange = (value: number[]) => {
        updateRange(value);
    }

    const handleInputChange = (value: string, index: number) => {
        const adjustedRange = expenseRange;
        adjustedRange[index] = parseInt(value);
        handleRangeChange(adjustedRange);
    }

    return (
        <div className="ExpenseDetails-Item">
            <input
                className="ExpenseDetails-Input ExpenseDetails-InputMin"
                type="number"
                min={minRange}
                max={maxRange}
                step={sliderStep}
                value={expenseRange[0]}
                onChange={({ currentTarget: { value } }) => handleInputChange(value, 0)}
                readOnly={true}
            ></input>
            <div className="ExpenseDetails-Slider">
                {
                    name && <p className="ExpenseDetails-Label">{name}</p>
                }
                {/* <RangeSlider
                    min={minRange}
                    max={maxRange}
                    step={sliderStep}
                    minDistance={sliderMinDistance}
                    defaultValue={expenseRange}
                    value={expenseRange}
                    handleChange={handleRangeChange}
                /> */}
                <ReactSlider
                    className="RangeSlider-Item"
                    thumbClassName="RangeSlider-Thumb"
                    trackClassName="RangeSlider-Track"
                    defaultValue={expenseRange}
                    step={sliderStep}
                    minDistance={sliderMinDistance}
                    pearling={true}
                    min={minRange}
                    max={maxRange}
                    onChange={(value) => handleRangeChange(value as number[])}
                />
            </div>
            <input
                className="ExpenseDetails-Input ExpenseDetails-InputMax"
                type="number"
                min={minRange}
                max={maxRange}
                step={sliderStep}
                value={expenseRange[1]}
                onChange={({ currentTarget: { value } }) => handleInputChange(value, 1)}
                readOnly={true}
            ></input>
        </div>
    );
}

const ExpenseCategory: FC<ExpenseCategoryProps> = ({details, updateExpenseItem}) => {
    const handleRangeUpdate = (value: number[], subcategoryIndex?: number) => {
        const adjustedDetails = details;
        if (adjustedDetails.subcategory) {
            adjustedDetails.subcategory[subcategoryIndex as number].expenseRange = value;
        }
        else {
            adjustedDetails.expenseRange = value;
        }
        updateExpenseItem(adjustedDetails);
    };

    return (
        <React.Fragment>
            <div className="ExpenseDetails-Wrapper">
                <p className="ExpenseDetails-Title">{details.category}</p>
                <div className="ExpenseDetails-Container">
                    {
                        details.subcategory
                        ? details.subcategory.map((subcategoryItem, index) => (
                            <ExpenseItem
                                name={subcategoryItem.name}
                                expenseRange={subcategoryItem.expenseRange}
                                updateRange={value => handleRangeUpdate(value, index)}
                                key={index}
                            />
                        ))
                        : <ExpenseItem
                            expenseRange={details.expenseRange as number[]}
                            updateRange={value => handleRangeUpdate(value)}
                        />
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

const ExpensesDetails: FC<ExpenseDetailsProps> = ({details, updateExpenseObject}) => {
    const handleExpenseUpdate = (expenseItem: ExpenseDetails) => {
        const adjustedDetails = details.map(detailItem => (detailItem.category === expenseItem.category) ? expenseItem : detailItem);
        updateExpenseObject(adjustedDetails);
    }

    return (
        <React.Fragment>
            {
                details.map((detailItem, index) => (
                    <ExpenseCategory
                        details={detailItem}
                        updateExpenseItem={handleExpenseUpdate}
                        key={index}
                    />
                ))
            }
        </React.Fragment>
    );
};

export default ExpensesDetails;