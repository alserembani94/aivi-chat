import React from 'react';
import {
    MultiImageSelect,
} from '../../CustomComponent';
import ExpensesDetails from './ExpensesDetails';
import { Images } from '../../../utils/Images';

const Expenses = () => {
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
    const [optionDetailRender, setOptionDetailRender] = React.useState<boolean>(false);
    const optionLimit = 3;
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
        setOptionDetailRender(prevState => { return !prevState });
    }

    const handleModifySelectedOptions = (selected: string[]) => {
        setSelectedOptions(selected);
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
                        <ExpensesDetails />
                    )
                }
                <div className="Expenses-Proceed">
                    <button
                        disabled={selectedOptions.length !== optionLimit}
                        onClick={handleOptionDetails}
                    >Proceed</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Expenses;