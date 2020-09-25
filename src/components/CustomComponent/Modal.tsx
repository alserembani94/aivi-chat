import React from 'react';

interface ModalProps {
    children: any;
    modalName: string;
    visible: boolean;
    closeModal: (modalName: string) => void;
}

const Modal: React.FC<ModalProps> = ({ children, modalName, visible = false, closeModal }) => {
    return (
        <React.Fragment>
            <section className="Modal-Outside" data-visible={visible} onClick={() => closeModal(modalName)} />
            <section className="Modal-Container" data-visible={visible}>
                    <div className="Modal-Wrapper">
                        {
                            children && children
                        }
                    </div>
            </section>
        </React.Fragment>
    );
}

export default Modal;