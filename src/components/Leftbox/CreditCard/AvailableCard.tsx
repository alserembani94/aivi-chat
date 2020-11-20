import React, { FC, useEffect, useState } from 'react';
import {
    MultipleCheckbox,
    ToggleText,
} from '../../CustomComponent';

interface AvailableCardProps {
    cardOwnership?: boolean;
    updateCardOwnership?: (status: boolean) => void;
    selectedOptions: string[];
    updateSelectedOptions: (selected: string[]) => void;
    optionLimit: number;
}

const AvailableCard: FC<AvailableCardProps> = ({cardOwnership, updateCardOwnership, selectedOptions, updateSelectedOptions, optionLimit}) => {
    const optionList = [
        {
            name: 'cimb_bank',
            label: 'CIMB Bank',
        },
        {
            name: 'alliance_bank',
            label: 'Alliance Bank',
        },
        {
            name: 'maybank',
            label: 'Maybank',
        },
        {
            name: 'ocbc',
            label: 'OCBC',
        },
        {
            name: 'rhb_bank',
            label: 'RHB Bank',
        },
        {
            name: 'public_bank',
            label: 'Public Bank',
        },
        {
            name: 'bsn',
            label: 'BSN',
        },
        {
            name: 'bank_rakyat',
            label: 'Bank Rakyat',
        },
        {
            name: 'affin_bank',
            label: 'Affin Bank',
        },
        {
            name: 'standard_chartered',
            label: 'Standard Chartered',
        },
        {
            name: 'citibank',
            label: 'Citibank',
        },
        {
            name: 'uob_malaysia',
            label: 'UOB Malaysia',
        },
        {
            name: 'hong_leong_bank',
            label: 'Hong Leong Bank',
        },
        // {
        //     name: 'AEON Credit Service',
        //     label: 'AEON Credit Service',
        // },
        {
            name: 'hsbc',
            label: 'HSBC',
        },
        // {
        //     name: 'Paydee',
        //     label: 'Paydee',
        // },
    ];
    const tempRef = React.useRef<HTMLDivElement>(null);
    const [rowSpan, setRowSpan] = useState(2);

    const handleModifySelectedOptions = (selected: string[]) => {
        updateSelectedOptions(selected);
    }
    
    useEffect(() => {
        setRowSpan(prevState => {
            if (tempRef.current) {
                if (tempRef.current.scrollWidth > 450) return 2
                else return 1;
            }
            else return prevState;
        });
    }, [tempRef]);

    const cardOwnershipOptions = ['Yes', 'No'];
    const handleCardOwnershipToggle = (value: string) => {
        updateCardOwnership && updateCardOwnership(value === cardOwnershipOptions[0] ? false : true);
        value === cardOwnershipOptions[0] && updateSelectedOptions([]);
    }

    return (
        <React.Fragment>
            <div ref={tempRef}>
                {
                    (cardOwnership !== undefined) &&
                    <ToggleText
                        label="Is this your first card?"
                        optionList={cardOwnershipOptions}
                        selected={cardOwnership ? cardOwnershipOptions[1] : cardOwnershipOptions[0]}
                        handleToggleUpdate={(value: string) => handleCardOwnershipToggle(value)}
                    />
                }
                {
                    (cardOwnership === undefined || cardOwnership)
                    && <MultipleCheckbox
                        optionList={optionList}
                        selectedOptions={selectedOptions}
                        updateSelected={handleModifySelectedOptions}
                        maxOption={3}
                        rows={rowSpan}
                    />
                }
                
            </div>
        </React.Fragment>
    );
};

export default AvailableCard;