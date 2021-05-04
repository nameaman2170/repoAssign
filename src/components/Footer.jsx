import React, { useEffect } from 'react'

import 'font-awesome/css/font-awesome.min.css';
import Features from './Features'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Footer(){
    return (
        <div className="footer">
            <div className="logo">ueno.</div>
            <div className="right-footer">
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#"><i className="fa fa-globe"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
