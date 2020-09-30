import React, { FC, useEffect } from 'react';

interface ModalProps {
    children: any;
    modalName: string;
    visible: boolean;
    closeModal: (modalName: string) => void;
}

const Modal: FC<ModalProps> = ({ children, modalName, visible = false, closeModal }) => {
    const modalElement = React.useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (modalElement.current && !modalElement.current.contains(event.target)) {
                if (visible) {
                    closeModal(modalName);
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalElement, visible]);

    return (
        <React.Fragment>
            <section className="Modal-Container" data-visible={visible}>
                    <div className="Modal-Wrapper" ref={modalElement}>
                        {
                            children && children
                        }
                    </div>
            </section>
        </React.Fragment>
    );
}

export default Modal;