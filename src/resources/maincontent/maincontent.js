import React from "react"

import "./maincontent.css"
import image from "./feature/proto.png"
import flipimage from "./feature/protoflip.png"
import FeatureProto from "./feature/featureproto"
import FeatureProtoFlip from "./feature/featureprotoflip"

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

    <FeatureProto fimage={image} heading="1. Title One" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure."/>

    <FeatureProtoFlip fimage={flipimage} heading="2. Title Two" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure."/>

    <FeatureProto fimage={image} heading="3. Title Three" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure."/>

    <FeatureProtoFlip fimage={flipimage} heading="4. Title Four" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quos provident dolor quasi velit consequatur ex repellat harum vel vitae facilis laborum iure."/>

    </div>
    )
}

export default MainContent