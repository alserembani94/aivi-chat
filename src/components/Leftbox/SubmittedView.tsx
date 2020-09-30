import React, { FC } from 'react';
import { Images } from '../../utils/Images';

interface SubmittedViewProps {
    updateSubmitted: () => void;
}

const SubmittedView: FC<SubmittedViewProps> = ({updateSubmitted}) => {
    return (
        <>
            <section className="Leftbox-Submitted">
                <p>Application Form Submitted</p>
                <img
                    src={Images.image_submitted}
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