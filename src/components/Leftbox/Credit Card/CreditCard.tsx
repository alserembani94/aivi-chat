import React from 'react';
import {
    TabBar,
} from '../../CustomComponent';
import AvailableCard from './AvailableCard';
import Expenses from './Expenses';
import MonthlyIncome from './MonthlyIncome';

type ExpenseDetails = {
    category: string,
    subcategory?: {
        name: string,
        expenseRange: number[],
    }[],
    expenseRange?: number[],
}[];

type IncomeSource = {
    category: string,
    industry: string,
    level: string,
    jobTitle: string,
    income: string,
}[];

const CreditCard = () => {
    // AVAILABLE BANKS CONFIGURATION
    const [selectedBanks, setSelectedBanks] = React.useState<string[]>([]);
    const banksLimit = 3;

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(selected);
    };

    // EXPENSES CONFIGURATION
    const [selectedExpenses, setSelectedExpenses] = React.useState<string[]>([]);
    const expensesLimit = 3;

    const handleSelectedExpenses = (selected: string[]) => {
        setSelectedExpenses(selected);
    };

    const [expenseObject, setExpenseObject] = React.useState<any[]>([]);

    const generateExpenseObject = () => {
        const generatedExpenseObject = selectedExpenses.map(option => {
            let optionDetail = {};
            if (['Shopping', 'Groceries', 'Travel'].includes(option)) {
                optionDetail = {
                    category: option,
                    subcategory: [
                        {
                            name: 'Online',
                            expenseRange: [2200, 8800],
                        },
                        {
                            name: 'Traditional',
                            expenseRange: [3000, 7000],
                        },
                    ],
                };                    
            }
            else {
                optionDetail = {
                    category: option,
                    expenseRange: [1000, 8100],
                };  
            }
            return optionDetail;
        });

        setExpenseObject(generatedExpenseObject);
    }

    const updateExpenseObject = (newExpenseObject: ExpenseDetails) => {
        setExpenseObject(newExpenseObject);
    }

    // MONTHLY INCOME CONFIGURATION
    const [incomeSource, setIncomeSource] = React.useState<IncomeSource>([
        {
            category: '',
            industry: '',
            level: '',
            jobTitle: '',
            income: '',
        },
    ]);

    const updateIncomeSource = (updatedIncomeSource: IncomeSource) => {
        setIncomeSource(() => { return updatedIncomeSource });
    }
    
    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = React.useState('Available Card');
    const tabMenuList = [
        {
            label: 'Available Card',
            name: 'Available Card',
            content: <AvailableCard
                        selectedOptions={selectedBanks}
                        updateSelectedOptions={handleSelectedBanks}
                        optionLimit={banksLimit}
                    />,
            enabled: true,
        },
        {
            label: 'Expenses',
            name: 'Expenses',
            content: <Expenses
                        selectedOptions={selectedExpenses}
                        updateSelectedOptions={handleSelectedExpenses}
                        optionLimit={expensesLimit}
                        expenseDetails={expenseObject}
                        generateExpenseObject={generateExpenseObject}
                        updateExpenseObject={updateExpenseObject}
                    />,
            enabled: false,
        },
        {
            label: 'Monthly Income',
            name: 'Monthly Income',
            content: <MonthlyIncome
                        incomeSources={incomeSource}
                        handleIncomeSourceUpdate={updateIncomeSource}
                    />,
            enabled: false,
        },
    ];

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }

    return (
        <React.Fragment>
            <div className="CreditCard-Content">
                <TabBar
                    currentTab={currentTab}
                    updateTab={handleChangeTab}
                    optionList={tabMenuList}
                    progressStrict={true}
                />
            </div>
            <div className="CreditCard-Button">
                <button
                    className="Button Button-Full"
                >
                    Submit Application
                </button>
            </div>
        </React.Fragment>
    );
};

export default CreditCard;