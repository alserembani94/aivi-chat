import React, { FC, useState } from 'react';
import {
    MultiImageSelect,
} from '../../CustomComponent';
import ExpensesDetails from './ExpensesDetails';
import { Images } from '../../../utils/Images';

type ExpenseDetails = {
    category: string,
    subcategory?: {
        name: string,
        expenseRange: number[],
    }[],
    expenseRange?: number[],
}[];

interface ExpensesProps {
    selectedOptions: string[];
    updateSelectedOptions: (selected: string[]) => void;
    optionLimit: number;
    expenseDetails: ExpenseDetails;
    generateExpenseObject: () => void;
    updateExpenseObject: (expenseObject: ExpenseDetails) => void;
}

const Expenses: FC<ExpensesProps> = ({selectedOptions, updateSelectedOptions, optionLimit, expenseDetails, generateExpenseObject, updateExpenseObject}) => {
    const [optionDetailRender, setOptionDetailRender] = useState<boolean>(false);
    const optionList = [
        {
            name: 'Shopping',
            label: 'Shopping',
            image: Images.icon_shopping,
        },
        {
            name: 'Utilities',
            label: 'Utilities',
            image: Images.icon_utilities,
        },
        {
            name: 'Groceries',
            label: 'Groceries',
            image: Images.icon_groceries,
        },
        {
            name: 'Education',
            label: 'Education',
            image: Images.icon_education,
        },
        {
            name: 'Travel',
            label: 'Travel',
            image: Images.icon_travel,
        },
        {
            name: 'Entertainment',
            label: 'Entertainment',
            image: Images.icon_entertainment,
        },
        {
            name: 'Dining',
            label: 'Dining',
            image: Images.icon_dining,
        },
        {
            name: 'Petrol',
            label: 'Petrol',
            image: Images.icon_petrol,
        },
        {
            name: 'Health & Insurance',
            label: 'Health & Insurance',
            image: Images.icon_health,
        },
    ];

    const handleOptionDetails = () => {
        if (!optionDetailRender) {
            generateExpenseObject();
        }

        setOptionDetailRender(prevState => { return !prevState });
    }

    const handleModifySelectedOptions = (selected: string[]) => {
        updateSelectedOptions(selected);
    }

    const handleExpenseDetailsUpdate = (expenseDetails: ExpenseDetails) => {
        updateExpenseObject(expenseDetails);
    }

    return (
        <React.Fragment>
            <div className="Expenses">
                {
                    !optionDetailRender
                    ? (
                        <div className="Expenses-SelectWrapper">
                            <MultiImageSelect
                                optionList={optionList}
                                selectedOptions={selectedOptions}
                                updateSelected={handleModifySelectedOptions}
                                maxOption={optionLimit}
                            />
                        </div>
                    )
                    : (
                        <ExpensesDetails
                            details={expenseDetails}
                            updateExpenseObject={handleExpenseDetailsUpdate}
                        />
                    )
                }
                <div className="Expenses-Proceed">
                    <button
                        disabled={selectedOptions.length !== optionLimit}
                        onClick={handleOptionDetails}
                    >{optionDetailRender ? `Repick Category` : `Proceed`}</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Expenses;