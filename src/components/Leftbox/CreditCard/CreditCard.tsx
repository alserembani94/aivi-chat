import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showAuthModal } from '../../../store/reducers/authModal';
import { addForm } from '../../../store/reducers/form';
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

const CreditCard: FC = () => {
    // const authModal = useSelector((state: any) => state.authModal);
    const { slots } = useSelector((state: any) => state.conversations);
    const dispatch = useDispatch();

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
            if (['Shopping', 'Groceries'].includes(option)) {
                optionDetail = {
                    category: option,
                    subcategory: [
                        {
                            name: 'Online',
                            expenseRange: [200, 700],
                        },
                        {
                            name: 'Traditional',
                            expenseRange: [200, 700],
                        },
                    ],
                };                    
            }
            else {
                optionDetail = {
                    category: option,
                    expenseRange: [200, 700],
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
    const [currentTab, setCurrentTab] = useState('Existing Card');
    const tabMenuList = [
        {
            label: 'Existing Card',
            name: 'Existing Card',
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

    const auth = useSelector((state: any) => state.auth);
    const history = useHistory();

    const handleSubmit = () => {
        dispatch(addForm('credit-card', {
            selectedBanks,
            expenseObject,
            incomeSource,
        }));
        auth.user?.username ? history.push('/loading') : dispatch(showAuthModal());
    };

    // ! CUSTOMIZING CHAT FLOW HERE
    useEffect(() => {
        const {
            existing_cardholder,
            existing_issuer,
            card_expense_one,
            card_expense_two,
            card_expense_three,
            card_income,
        } = slots;

        // 1. Asking if user has existing cards
        if (existing_cardholder === 'yes') {
            setCardOwnership(() => true);
            // TabBar.defaultProps?.updateStrictTab;
        }
        else if (existing_cardholder === 'no') {
            setCardOwnership(() => false);
            setEnabledTab(prevState => prevState.map((tabStatus, index) => {
                if (prevState[index-1]) return true;
                else return tabStatus;
            }));
            setCurrentTab(() => 'Expenses');
        }
        else setCardOwnership(prevState => prevState);

        // 2. If yes for (1), need to give lists of banks

        // 3. Asking what expenses do user interests in
        
        // if (card_expense_one !== null) setSelectedExpenses(());

        // 4. User need to set range for each expenses

        // 5. Add income info
        

        console.log(slots);
    }, [slots])
    
    return (
        <React.Fragment>
            <div className="CreditCard-Content">
                <div className="SmartAssist-SectionInfo">
                    <p className="SmartAssist-Title">Section: Recommend Credit Card</p>
                    <p className="SmartAssist-Description">Please fill up the form and make sure all your input is accurate before submitting the form</p>
                </div>
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