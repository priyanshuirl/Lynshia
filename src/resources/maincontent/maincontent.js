import React from "react"

import "./maincontent.css"

function MainContent(){
    return (
        <div>
        <div className="banner vflex">
        <h3>Meet <span className="lynshia">Lynshia</span></h3>
        <h4>Your Personal Menstrual Assistant</h4>
    </div>
    <div className="vflex bannerbtns">
        <a href={"/#"} className="loginbanner">Login</a>
        <a href={"/#"} className="signbanner">Sign Up</a>
        <h2 className="tour">Take a Tour <i className="fas fa-arrow-circle-down"></i></h2>
    </div>
    <div className="tagwrapper vflex">
        <div className="tagbannerlol">
            <h1>Dealing with Periods can be Tough.</h1>
        </div>
    <div className="tagbanner">
        <h1>But with Lynshia by your side it's never been easier!</h1>
    </div>
    </div>
    <div className="tile">
        <h5>What Can Lynshia Do For You?</h5>
    </div>
    </div>
    )
}

export default MainContent