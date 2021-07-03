import React, { useEffect } from "react"
import "./peoplebehindlynshia.css"

import Member from "./member/member"
import MemberFlip from "./memberflip/memberflip"


import shu from "./shu.jpg"
import shia from "./shia.jpg"

import { Link } from "react-router-dom"

function PeopleBehindLynshia() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="vflex pblbanner">
                <h1>People Behind Lynshia</h1>
            </div>
            <div className="vflex pblcont">
                <h2>Meet the Awesome People who Made Lynshia Happen.</h2>
            </div>
            <div className="vflex pbl">

                <Member image={shu} name="Priyanshu Mishra" title="Co-Founder and President" description="Swiss Army Knife! From the Frontend and Backend to Marketing and SEO there's no challenge he can't Handle. A CSE major Undergrad Student and a Full Stack developer with an Eye for Design, he has Excellent experience in Project Management and Leading Successful teams. Right from the Inception and Ideation to Prototyping and Development, he has played a crucial role in making the Lynshia a Reality." linkedin="https://www.linkedin.com/in/priyanshuirl/" github="https://github.com/priyanshuirl" email="priyanshu12651265@gmail.com" instagram="https://www.instagram.com/priyanshu_irl_/" />

                <MemberFlip image={shia} name="Arshia Sandhu" title="Co-Founder and CEO" description="Miss Magic! With her unparalleled Creativity and Development Skills, Arshia gave Lynshia its magic. A Bachelor of Computer Science student from the University of Guelph and A Full Stack Developer, she holds a minor in Project Management. Arshia never fails to amaze us with her Creative solutions to Challenging Problems and out of the box Ideas. She is the Driving Force behind Team Lynshia." linkedin="https://www.linkedin.com/in/arshiasandhu/" github="https://github.com/arshiaaaa" email="arshiasandhu07@gmail.com" instagram="https://www.instagram.com/arshiaaa._._/" />

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

export default PeopleBehindLynshia