import React, { FC, useState } from 'react';
import {
    // Modal,
    TabBar,
} from '../../CustomComponent';
import PersonalDetails from './PersonalDetails';
import FinancialReference from './FinancialReference';
import ResidentalContactDetails from '../PersonalLoanApplication/ResidentialContact';
import WorkDetails from './WorkDetails'
import Others from './Others';
import EmergencyContactDetails from '../PersonalLoanApplication/EmergencyContactDetails';
import Declaration from './Declaration';
import Checklist from './Checklist';
import { Images } from '../../../utils/Images';
import '../../../styles/CreditCardApplication.scss';

type PersonalDetailsType = {
    salutation: string,
    nameOnCard: string,
    nameOnIdentificationCard: string,
    nationality: string,
    icNumber: string,
    gender: string,
    dateOfBirth: string,
    ethnicity: string,
    prNumber: string,
    prCountry: string,
    passportNumber: string,
    maritalStatus: string,
    numberOfChildren: string,
    spouseName: string,
    spousePhoneNumber: string,
    spouseWorkStatus: string,
    spouseCompanyName: string,
}

type FinancialReferenceType = {
    bank: string,
    financeType: string,
    financingAmount: string,
    outstandingBalance: string,
    monthlyPayment: string,
}

type ContactDetailsType = {
    residentialStatus: string,
    residentialLength: string,
    homePhone: string,
    mobilePhone: string,
    officePhone: string,
    email: string,
    address: string,
    city: string,
    postcode: string,
    state: string
};

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

type EmergencyDetailsType = {
    emergencyContact: string,
    phoneNumber: string,
    relationship: string,
    emergencyCompany: string,
    emergencyEmployer: string,
    address: string,
    city: string,
    postcode: string,
    state: string,
};

type OthersType ={
    bankLocation: string,
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
        nameOnIdentificationCard: '',
        nationality: '',
        icNumber: '',
        gender: '',
        dateOfBirth: '',
        ethnicity: '',
        prNumber: '',
        prCountry: '',
        passportNumber: '',
        maritalStatus: '',
        numberOfChildren: '',
        spouseName: '',
        spousePhoneNumber: '',
        spouseWorkStatus: '',
        spouseCompanyName: '',
    });

    const updatePersonalDetails = (updatedPersonalDetails: PersonalDetailsType) => {
        setPersonalDetails(() => { return updatedPersonalDetails; });
    }

    // FINANCE REFERENCE CONFIGURATION
    const [financialReference, setFinancialReference] = useState<FinancialReferenceType>({
        bank: '',
        financeType: '',
        financingAmount: '',
        outstandingBalance: '',
        monthlyPayment: '',
    });

    const updateFinancialReference = (updatedReference: FinancialReferenceType) => {
        setFinancialReference(() => { return updatedReference; });
    };

    // RESIDENTIAL & CONTACT DETAILS CONFIGURATION
    const [contactDetails, setContactDetails] = useState<ContactDetailsType>({
        residentialStatus: '',
        residentialLength: '',
        homePhone: '',
        mobilePhone: '',
        officePhone: '',
        email: '',
        address: '',
        city: '',
        postcode: '',
        state: ''
    });

    const updateContactDetails = (updatedContactDetails: ContactDetailsType) => {
        setContactDetails(() => { return updatedContactDetails; });
    }

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

    // EMERGENCY CONTACT DETAILS CONFIGURATION
    const [emergencyContactDetails, setEmergencyContactDetails] = useState<EmergencyDetailsType>({
        emergencyContact: '',
        phoneNumber: '',
        relationship: '',
        emergencyCompany: '',
        emergencyEmployer: '',
        address: '',
        city: '',
        postcode: '',
        state: '',
    });

    const updateEmergencyContactDetails = (updateEmergencyContactDetails: EmergencyDetailsType) => {
        setEmergencyContactDetails(() => { return updateEmergencyContactDetails; });
    }



    // OTHERS CONFIGURATION
    const [others, setOthers] = useState<OthersType>({
        securityQuestion: '',
        bankLocation: '',
    });

    const updateOthers = (updatedOthers: OthersType) => {
        setOthers(() => { return updatedOthers })
    };

    // CHECKLIST CONFIGURATION
    const [checklist, setChecklist] = useState<ChecklistType>([
        {
            checked: false,
            name: 'Copy of MyKad/NRIC (both sides)',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Copy of Passport',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Latest 1-month salary OR latest EPF statement OR latest BE form with official tax receipt',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Copy of Degree Certificate / Professional Qualification and employment letter OR 1-month salary slip',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Letter of Employment confirming work duration Malaysia',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Visa Work Permit',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Must hold Maybank account',
            remarks: ['readonly'],
        },
        {
            checked: false,
            name: 'Any evidence of retirement income (if applicable): EPF, Savings, FD, ASB, Tenacy Agreement',
            remarks: ['readonly'],
        },
    ]);

    const updateChecklist = (updatedChecklist: ChecklistType) => {
        setChecklist(() => { return updatedChecklist });
    }

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
            label: 'Residential Detail',
            name: 'Residential Detail',
            content: <ResidentalContactDetails
                        contactDetails={contactDetails}
                        handleContactDetailsUpdate={updateContactDetails}
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
            label: 'Emergency Contact',
            name: 'Emergency Contact',
            content: <EmergencyContactDetails
                        emergencyContactDetails={emergencyContactDetails}
                        handleEmergencyContactDetailsUpdate={updateEmergencyContactDetails}
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
        {
            label: 'Declaration',
            name: 'Declaration',
            content: <Declaration />,
        },
        {
            label: 'Checklist',
            name: 'Checklist',
            content: <Checklist
                checklistList={checklist}
                updateChecklist={updateChecklist}
            />,
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

    return (
        <React.Fragment>
            <main className="AIVI-Body">
                <section className="AIVI-Chatbox"></section>
                <section className="AIVI-Leftbox">
                    <div className="CreditCardApplication-Body-Content">
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
                        <div className="CreditCardApplication-Body-Content-Forms">
                            <TabBar
                                currentTab={currentTab}
                                updateTab={handleChangeTab}
                                optionList={tabMenuList}
                                progressStrict={false}
                                updateStrictTab={handleProceedTab}
                                enabledTab={enabledTab}
                            />
                        </div>
                    </div>  
                </section>
            </main>     
        </React.Fragment>
    );
}

export default CreditCardApplication;