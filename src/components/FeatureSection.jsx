import React, { useEffect } from 'react'
import Features from './Features'
import Aos from 'aos'
import 'aos/dist/aos.css';

const FeatureSection = () => {
    useEffect(() =>{
        Aos.init({
            duration:2000
        });
    }, [])
    return (
        <div className="featureSection" data-aos="flip-down">
            <div className="main-heading">
                What's New? <br/>
                Our Blog and News.
            </div>
            <Features />
        </div>
    )
}

export default FeatureSection
