import React from 'react'

function FeatureUtil(props) {
    return (
        <div className="feature">
            <ul>
                <li className="dval"><a href="#">{props.dval}</a></li>
                <li className="hval"><a href="#">{props.hval}</a></li>
                <li className="lval"><a href="#"> Read More </a></li>
            </ul>
        </div>
    )
}

export default FeatureUtil
