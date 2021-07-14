import React, { useEffect } from "react"

import "./maincontent.css"
import tracker from "./feature/periodtracker.png"
import cramps from "./feature/periodcramps.png"
import reminder from "./feature/reminder.png"
import tips from "./feature/tips.png"
import FeatureProto from "./feature/featureproto"
import FeatureProtoFlip from "./feature/featureprotoflip"

import { Link } from "react-router-dom"

function MainContent() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="banner vflex">
                <h3>Meet <span className="lynshia">Lynshia</span></h3>
                <h4>Your Personal Menstrual Assistant</h4>
            </div>
            <div className="vflex bannerbtns">
                <Link to="/comingsoon" className="signbanner">Sign Up</Link>
                <Link to="/comingsoon" className="loginbanner">Login</Link>
                <h2 className="tour">Scroll Down to Take a Tour <i className="fas fa-arrow-circle-down"></i></h2>
            </div>
            <div className="tagwrapper vflex">
                <div className="tagbannerlol">
                    <h1>Dealing with Periods can be Tough.</h1>
                </div>
                <div className="tagbanner">
                    <h1>But with Lynshia by your side it's never been easier!</h1>
                </div>
            </div>
            <div className="iframecontainer">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_LI3syHaByM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="tile">
                <h5>What Can Lynshia Do For You?</h5>
            </div>

            <FeatureProto fimage={tracker} heading="1. Track & Predict" description="Say Goodbye to Unexpected Periods! Lynshia helps you Track and Predict your cycles to prepare you before your menstruation begins." />

            <FeatureProtoFlip fimage={cramps} heading="2. Reduce Cramp Pain" description="Say Goodbye to Painful Cramps! Lynshia Assistant will give you step by step procedures to reduce cramp pain within Minutes!" />

            <FeatureProto fimage={reminder} heading="3. Reminders" description="Never Run out of Supplies again! Lynshia will remind you to stock your menstrual hygiene products before your menstruation begins with Unique Discounts and offers !" />

            <FeatureProtoFlip fimage={tips} heading="4. Always With You" description="You're not Alone! Lynshia is a Smart Menstrual Assistant designed to assist you at Every stage of your cycle. It has dedicated Tips, Hacks and FAQ's section with Expert Guidance on almost every Topic related to Women's Health." />


            <div className="purplediv vflex">
                <h2>Making Periods Easier to Manage.</h2>
                <Link to="/comingsoon"><h4>Sign Up Today!</h4></Link>
            </div>

        </div>
    )
}

export default MainContent