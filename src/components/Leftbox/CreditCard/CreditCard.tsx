import React, { FC, useState } from 'react';
import {
    // Modal,
    TabBar,
} from '../../CustomComponent';
import AvailableCard from './AvailableCard';
import Expenses from './Expenses';
import MonthlyIncome from './MonthlyIncome';

type optionList = {
    label: string,
    name: string,
    content: JSX.Element;
};

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

interface CreditCardProps {
    authenticated: boolean;
    authModal: boolean;
    openAuthModal: () => void;
    closeAuthModal: () => void;
}

const CreditCard: FC<CreditCardProps> = ({ authenticated, authModal, openAuthModal, closeAuthModal }) => {
    // AVAILABLE BANKS CONFIGURATION
    const [cardOwnership, setCardOwnership] = useState<boolean>(false);
    const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
    const banksLimit = 3;

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };

    const toggleExistingCard = (status: boolean) => {
        setCardOwnership(() => status);
    };

    // EXPENSES CONFIGURATION
    const [selectedExpenses, setSelectedExpenses] = useState<string[]>([]);
    const expensesLimit = 3;

    const handleSelectedExpenses = (selected: string[]) => {
        setSelectedExpenses(() => { return selected; });
    };

    const [expenseObject, setExpenseObject] = useState<any[]>([]);

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
        setExpenseObject(() => {  return newExpenseObject; });
    }

    // MONTHLY INCOME CONFIGURATION
    const [incomeSource, setIncomeSource] = useState<IncomeSource>([
        {
            category: 'Primary',
            industry: '',
            level: '',
            jobTitle: '',
            income: '',
        },
    ]);

    const updateIncomeSource = (updatedIncomeSource: IncomeSource) => {
        setIncomeSource(() => { return updatedIncomeSource; });
    }
    
    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Available Card');
    const tabMenuList = [
        {
            label: 'Available Card',
            name: 'Available Card',
            content: <AvailableCard
                        cardOwnership={cardOwnership}
                        updateCardOwnership={toggleExistingCard}
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
    const [enabledTab, setEnabledTab] = useState([true, false, false]);

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }

    const handleProceedTab = (updatedEnabledTab: boolean[] | undefined, nextActiveTab: string) => {
        // setTabMenuList(() => { return updatedOptionList });
        setEnabledTab(() => { return updatedEnabledTab as boolean[] });
        handleChangeTab(nextActiveTab);
    }

    const handleSubmit = () => {
        authenticated ? console.log('Proceed') : openAuthModal();
    };

    
    return (
        <React.Fragment>
            <div className="CreditCard-Content">
                <TabBar
                    currentTab={currentTab}
                    updateTab={handleChangeTab}
                    optionList={tabMenuList}
                    progressStrict={true}
                    updateStrictTab={handleProceedTab}
                    enabledTab={enabledTab}
                />
            </div>
            <div className="CreditCard-Button">
                <button
                    className="Button Button-Full"
                    disabled={[selectedBanks.length === 3, expenseObject.length === 3, incomeSource[0].income].every(item => !item)}
                    onClick={handleSubmit}
                >
                    Submit Application
                </button>
            </div>
        </React.Fragment>
    );
};

export default CreditCard;