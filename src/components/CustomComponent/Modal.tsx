import React from 'react';

interface ModalProps {
    children: any;
    visible: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, visible = false }) => {
    return (
        <React.Fragment>
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