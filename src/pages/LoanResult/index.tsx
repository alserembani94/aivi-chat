import React, { FC, useState } from 'react';
import {
    ReselectBankModal,
} from '../../components/CardResult';
import {
    LoanDetail,
    LoanItem,
    ResetLoanRequestModal,
} from '../../components/LoanResult';
import {
    Modal,
} from '../../components/CustomComponent';
import { Images } from '../../utils/Images';
import { useSelector } from 'react-redux';
// import { csv } from 'd3';
// import { CSVFiles } from '../../utils/DataSample';

// const cardMockData = {
//     image: '',
//     name: 'Maybank 2 Gold',
//     estimatedPoints: [1200, 1600],
//     period: '12 months',
// };

// const LoanMock = [
//     {
//         loanName: 'Maybank Loan 1',
//         logoUrl: 'https://i.imgur.com/IvkIBSl.png',
//         loanAmount: 20000,
//         loanTenure: 10,
//         loanRate: 6,
//     },
//     {
//         loanName: 'Maybank Loan 2',
//         logoUrl: 'https://i.imgur.com/IvkIBSl.png',
//         loanAmount: 30000,
//         loanTenure: 7,
//         loanRate: 3,
//     },
//     {
//         loanName: 'Maybank Loan 3',
//         logoUrl: 'https://i.imgur.com/IvkIBSl.png',
//         loanAmount: 20000,
//         loanTenure: 10,
//         loanRate: 6,
//     },
//     {
//         loanName: 'Maybank Loan 4',
//         logoUrl: 'https://i.imgur.com/IvkIBSl.png',
//         loanAmount: 30000,
//         loanTenure: 7,
//         loanRate: 3,
//     },
//     {
//         loanName: 'Maybank Loan 5',
//         logoUrl: 'https://i.imgur.com/IvkIBSl.png',
//         loanAmount: 20000,
//         loanTenure: 10,
//         loanRate: 6,
//     },
//     {
//         loanName: 'Maybank Loan 6',
//         logoUrl: 'https://i.imgur.com/IvkIBSl.png',
//         loanAmount: 30000,
//         loanTenure: 7,
//         loanRate: 3,
//     },
// ];


type ExpenseDetails = {
    category: string,
    subcategory?: {
        name: string,
        expenseRange: number[],
    }[],
    expenseRange?: number[],
}[];

const LoanResult: FC = () => {
    const loans = useSelector((state: any) => state.loanRecommender);
    const { formContent } = useSelector((state: any) => state.form);

    // Temporary Period Details
    // const [period, setPeriod] = useState(6);
    // const handlePeriodChange = (value: number) => setPeriod(() => value);

    // CONFIGURATION FOR BANKS
    const [selectedBanks, setSelectedBanks] = useState<string[]>(formContent.selectedBanks || []);
    const handleSelectedBanks = (selected: string[]) => {
        setSelectedBanks(() => { return selected; });
    };

    // CONFIGURATION FOR SELECTED LOAN
    const [selectedLoan, setSelectedLoan] = useState('');
    const handleLoanChange = (loanName: string) => loanName === selectedLoan ? setSelectedLoan(() => '') : setSelectedLoan(() => loanName);

    // CONFIGURATION FOR MODALS
    const [resetModal, setResetModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    const [loanDetailModal, setLoanDetailModal] = useState(false);
    // const [loanDetailData, setLoanDetailData] = useState({

    // });

    const handleLoanDetail = (loanName: string) => {
        handleModalOpen('loanDetailModal');
    }

    const handleModalOpen = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => true);
                break;
            case 'searchModal':
                setSearchModal(() => true);
                break;
            case 'loanDetailModal':
                setLoanDetailModal(() => true);
                break;
            default:
                return;
        }
    }

    const handleModalClose = (modalName: string) => {
        switch (modalName) {
            case 'resetModal':
                setResetModal(() => false);
                break;
            case 'searchModal':
                setSearchModal(() => false);
                break;
            case 'loanDetailModal':
                setLoanDetailModal(() => false);
                break;
            default:
                return;
        }
    }

    const [loanTenure, setLoanTenure] = useState(6);
    const [loanAmount, setLoanAmount] = useState(formContent.loanDetails?.loanAmount || 2000);
    const handleLoanTenureUpdate = (tenure: number) => setLoanTenure(() => tenure);
    const handleLoanAmountUpdate = (amount: number) => setLoanAmount(() => amount);

    return (
        <React.Fragment>
            <main className="ResultPage-Body">
                <section className="ResultPage-TopContent">
                    <div className="ResultPage-TopBar">
                        <div className="ResultPage-TopBar-TitleBar">
                            <p className="ResultPage-TopBar-Title">Your results are in!</p>
                            <p className="ResultPage-TopBar-Subtitle">Click on the card to select.</p>
                        </div>
                        {/* <button onClick={toggleAllExpanded}>{ allExpanded ? `Collapse` : `Expand`} All</button> */}
                        <button
                            onClick={() => handleModalOpen('resetModal')}
                        >
                            Reset Loan Request
                            <img src={Images.icon_readjust} alt="Reset" />
                        </button>
                        <button
                            onClick={() => handleModalOpen('searchModal')}
                        >Not what you're looking for?
                            <img src={Images.icon_search} alt="Search" />
                        </button>
                    </div>
                    <div className="ResultPage-Content-Col">
                        {
                            loans.loan && Object.entries(loans.loan).map(([loanName, loanDetails]: any, index: number) => (
                                <LoanItem
                                    key={index}
                                    logoUrl={loanDetails.loan_metadata[0]}
                                    loanName={loanName}
                                    loanTenure={loanDetails.month_length}
                                    loanRate={loanDetails.minmax_annual_int_rate}
                                    loanAmount={loanDetails.loan_amount}
                                    loanPayment={loanDetails.minmax_monthly_payment}
                                    selectedLoan={selectedLoan}
                                    updateSelectedLoan={handleLoanChange}
                                    openLoanDetail={handleLoanDetail}
                                />
                            ))
                        }
                    </div>
                </section>
                <section className="ResultPage-BottomContent">
                    <button className="ResultPage-BottomContent-Chat">
                        Chat
                    </button>
                    <div className="ResultPage-BottomContent-Description">
                        <p className="ResultPage-BottomContent-Description-Title">Ready To Apply?</p>
                    </div>
                    <button className="ResultPage-BottomContent-Apply" disabled={!selectedLoan}>
                        Apply Now
                    </button>
                </section>

                {/* MODAL SECTIONS */}
                <Modal
                    modalName='resetModal'
                    visible={resetModal}
                    closeModal={handleModalClose}
                >
                    <ResetLoanRequestModal
                        loanTenure={loanTenure}
                        updateLoanTenure={handleLoanTenureUpdate}
                        loanAmount={loanAmount}
                        updateLoanAmount={handleLoanAmountUpdate}
                        closeModal={handleModalClose}
                    />
                </Modal>
                <Modal
                    modalName='searchModal'
                    visible={searchModal}
                    closeModal={handleModalClose}
                >
                    <ReselectBankModal
                        selectedBanks={selectedBanks}
                        updateSelectedOptions={handleSelectedBanks}
                        closeModal={handleModalClose}
                    />
                </Modal>
                <Modal
                    modalName='loanDetailModal'
                    visible={loanDetailModal}
                    closeModal={handleModalClose}
                >
                    <LoanDetail />
                </Modal>
            </main>
        </React.Fragment>
    );
};

export default LoanResult;