import React, { FC, useState } from 'react';
import {
    TabBar,
} from '../../CustomComponent';
import AvailableCard from '../CreditCard/AvailableCard';
import MonthlyIncome from '../CreditCard/MonthlyIncome';
import LoanDetails from './LoanDetails';
import LoanCommitment from './LoanCommitment';
import MaritalStatus from './MaritalStatus';

type IncomeSourceType = {
    category: string,
    industry: string,
    level: string,
    jobTitle: string,
    income: string,
}[];

type LoanDetailsType = {
    loanAmount: string,
    repaymentPeriod: string,
};

type ChecklistItemType = {
    checked: boolean,
    name: string,
    amount?: string,
    remarks?: string[],
};

type MaritalInfoType = {
    maritalStatus: string,
    spouseName?: string,
    incomeInfo?: IncomeSourceType;
}

type ChecklistType = ChecklistItemType[];

const PersonalLoan: FC = () => {
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

    // LOAN DETAILS CONFIGURATION
    const [loanDetails, setLoanDetails] = useState<LoanDetailsType>({
        loanAmount: '',
        repaymentPeriod: '',
    });

    const updateLoanDetails = (updatedLoanDetails: LoanDetailsType) => {
        setLoanDetails(() => { return updatedLoanDetails; });
    }

    // MONTHLY INCOME CONFIGURATION
    const [incomeSource, setIncomeSource] = useState<IncomeSourceType>([
        {
            category: 'Primary',
            industry: '',
            level: '',
            jobTitle: '',
            income: '',
        },
    ]);

    const updateIncomeSource = (updatedIncomeSource: IncomeSourceType) => {
        setIncomeSource(() => { return updatedIncomeSource; });
    }

    // MARITAL STATUS CONFIGURATION
    const [maritalInfo, setMaritalInfo] = useState<MaritalInfoType>({
        maritalStatus: 'Single',
    });

    const handleMaritalInfoUpdate = (updatedMaritalInfo: MaritalInfoType) => {
        setMaritalInfo(() => { return updatedMaritalInfo; });
    }

    // LOAN COMMITMENTS CONFIGURATION
    const [loanCommitments, setLoanCommitments] = useState<ChecklistType>([
        {
            checked: true,
            name: 'Personal Loan',
            amount: '0',
            remarks: ['amount', 'readonly'],
        },
        {
            checked: false,
            name: 'Credit Card',
            amount: '0',
            remarks: ['amount', 'readonly'],
        },
        {
            checked: false,
            name: 'Property',
            amount: '0',
            remarks: ['amount', 'readonly'],
        },
        {
            checked: false,
            name: 'Car',
            amount: '0',
            remarks: ['amount', 'readonly'],
        },
    ]);

    const handleLoanCommitmentsUpdate = (updatedLoanCommitments: ChecklistType) => {
        setLoanCommitments(() => { return updatedLoanCommitments });
    }

    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Preferred Bank');
    const tabMenuList = [
        {
            label: 'Preferred Bank',
            name: 'Preferred Bank',
            content: <AvailableCard
                        cardOwnership={cardOwnership}
                        updateCardOwnership={toggleExistingCard}
                        selectedOptions={selectedBanks}
                        updateSelectedOptions={handleSelectedBanks}
                        optionLimit={banksLimit}
                    />,
        },
        {
            label: 'Loan Details',
            name: 'Loan Details',
            content: <LoanDetails
                        loanDetails={loanDetails}
                        handleLoanDetailsUpdate={updateLoanDetails}
                    />,
        },
        {
            label: 'Monthly Income',
            name: 'Monthly Income',
            content: <MonthlyIncome
                        incomeSources={incomeSource}
                        handleIncomeSourceUpdate={updateIncomeSource}
                    />,
        },
        {
            label: 'Marital Status',
            name: 'Marital Status',
            content: <MaritalStatus
                        maritalInfo={maritalInfo}
                        updateMaritalInfo={handleMaritalInfoUpdate}
                    />,
        },
        {
            label: 'Loan Commitment',
            name: 'Loan Commitment',
            content: <LoanCommitment
                        loanCommitments={loanCommitments}
                        updateLoanCommitments={handleLoanCommitmentsUpdate}
                    />,
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

export default PersonalLoan;