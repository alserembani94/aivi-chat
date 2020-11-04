import React, { useState } from 'react';
import { Images } from '../../utils/Images';
import '../../styles/SiteBlogList.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useHistory } from 'react-router-dom';

const SiteBlogList: React.FC = () => {
    var datas = [
        {
            img:            Images.image_site_img1, 
            tag:            "featured", 
            topic:          "data", 
            title:          "Financial World Trending", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        }, 
        {
            img:            Images.image_site_img2,
            topic:          "FINANCE", 
            title:          "Multiplayers in Finance", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img3,
            topic:          "data", 
            title:          "Charts are SkyRocketing", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img4,
            topic:          "finance", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img5,
            topic:          "finance", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img6,
            topic:          "finance", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img7,
            topic:          "finance", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img8,
            topic:          "moratorium", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img9,
            topic:          "data", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
        {
            img:            Images.image_site_img10,
            topic:          "data", 
            title:          "Financial World with Aivi", 
            description:    "Explore and test different ideas, themes, and styles instantly whether you want to experiment with your team. If that is not to your liking, you may try out other features we have offered.",
            date:           "28 August 2020",
            id:             1,
        },
    ];

    const history = useHistory();

    const handleOpenArticle = (id: string | number) => history.push(`/blog/${id.toString()}`);

    const generatecard = (data : any, cardclass : string, quantity : string) => {
        if(data === undefined) return "" // Will not generate card if no any

        let subCardClass = "SiteBlogList-Body-Content-"+ quantity +"Cards";
        let subCardClass2 = "SiteBlogList-Body-Content-"+ quantity +"Cards-Card"
        return (
            <div className= {cardclass}>
                <div className= {subCardClass}>
                    <div className={subCardClass2}>
                        <img src={data.img} alt=""/>
                        {
                            data.tag && <div className="SiteBlogList-Body-Content-ImageContainer-Description">{data.tag}</div>
                        }
                        <div className="SiteBlogList-Body-Content-CardDesc">
                            <div className="SiteBlogList-Body-Content-CardDesc-Inner">
                                <div className="SiteBlogList-Body-Content-Topic">{data.topic}</div>
                                <button className="SiteBlogList-Body-Content-Title" onClick={() => handleOpenArticle(data.id)}>{data.title}</button>
                                <div className="SiteBlogList-Body-Content-Description">{data.description}</div>
                                <div className="SiteBlogList-Body-Content-Date">{data.date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );        
    }
    
    const generateblogs = () => {
        let ret = [];
        while(datas.length>0){
            if(datas.length>= 3){
                if(ret.length % 2 === 0){
                    ret.push(/* Row with 2 cards*/
                        <div className="container">
                            <div className="row">
                                {generatecard(datas.shift(), "col-12 col-md-6","2")}
                                {generatecard(datas.shift(), "col-12 col-md-6", "2")}
                            </div>
                        </div>)
                }
                else {
                    ret.push(/* Row with 2 cards*/
                        <div className="container">
                            <div className="row">
                                {generatecard(datas.shift(), "col-12 col-md-4","3")}
                                {generatecard(datas.shift(), "col-12 col-md-4", "3")}
                                {generatecard(datas.shift(), "col-12 col-md-4", "3")}
                            </div>
                        </div>)
                }
            } else if (datas.length >= 2){
                ret.push(/* Row with 2 cards*/
                    <div className="container">
                        <div className="row">
                            {generatecard(datas.shift(), "col-12 col-md-6","2")}
                            {generatecard(datas.shift(), "col-12 col-md-6", "2")}
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
        return ret;
    }

    
    const [count, setCount] = useState(2);
    
    
    return (
        <React.Fragment>
            <main className="SiteBlogList-Page">
                <Header />  
                <section className="SiteBlogList-Body">
                    <section className="SiteBlogList-Body-Section">
                        <div className="SiteBlogList-Body-Content">
                            {generateblogs().slice(0, count )}
                        </div>
                        <div className="SiteBlogList-Body-Section-Button">
                            <button className="SiteBlogList-Body-Section-Button-RedButton" onClick={() => setCount(count + 2)}>Load More</button>
                        </div>
                    </section>
                    <Footer/>
                </section>
            </main>           
        </React.Fragment>
    );
};

export default SiteBlogList;