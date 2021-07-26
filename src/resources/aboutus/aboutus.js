import React, { useEffect } from "react"
import './aboutus.css';

import { Link } from "react-router-dom"

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="aboutbanner vflex">
                <h1>About Us</h1>
            </div>
            <div className="abtwrap vflex">
                <div className="alogo vflex">
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div>
                <p className="head">Lynshia is one of the World's Most Innovative and Fastest Growing women's health platforms.</p>
            </div>
            <div className="contentbanner vflex">
                <h5>What does Lynshia do?</h5>
                <p className="content">
                    We here at Lynshia break the stereotypes and Provide crucial assistance and support to women across the Globe during their Menstruation and Beyond through our virtual assistant, Lynshia.</p>
                <h5>What inspires Lynshia?</h5>
                <p className="content"> Menstruation has always been considered a taboo in the mainstream society and often times we find women struggling with this even in the 21st Century, many a times even risking their health due to lack of awareness and misinformation.<br /><br /> This had to change, and ever since it's inception Team Lynshia is fueled by the mission to bring about a positive change.
                </p>
                <h5>What is Our Goal?</h5>
                <p className="tagbanner tgban"> Our Goal is to empower every single woman during her menstruation and Beyond.</p>
                <h5>How does Lynshia work?</h5>
                <p className="content"> We built a Smart Personal Assistant that provides a plethora of features and crucial assistance to women during their Menstruation, from Tracking and predicting their cycles to helping manage and reduce their cramps while providing help and support through our Dedicated FAQ's, tips, tricks section, and Reminders.</p>
            </div>
            <div className="purplediv vflex">
                <h2>Making Periods Easier to Manage.</h2>
                <Link to="/comingsoon"><h4>Sign Up Today!</h4></Link>
            </div>
        </div>
    )
}

export default AboutUs