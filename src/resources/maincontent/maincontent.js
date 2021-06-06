import React from "react"

import "./maincontent.css"
import Feature from "./feature/feature"
import image from "./feature/proto.png"
import flipimage from "./feature/protoflip.png"

var scwidth = window.innerWidth;
var featdirection = (scwidth>700)?"row-reverse" : "column";
var featimgwidth = (scwidth>700)?"40%":"";
var featinfowidth = (scwidth>700)?"60%":"100%";
var featleftmargin = (scwidth>700)?"60px":"";

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
    <Feature fimage={image} heading="1. Some Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure."/>

    <Feature fimage={flipimage} direction={featdirection} heading="2. Some Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure." imgwidth={featimgwidth} infowidth={featinfowidth} leftmargin={featleftmargin}/>

    <Feature fimage={image} heading="3. Some Title" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure."/>
    </div>
    )
}

export default MainContent