import React, { useEffect } from 'react';
import Features from './Features'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Card = (props) =>{
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    }, [])
    return (
        <div className="card" data-aos="zoom-out-up">
            <div className="image">
                <img src={props.imgsrc} alt="" className="imageSec"/>
            </div>
            <div className="text">
                <h4>{props.hval}</h4>
                <p>{props.pval}</p>
            </div>
        </div>
    )
}

export default Card
