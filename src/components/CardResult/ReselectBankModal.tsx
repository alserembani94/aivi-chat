import React from 'react';
import {
    IoIosCheckmark,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import AvailableCard from '../Leftbox/Credit Card/AvailableCard';

// Construct types for component props
interface ReselectBankModalProps {
    selectedBanks: string[];
    updateSelectedOptions: (updatedSelectedBanks: any) => void;
    closeModal: (modalName: string) => void;
}

const ReselectBankModal: React.FC<ReselectBankModalProps> = ({ selectedBanks, updateSelectedOptions, closeModal }) => {
    const banksLimit = 1;
    return (
        <React.Fragment>
            <div className="ModalContent-CreditCardResult-Section">
                <div className="ModalContent-CreditCardResult-Container">
                    <p className="ModalContent-CreditCardResult-Title">Choose your preferred bank...</p>
                    <AvailableCard
                        selectedOptions={selectedBanks}
                        updateSelectedOptions={updateSelectedOptions}
                        optionLimit={banksLimit}
                    />
                </div>
            </div>
            <div className="ModalContent-CreditCardResult-Action">
                <button
                    className="ModalContent-CreditCardResult-Action-Cancel"
                    onClick={() => closeModal('searchModal')}
                >Cancel</button>
                <button
                    className="ModalContent-CreditCardResult-Action-Confirm"
                    onClick={() => closeModal('searchModal')}
                >
                    <IconContext.Provider value={{ className: 'Icon Icon-Light Icon-Result-Check' }} >
                        <IoIosCheckmark />
                    </IconContext.Provider>
                </button>
            </div>
        </React.Fragment>
    );
};

export default ReselectBankModal;