
import React, { FC } from 'react';
import {
    InputBox,
} from '../../components/CustomComponent';
import { Images } from '../../utils/Images';

interface ProfileDetailsProps {
    ProfileDetails: any;
    handleProfileDetailsUpdate: (updateWorkDetails: any) => void;
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

const profileDetailsFormat: slotInputItemType[] = [
    {
        inputName: 'username',
        inputState: 'username',
        inputType: 'text',
        inputLabel: 'Username'
    },
    {
        inputName: 'email',
        inputState: 'email',
        inputType: 'email',
        inputLabel: 'Email'
    },
    {
        inputName: 'password',
        inputState: 'password',
        inputType: 'password',
        inputLabel: 'Password'
    },
    {
        inputName: 'phone',
        inputState: 'phone',
        inputType: 'number',
        inputLabel: 'Phone'
    },
]

const Profile: FC<ProfileDetailsProps> = ({ ProfileDetails, handleProfileDetailsUpdate }) => {
    const handleInputChange = (value: string, stateName: string) => {
        const updatedProfileDatailsItem = {...ProfileDetails, [stateName]: value};
        handleProfileDetailsUpdate(updatedProfileDatailsItem);
    };

    return (
        <React.Fragment>
            <main className="Profile-Body">
                <section className="Profile-Body-Section">
                    <div className="Profile-Body-Content">
                        <div className="container">
                            <div className="row Profile-Body-Content-Row">
                                <div className="col-3">
                                    <div className="Profile-Body-Content-ProfilePicture">
                                        <div className="Profile-Body-Content-ProfilePicture-Img">
                                            <img src={Images.icon_ProfilePicture} alt="Profile Pic"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-9">
                                    {
                                        profileDetailsFormat.map((profileDetailsItems, index) => (
                                            <InputBox 
                                                value={ProfileDetails[profileDetailsItems.inputState]}
                                                inputProps={profileDetailsItems}
                                                handleInputChange={handleInputChange}
                                                key={index}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="row Profile-Body-Content-Row">
                                <div className="col-12">
                                    <div className="Profile-Body-Content-Row-Delete">
                                        <a>Delete Account <img src={Images.arrow_right}></img></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Profile;