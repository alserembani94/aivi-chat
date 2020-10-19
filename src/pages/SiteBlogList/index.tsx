import React, { useState } from 'react';
import { Images } from '../../utils/Images';
import '../../styles/SiteBlogList.scss';

const SiteBlogList: React.FC = () => {
    var datas = [
        {
            img:Images.image_site_img1, 
            feature:"FEATURED", 
            topic:"DATA", 
            title:"Financial World Trending", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        }, 
        {
            img:Images.image_site_img2, 
            feature:0, 
            topic:"FINANCE", 
            title:"Multiplayers in Finance", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img3, 
            feature:0, 
            topic:0, 
            title:"Charts are SkyRocketing", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img4, 
            feature:"FEATURED", 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img5, 
            feature:0, 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img6, 
            feature:0, 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img7, 
            feature:0, 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img8, 
            feature:0, 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img9, 
            feature:0, 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
        {
            img:Images.image_site_img10, 
            feature:0, 
            topic:0, 
            title:"Financial World with Aivi", 
            description:"Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:"28 August 2020"
        },
    ];

    const generatecard = (data : any, cardclass : string, quantity : string) => {
        if(data === undefined){
            return ""
        }
        let subCardClass = "SiteBlogList-Body-Content-"+ quantity +"Cards";
        let subCardClass2 = "SiteBlogList-Body-Content-"+ quantity +"Cards-Card"
        return <div className= {cardclass}>
            <div className= {subCardClass}>
                <div className={subCardClass2}>
                    <img src={data.img} />
                    {data.feature != 0?
                        <div className="SiteBlogList-Body-Content-ImageContainer-Description"><div>{data.feature}</div></div>
                    :""}
                    <div className="SiteBlogList-Body-Content-CardDesc">
                        <div className="SiteBlogList-Body-Content-CardDesc-Inner">
                            <div>{data.topic}</div>
                            <div>{data.title}</div>
                            <div>{data.description}</div>
                            <div>{data.date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    }
    const generateblogs = () => {
        let ret = [];
        while(datas.length>0){
            if(datas.length>= 3){
                if(ret.length % 2 == 0){
                    ret.push(/* Row with 2 cards*/
                        <div className="container">
                            <div className="row">
                                {generatecard(datas.shift(), "col-6","2")}
                                {generatecard(datas.shift(), "col-6", "2")}
                            </div>
                        </div>)
                }
                else {
                    ret.push(/* Row with 2 cards*/
                        <div className="container">
                            <div className="row">
                                {generatecard(datas.shift(), "col-4","3")}
                                {generatecard(datas.shift(), "col-4", "3")}
                                {generatecard(datas.shift(), "col-4", "3")}
                            </div>
                        </div>)
                }
            } else if (datas.length >= 2){
                ret.push(/* Row with 2 cards*/
                    <div className="container">
                        <div className="row">
                            {generatecard(datas.shift(), "col-6","2")}
                            {generatecard(datas.shift(), "col-6", "2")}
                        </div>
                    </div>)
            } else {
                ret.push(/* Row with 2 cards*/
                    <div className="container">
                        <div className="row">
                            {generatecard(datas.shift(), "col-12","1")}
                        </div>
                    </div>)
            }
        }
        return ret
    }

    
    const [count, setCount] = useState(2);
    
    
    return (
        <React.Fragment>
            
            <main className="SiteBlogList-Body">
                <section className="SiteBlogList-Body-Section">
                    <div className="SiteBlogList-Body-Content">
                        {generateblogs().slice(0, count )}
                    </div>
                    <div className="SiteBlogList-Body-Section-Button">
                        <button className="SiteBlogList-Body-Section-Button-RedButton" onClick={() => setCount(count + 2)}>Load More</button>
                    </div>

                </section>
                        
            </main>
        </React.Fragment>
    );
};

export default SiteBlogList;