import React, { useEffect } from "react"
import './aboutus.css';

import { Link } from "react-router-dom"

function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div class="aboutbanner vflex">
                <h1>About Us</h1>
            </div>
            <div class="contentbanner vflex">
                <p class="head">Lynshia is one of the World's Most Innovative and Fastest Growing women's health platforms.</p>
                <p class="content">
                    Menstruation has always been considered a taboo in mainstream society and often times we find women struggling with this even in the 21st Century many times even risking their health due to lack of awareness and misinformation.<br /><br />
                    We here at Lynshia break the stereotypes and Provide crucial assistance and support to women across the Globe during those times through our virtual assistant.
                </p>
                <p class="tagbanner tgban"> Our goal is to empower every single woman during her menstruation and Beyond.</p>
                <p class="content"> We built a Smart Personal Assistant that provides a plethora of features and crucial assistance to women during their Menstruation, from Tacking and predicting their cycles to helping manage and reduce their cramps while providing help and support through our Dedicated FAQ's, tips, tricks section, and Reminders.</p>
            </div>
            <Link to="/comingsoon">
                <div className="purplediv vflex">
                    <h2>Making Periods Easier to Manage.</h2>
                    <h4>Sign Up Today!</h4>
                </div>
            </Link>
        </div>
    )
}

export default AboutUs