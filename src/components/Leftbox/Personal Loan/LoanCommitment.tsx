import React from 'react';
import {
    MultiChecklistBox,
} from '../../CustomComponent';

type ChecklistItemType = {
    checked: boolean,
    name: string,
    amount?: string,
    remarks?: string[],
};

type ChecklistType = ChecklistItemType[];

interface LoanCommitmentProps {
    loanCommitments: ChecklistType;
    updateLoanCommitments: (updatedLoanCommitments: ChecklistType) => void;
};

const LoanCommitment: React.FC<LoanCommitmentProps> = ({ loanCommitments, updateLoanCommitments }) => {

    const handleLoanCommitmentsUpdate = (updatedLoanCommitments: ChecklistType) => {
        updateLoanCommitments(updatedLoanCommitments);
    }

    return (
        <MultiChecklistBox
            checklistList={loanCommitments}
            updateChecklistList={handleLoanCommitmentsUpdate}
        />
    );
};

export default LoanCommitment;