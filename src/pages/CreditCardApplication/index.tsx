import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/CreditCardApplication.scss';

import {
    Chatbox,
} from '../../components';
import {
    TabBar,
} from '../../components/CustomComponent';
import { converseWithLex } from '../../store/reducers/conversation';
import { Images } from '../../utils/Images';

import PersonalDetails from '../../components/Leftbox/CreditCardApplication/PersonalDetails';
import FinancialReference from '../../components/Leftbox/CreditCardApplication/FinancialReference';
import ResidentalContactDetails from '../../components/Leftbox/PersonalLoanApplication/ResidentialContact';
import WorkDetails from '../../components/Leftbox/CreditCardApplication/WorkDetails';
import Others from '../../components/Leftbox/CreditCardApplication/Others';
import EmergencyContactDetails from '../../components/Leftbox/PersonalLoanApplication/EmergencyContactDetails';
import Declaration from '../../components/Leftbox/CreditCardApplication/Declaration';
import Checklist from '../../components/Leftbox/CreditCardApplication/Checklist';

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
    const conversations = useSelector((state: any) => state.conversations);
    const dispatch = useDispatch();

    const [showChatInMobile, setShowChatInMobile] = useState(false);
    
    const handleChatboxModal = () => {
        setShowChatInMobile(prevState => { return !prevState });
    }

    const updateConversation = (newMessage: string) => {
        dispatch(converseWithLex(newMessage));
    };

    // !PERSONAL DETAILS CONFIGURATION
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

    // !FINANCE REFERENCE CONFIGURATION
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

    // !RESIDENTIAL & CONTACT DETAILS CONFIGURATION
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

    // !WORK DETAILS CONFIGURATION
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

    // !EMERGENCY CONTACT DETAILS CONFIGURATION
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



    // !OTHERS CONFIGURATION
    const [others, setOthers] = useState<OthersType>({
        securityQuestion: '',
        bankLocation: '',
    });

    const updateOthers = (updatedOthers: OthersType) => {
        setOthers(() => { return updatedOthers })
    };

    // !CHECKLIST CONFIGURATION
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

    // * TAB CONFIGURATION
    const [currentTab, setCurrentTab] = useState('Personal');
    const tabMenuList = [
        {
            label: 'Personal',
            name: 'Personal',
            // content: <></>,
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
    // const [enabledTab, setEnabledTab] = useState([true, false, false]);

    const handleChangeTab = (selectedTab: string) => {
        setCurrentTab(() => { return selectedTab });
    }

    // const handleProceedTab = (updatedEnabledTab: boolean[] | undefined, nextActiveTab: string) => {
    //     // setTabMenuList(() => { return updatedOptionList });
    //     setEnabledTab(() => { return updatedEnabledTab as boolean[] });
    //     handleChangeTab(nextActiveTab);
    // }

    // MOCK: Selected card data
    const mockCardData = {
        name: 'Maybank Visa Platinum',
        imageUrl: Images.icon_RHBCard,
    };

    return (
        <React.Fragment>
            <section className="AIVI-Chatbox">
                <img src={Images.logo_AIVI} alt="logo-aivi" className="AIVI-Logo" />
                <Chatbox
                    conversation={conversations.list}
                    updateConversation={updateConversation}
                    disableInput={conversations.list[conversations.list.length - 1]?.actions?.actionType === 'multipleOption'}
                />
            </section>
            <section className="AIVI-Leftbox">
                <div className="CreditCardApplication-Content">
                    <div className="CreditCardApplication-Header">
                        <img src={mockCardData.imageUrl} alt={mockCardData.name} />
                        <p>{mockCardData.name}</p>
                        <button className="Pages-Red-Button">Submit Application</button>
                    </div>
                    <div className="CreditCardApplication-Tab">
                        <TabBar
                            currentTab={currentTab}
                            updateTab={handleChangeTab}
                            optionList={tabMenuList}
                            progressStrict={false}
                            // updateStrictTab={handleProceedTab}
                            // enabledTab={enabledTab}
                        /> 
                    </div>
                </div>
            </section>

            {/* FOR MOBILE VERSION ONLY */}
            {/* START */}
            <button
                className="AIVI-Chatbox-Mobile-Button Button"
                onClick={handleChatboxModal}
            >
                C
            </button>
            <section
                className={`AIVI-Chatbox-Mobile-Model ${showChatInMobile ? `AIVI-Chatbox-Mobile-Show` : `AIVI-Chatbox-Mobile-Hide`}`}
            >
                <Chatbox
                    conversation={conversations.list}
                    updateConversation={updateConversation}
                    disableInput={conversations.list[conversations.list.length - 1]?.actions?.actionType === 'multipleOption'}
                />
            </section>
            {/* END */}
        </React.Fragment>
    )
}

export default CreditCardApplication;
