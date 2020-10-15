import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showAuthModal } from '../../../store/reducers/authModal';
import {
    // Modal,
    TabBar,
} from '../../CustomComponent';
import PersonalDetails from '../CreditCardApplication/PersonalDetails';
import FinancialReference from '../CreditCardApplication/FinancialReference';
import WorkDetails from '../CreditCardApplication/WorkDetails'
import Others from '../CreditCardApplication/Others';
import { Images } from '../../../utils/Images';
import '../../../styles/CreditCardApplication.scss';

type PersonalDetailsType = {
    salutation: string,
    nameOnCard: string,
}

type FinancialReferenceType = {
    bank: string,
    financeType: string,
}

type WorkDetailsType = {
    employerName: string,
    businessClassification: string,
    sector: string,
    position: string,
    employmentType: string,
    employmentLength: string,
    workAddress: string,
    workCity: string,
    workPostcode: string,
    workState: string,
    monthlyDebt: string,
    retirementIncome: string,
    employmentTerms: string,
}

type OthersType ={
    securityQuestion: string,
}

type ChecklistItemType = {
    checked: boolean,
    name: string,
    amount?: string,
    remarks?: string[],
};

type ChecklistType = ChecklistItemType[];


const CreditCardApplication: FC = () => {
    const [cardOwnership, setCardOwnership] = useState<boolean>(false);
    const [selectedBanks, setSelectedBanks] = useState<string[]>([]);
    const banksLimit = 3;

    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };

    const toggleExistingCard = (status: boolean) => {
        setCardOwnership(() => status);
    };

    // PERSONAL DETAILS CONFIGURATION
    const [personalDetails, setPersonalDetails] = useState<PersonalDetailsType>({
        salutation: '',
        nameOnCard: '',
    });

    const updatePersonalDetails = (updatedPersonalDetails: PersonalDetailsType) => {
        setPersonalDetails(() => { return updatedPersonalDetails; });
    }

    // FINANCE REFERENCE CONFIGURATION
    const [financialReference, setFinancialReference] = useState<FinancialReferenceType>({
        bank: '',
        financeType: '',
    });

    const updateFinancialReference = (updatedReference: FinancialReferenceType) => {
        setFinancialReference(() => { return updatedReference; });
    };

    // WORK DETAILS CONFIGURATION
    const [workDetails, setWorkDetails] = useState<WorkDetailsType>({
        employerName: '',
        businessClassification: '',
        sector: '',
        position: '',
        employmentType: '',
        employmentLength: '',
        workAddress: '',
        workCity: '',
        workPostcode: '',
        workState: '',
        monthlyDebt: '',
        retirementIncome: '',
        employmentTerms: '',
    });

    const updateWorkDetails = (updatedWorkDetails: WorkDetailsType) => {
        setWorkDetails(() => { return updatedWorkDetails; });
    };


    // OTHERS CONFIGURATION
    const [others, setOthers] = useState<OthersType>({
        securityQuestion: '',
    });

    const updateOthers = (updatedOthers: OthersType) => {
        setOthers(() => { return updatedOthers })
    };

    // TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Personal');
    const tabMenuList = [
        {
            label: 'Personal',
            name: 'Personal',
            content: <PersonalDetails 
                personalDetails={personalDetails}
                handlePersonalDetailsUpdate={updatePersonalDetails}
            />,
        },
        {
            label: 'Financial Reference',
            name: 'Financial Reference',
            content: <FinancialReference
                        referenceDetails={financialReference}
                        handleReferenceUpdate={updateFinancialReference}
                    />,
        },
        {
            label: 'Work',
            name: 'Work',
            content: <WorkDetails
                        workDetails={workDetails}
                        handleWorkDetailsUpdate={updateWorkDetails}
                    />,
        },
        {
            label: 'Others',
            name: 'Others',
            content: <Others
                othersDetails={others}
                handleOthersUpdate={updateOthers}
            />,
        },
    ];
    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }
    return (
        <React.Fragment>
            <main className="AIVI-Body">
                <section className="AIVI-Chatbox"></section>
                <section className="AIVI-Leftbox">
                    <div className="row no-gutters CreditCardApplication-Body-Content-Card">
                        <div className="col">
                            <img src={Images.icon_RHBCard} alt="icon-maybank" />
                        </div>
                        <div className="col">
                            <div className="CreditCardApplication-Content-Card-Details">Maybank Visa Platinum</div>
                        </div>
                        <div className="col-md-5 col-12 mt-2 mt-md-0">
                            <button className="Pages-Red-Button w-100">Submit Application</button>
                        </div>
                    </div>
                    <div className="CreditCard-Content">
                        <TabBar
                            currentTab={currentTab}
                            updateTab={handleChangeTab}
                            optionList={tabMenuList}
                        />
                    </div>
                </section>
            </main>
            
        </React.Fragment>
    );
}

export default CreditCardApplication;