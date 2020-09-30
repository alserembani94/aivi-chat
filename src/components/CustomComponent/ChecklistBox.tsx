import React, { FC, useEffect, useState } from 'react';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

type ChecklistItemType = {
    checked: boolean,
    name: string,
    amount?: string,
    remarks?: string[],
};

type ChecklistType = ChecklistItemType[];

interface ChecklistBoxProps {
    checklistItem: ChecklistItemType;
    updateChecklistItem: (updatedChecklistItem: ChecklistItemType) => void;
}

interface MultiChecklistBoxProps {
    checklistList: ChecklistType;
    updateChecklistList: (udpatedChecklistList : ChecklistType) => void;
};

const ChecklistBox: FC<ChecklistBoxProps> = ({ checklistItem, updateChecklistItem}) => {
    const handleUpdate = (value: string | boolean, key: string) => {
        updateChecklistItem({...checklistItem, [key]: value});
    }

    return (
        <React.Fragment>
            <div className="ChecklistBox-Container">
                <button
                    className="ChecklistBox-Checkbox"
                    data-checked={checklistItem.checked}
                    onClick={() => handleUpdate(!checklistItem.checked, 'checked')}
                >
                    <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Check' }} >
                        <IoIosCheckmark />
                    </IconContext.Provider>
                </button>
                <input className="ChecklistBox-Label"
                    value={checklistItem.name}
                    placeholder="Enter new input"
                    readOnly={checklistItem.remarks?.includes('readonly')}
                    onChange={({ currentTarget: { value } }) => handleUpdate(value, 'name')}
                />
                {
                    checklistItem.remarks?.includes('amount') && checklistItem.checked && (
                        <div className="ChecklistBox-Amount">
                            RM <input
                                value={checklistItem.amount}
                                type="number"
                                min={0}
                                onChange={({ currentTarget: { value } }) => handleUpdate(value, 'amount')}
                            />
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    );
};

const MultiChecklistBox: FC<MultiChecklistBoxProps> = ({checklistList, updateChecklistList}) => {
    const [prevListLength, setPrevListLength] = useState(checklistList.length);
    const handleChecklistItemUpdate = (updatedChecklistItem: ChecklistItemType, index: number) => {
        const updatedChecklist = checklistList.map((checklistItem, updatedIndex) => updatedIndex === index ? updatedChecklistItem : checklistItem);
        updateChecklistList(updatedChecklist);
    }

    const addObjectToChecklist = () => {
        const newChecklistObject = {
            checked: true,
            name: '',
            amount: '0',
            remarks: ['amount'],
        };
        updateChecklistList([...checklistList, newChecklistObject]);
    }

    useEffect(() => {
        if (prevListLength !== checklistList.length) {
            const containers = document.getElementsByClassName('ChecklistBox-Container');
            containers[containers.length - 2].getElementsByTagName('input')[0].focus();
            setPrevListLength(checklistList.length);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checklistList]);

    return (
        <React.Fragment>
            {
                checklistList.map((checklistItem, index) => (
                    <ChecklistBox
                        checklistItem={checklistItem}
                        updateChecklistItem={(checklistItem) => handleChecklistItemUpdate(checklistItem, index)}
                        key={index}
                    />
                ))
            }
            <div className="ChecklistBox-Container ChecklistBox-Container-New">
                <button
                    className="ChecklistBox-Checkbox"
                    id="Testing"
                    data-checked={false}
                />
                <input className="ChecklistBox-Label"
                    value={`- Add Your Own -`}
                    readOnly={true}
                    onClick={addObjectToChecklist}
                />
            </div>
        </React.Fragment>
    );
};

export {
    ChecklistBox,
    MultiChecklistBox,
};