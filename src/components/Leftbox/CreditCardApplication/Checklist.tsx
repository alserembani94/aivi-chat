import React, { FC } from 'react';
import {
    ChecklistBox,
} from '../../CustomComponent';

type ChecklistItemType = {
    checked: boolean,
    name: string,
    amount?: string,
    remarks?: string[],
};

type ChecklistType = ChecklistItemType[];

interface ChecklistProps {
    checklistList: ChecklistType;
    updateChecklist: (updatedChecklist: ChecklistType) => void;
};



const Checklist: FC<ChecklistProps> = ({ checklistList, updateChecklist }) => {
    const handleChecklistItemUpdate = (updatedChecklistItem: ChecklistItemType, index: number) => {
        const updatedChecklist = checklistList.map((checklistItem, updatedIndex) => updatedIndex === index ? updatedChecklistItem : checklistItem);
        updateChecklist(updatedChecklist);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
            {
                checklistList.map((checklistItem, index) => (
                    <ChecklistBox
                        checklistItem={checklistItem}
                        updateChecklistItem={(checklistItem) => handleChecklistItemUpdate(checklistItem, index)}
                        key={index}
                    />
                ))
            }
            </div>
        </React.Fragment>
    );
}

export default Checklist;