import React, { useState } from "react"

import $ from 'jquery';
import "./navbar.css"

import { Link } from 'react-router-dom'

function Navbar() {
    const [arrow, setArrow] = useState("fas fa-angle-double-down")
    const [count, setCount] = useState(0)
    return (
        <div className="fixnav vflex">
            <nav className="hflex">
                <Link to="/"><div className="logo vflex">
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div>
                </Link>
                <div className="menuwrapper hflex">
                    <div className="dmenu">
                        <ul className="dlist hflex">
                            <Link to="/"><li className="done">Home</li></Link>
                            <Link to="/aboutus"><li className="dtwo">About&nbsp;Us</li></Link>
                            <Link to="/peoplebehindlynshia"><li className="dthree">People&nbsp;Behind&nbsp;Lynshia</li></Link>
                        </ul>
                    </div>
                    <div className="navbutton hflex">
                        <ul className="hflex lol">
                            <Link to="/comingsoon">
                                <li className="login">Login</li>
                            </Link>
                            <Link to="/comingsoon">
                                <li className="signup">Sign&nbsp;Up</li>
                            </Link>
                            <span className="toggle" onClick={() => {
                                $(".one").slideToggle(100);
                                $(".two").slideToggle(200);
                                $(".three").slideToggle(300);
                                if (count === 0) {
                                    setArrow("fa fa-angle-double-up")
                                    setCount(1)
                                }
                                else if (count === 1) {
                                    setArrow("fa fa-angle-double-down")
                                    setCount(0)
                                }
                            }}><i id="marrja" className={arrow}></i></span>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="menu vflex">
                <ul className="ulhvr" onClick={() => {
                                $(".one").slideUp(100);
                                $(".two").slideUp(200);
                                $(".three").slideUp(300);
                                if (count === 0) {
                                    setArrow("fa fa-angle-double-up")
                                    setCount(1)
                                }
                                else if (count === 1) {
                                    setArrow("fa fa-angle-double-down")
                                    setCount(0)
                                }
                            }}>
                    <Link to="/"><li className="one">Home</li></Link>
                    <Link to="/aboutus"><li className="two">About&nbsp;Us</li></Link>
                    <Link to="/peoplebehindlynshia"><li className="three">People&nbsp;Behind&nbsp;Lynshia</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar