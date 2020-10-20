import React, { FC, useState } from 'react';
// import {
//     InputBox,
// } from '../../components/CustomComponent';
import Switch from 'react-switch';
import {
    Images,
} from '../../utils/Images';
// import { useEffect } from 'react';


type manageDataType = {
    key: string;
    title: string;
    description: string;
    status: boolean;
}
const manageData: manageDataType[] = [
    {
        key: 't1',
        title: 'Reward Notification',
        description: 'Subscribe to our newsletter and receive the latest updates',
        status: false,
    },
    {
        key: 't2',
        title: 'Latest Promotion',
        description: 'Subscribe to our newsletter and receive the latest updates',
        status: false,
    },
    {
        key: 't3',
        title: 'Card Promotion',
        description: 'Subscribe to our newsletter and receive the latest updates',
        status: false,
    }
];
const PersonalData: FC = () => {

    const [toggle, setToggle] = useState<any>({
        t1:manageData[0].status || false, 
        t2:manageData[1].status || false, 
        t3:manageData[2].status || false
    });

    const handleToggle = (toggleBoolean : boolean, key: string) => {
         setToggle({...toggle, [key] : toggleBoolean });
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="Account-Content">
                    <div className="row ">
                        <div className="col-12">
                            <div className="DownloadData">
                                <h1>Personal Data</h1>
                                <p>
                                    Request access to your personal data on AIVI. You may download an <br/> archive at any time. <a href="#a">Learn more</a>
                                </p>
                                <h3>Download &nbsp; <img src={Images.arrow_right} alt=""/></h3>
                            </div>
                            <div className="ManageData">
                                <h2>Manage Data</h2>
                                <div className="container">
                                { 
                                    manageData.map((manageDataItems, index) =>(
                                        <div className="row">
                                            <div className="col-9">
                                                <h4>{manageDataItems.title}</h4>
                                                <p>{manageDataItems.description}</p>
                                            </div>
                                            <div className="col-3 Switch">
                                                <label htmlFor="reward-switch" >
                                                    <Switch 
                                                    checked={toggle[manageDataItems.key]}
                                                    onChange={(toggleBoolean) => handleToggle(toggleBoolean, manageDataItems.key)}
                                                    name={manageDataItems.title}
                                                    checkedIcon={false}
                                                    uncheckedIcon={false}
                                                    onHandleColor={"#D83445"}
                                                    offHandleColor={"#D83445"}
                                                    onColor={"#FFFFFF"}
                                                    offColor={"#FFFFFF"}
                                                    />
                                                </label>    
                                            </div>
                                        </div>
                                    ))
                                }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </React.Fragment>
    );
}

export default PersonalData;