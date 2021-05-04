import React, { Component, useEffect } from 'react'
import Features from './Features'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Showcase = () => {
        useEffect(()=>{
            Aos.init({
                duration: 2000
            })
        }, [])
        return (
            <div className="showcase">
                <div className="box1">
                    <ul>
                        <li className="bef">Featured Project</li>
                        <li className="med" ><a href="">ClearMotion It’s gonna be a comfy ride</a></li>
                        <li className="aft" ><a href="">more projects</a></li>
                    </ul>
                </div>
                <div className="box2" data-aos="fade-in">
                    <img src="https://ueno.co/static/66e23e8d5a46f6cfd8bc28aaebe3b81f/8fc1f/90594130-e628-4097-a7a4-53c62a9ad61a_espn-thumb.webp" alt="image" className="imageSec"/>
                </div>
                <div className="box3">
                Ueno is a full-service agency,  busy designing and building <br/> beautiful digital products, brands, and experiences.
                </div>
            </div>
        )
}

export default Showcase
