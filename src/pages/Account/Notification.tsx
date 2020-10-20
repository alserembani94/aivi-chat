import React, { FC, useState } from 'react';
// import {
//     InputBox,
// } from '../../components/CustomComponent';
import Switch from 'react-switch';
// import {
//     Images,
// } from '../../utils/Images';
// import { useEffect } from 'react';


type emailType = {
    key: string;
    title: string;
    description: string;
    status: boolean;
}
const email: emailType[] = [
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

type budgetType = {
    key: string;
    title: string;
    description: string;
    status: boolean;
}
const budget: budgetType[] = [
    {
        key: 't4',
        title: 'Budgeting App',
        description: 'Subscribe to our newsletter and receive the latest updates',
        status: false,
    },
];

const Notification: FC = () => {

    const [toggle, setToggle] = useState<any>({
        t1:email[0].status || false, 
        t2:email[1].status || false, 
        t3:email[2].status || false,
        t4:budget[0].status || false,
    });

    const handleToggle = (toggleBoolean : boolean, key: string) => {
         setToggle({...toggle, [key] : toggleBoolean });
    }

    return (
        <React.Fragment>
            <div className="Account-Content container">
                <div className="row ">
                    <div className="col-12">
                        <div className="Email">
                            <h4>Email</h4>
                            <div className="container">
                            { 
                                email.map((emailItems, index) =>(
                                    <div className="row">
                                        <div className="col-9">
                                            <h4>{emailItems.title}</h4>
                                            <p>{emailItems.description}</p>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="reward-switch" >
                                                <Switch 
                                                checked={toggle[emailItems.key]}
                                                onChange={(toggleBoolean) => handleToggle(toggleBoolean, emailItems.key)}
                                                name={emailItems.title}
                                                />
                                            </label>    
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                        <div className="Budget">
                            <div className="container">
                            { 
                                budget.map((budgetItems, index) =>(
                                    <div className="row">
                                        <div className="col-9">
                                            <h4>{budgetItems.title}</h4>
                                            <p>{budgetItems.description}</p>
                                        </div>
                                        <div className="col-3">
                                            <label htmlFor="reward-switch" >
                                                <Switch 
                                                checked={toggle[budgetItems.key]}
                                                onChange={(toggleBoolean) => handleToggle(toggleBoolean, budgetItems.key)}
                                                name={budgetItems.title}
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
        </React.Fragment>
    );
}

export default Notification;