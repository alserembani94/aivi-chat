import React, { FC } from 'react';
import {
    InputBox,
    InputDropdown,
    ToggleText
} from '../../CustomComponent';

interface OthersProps {
    othersDetails: any;
    handleOthersUpdate: (updatedOthers: any) => void;
};

type InputOptionType = {
    name: string;
    label: string;
    value: string;
};

type slotInputItemType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    dropdownOption?: {
        allowInput: boolean,
        optionList: InputOptionType[],
    },
    remarks?: string[],
    inputClass?: string
};

const othersFormat: slotInputItemType[] = [
    {
        inputName: 'bankLocation',
        inputState: 'bankLocation',
        inputType: 'dropdown',
        inputLabel: 'Choose one',
        dropdownOption: {
            allowInput: false,
            optionList: [
                {
                    name: 'RHB, Jalan ThNo. 5, 6, 7 & 8, Block M, Metrotown',
                    label: 'RHB, Jalan ThNo. 5, 6, 7 & 8, Block M, Metrotown',
                    value: 'RHB, Jalan ThNo. 5, 6, 7 & 8, Block M, Metrotown',
                },
                {
                    name: 'RHB, Jalan Pantai Central Building, Ground Floor',
                    label: 'RHB, Jalan Pantai Central Building, Ground Floor',
                    value: 'RHB, Jalan Pantai Central Building, Ground Floor',
                },
                {
                    name: 'RHB, Pusat Komplex, Jalan Limpas',
                    label: 'RHB, Pusat Komplex, Jalan Limpas',
                    value: 'RHB, Pusat Komplex, Jalan Limpas',
                },
                {
                    name: 'RHB, Pusat Komplex, Kajang',
                    label: 'RHB, Pusat Komplex, Kajang',
                    value: 'RHB, Pusat Komplex, Kajang',
                }
            ]
        }
    },
    {
        inputName: 'securityQuestion',
        inputState: 'securityQuestion',
        inputType: 'text',
        inputLabel: 'Mother\'s Maiden Name',
    }
];

const relativeInTheBankOptions = ['yes', 'no'];

const Others: FC<OthersProps> = ({ othersDetails, handleOthersUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedOthersItem = {...othersDetails, [stateName]: value};
        handleOthersUpdate(updatedOthersItem);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
            <p><b>Do you have relatives working in the bank?</b></p>
                <div className="row">
                    <div className="col-12">
                        <ToggleText 
                            optionList={relativeInTheBankOptions}
                            selected={othersDetails.relativeInTheBank}
                            handleToggleUpdate={(value: string) => handleInputChange(value, 'relativeInTheBank')}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p><b>Which bank do you want to pick your credit card from?</b></p>
                    </div>
                    {
                        othersFormat.map((othersItem, index) => (
                            othersItem.inputType === 'dropdown'
                            ? (
                                <InputDropdown
                                    slot={othersDetails}
                                    inputProps={othersItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                            : (
                                <InputBox
                                    value={othersDetails[othersItem.inputState]}
                                    inputProps={othersItem}
                                    handleInputChange={handleInputChange}
                                    key={index}
                                />
                            )
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Others;