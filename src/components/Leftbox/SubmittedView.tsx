import React from 'react';

interface SubmittedViewProps {
    updateSubmitted: () => void;
}

const SubmittedView: React.FC<SubmittedViewProps> = ({updateSubmitted}) => {
    return (
        <>
            <section className="Leftbox-Submitted">
                <p>Application Form Submitted</p>
                <img
                    src="../images/submitted.svg"
                    alt="Submitted"
                />
                <button
                    className="Button Button-FitContent"
                    onClick={updateSubmitted}
                >
                    Back to Main Menu
                </button>
            </section>
        </>
    );
}

export default SubmittedView;