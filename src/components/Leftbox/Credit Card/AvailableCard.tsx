import React from 'react';
import {
    MultipleCheckbox,
} from '../../CustomComponent';

const AvailableCard: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
    const optionList = [
        {
            name: 'CIMB Bank',
            label: 'CIMB Bank',
        },
        {
            name: 'Alliance Bank',
            label: 'Alliance Bank',
        },
        {
            name: 'Maybank',
            label: 'Maybank',
        },
        {
            name: 'OCBC',
            label: 'OCBC',
        },
        {
            name: 'RHB Bank',
            label: 'RHB Bank',
        },
        {
            name: 'Public Bank',
            label: 'Public Bank',
        },
        {
            name: 'BSN',
            label: 'BSN',
        },
        {
            name: 'Bank Rakyat',
            label: 'Bank Rakyat',
        },
        {
            name: 'Affin Bank',
            label: 'Affin Bank',
        },
        {
            name: 'Standard Chartered',
            label: 'Standard Chartered',
        },
        {
            name: 'Citibank',
            label: 'Citibank',
        },
        {
            name: 'UOB Malaysia',
            label: 'UOB Malaysia',
        },
        {
            name: 'Hong Leong Bank',
            label: 'Hong Leong Bank',
        },
        {
            name: 'AEON Credit Service',
            label: 'AEON Credit Service',
        },
        {
            name: 'HSBC',
            label: 'HSBC',
        },
        {
            name: 'Paydee',
            label: 'Paydee',
        },
    ];
    const tempRef = React.useRef<HTMLDivElement>(null);
    const [rowSpan, setRowSpan] = React.useState(2);

    const handleModifySelectedOptions = (selected: string[]) => {
        setSelectedOptions(selected);
    }
    
    React.useEffect(() => {
        setRowSpan(prevState => {
            if (tempRef.current) {
                if (tempRef.current.scrollWidth > 450) return 2
                else return 1;
            }
            else return prevState;
        });
    }, [tempRef]);

    return (
        <React.Fragment>
            <div id="MultipleChoice" ref={tempRef}>
                <MultipleCheckbox
                    optionList={optionList}
                    selectedOptions={selectedOptions}
                    updateSelected={handleModifySelectedOptions}
                    maxOption={3}
                    rows={rowSpan}
                />
            </div>
        </React.Fragment>
    );
};

export default AvailableCard;