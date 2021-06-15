import React from "react"

import "./maincontent.css"
import tracker from "./feature/periodtracker.png"
import cramps from "./feature/periodcramps.png"
import reminder from "./feature/reminder.png"
import tips from "./feature/tips.png"
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

    <FeatureProto fimage={tracker} heading="1. Track & Predict" description="Say Goodbye to Unexpected Periods! Lynshia helps you Track and Predict your cycles to prepare you before your menstruation begins."/>

    <FeatureProtoFlip fimage={cramps} heading="2. Reduce Cramp Pain" description="Say Goodbye to Painful Cramps! Lynshia Assistant will give you step by step procedures to reduce cramp pain within Minutes!"/>

    <FeatureProto fimage={reminder} heading="3. Reminders" description="Never Run out of Supplies again! Lynshia will remind you to stock your menstrual hygiene products before your menstruation begins with Unique Discounts and offers !"/>

    <FeatureProtoFlip fimage={tips} heading="4. Always With You" description="You're not Alone! Lynshia is a Smart Menstrual Assistant designed to assist you at Every stage of your cycle. It has dedicated Tips, Hacks and FAQ's section with Expert Guidance on almost every Topic related to Women's Health."/>

    <div className="purplediv vflex">
        <h2>Making Periods Easier to Manage.</h2>
        <a href="{\#}"><h4>Sign Up Today!</h4></a>
    </div>
    
    </div>
    )
}

export default MainContent