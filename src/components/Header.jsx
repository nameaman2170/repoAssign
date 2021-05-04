import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="logo">ueno.</div>
                <div className="right-menu">
                    <ul>
                       <li><a href="#">Servises</a></li> 
                       <li><a href="#">Clients</a></li> 
                       <li><a href="#">careers</a></li> 
                       <li><a href="#">About</a></li> 
                       <li><a href="#"> <button className="btn">Contact</button></a></li> 
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
