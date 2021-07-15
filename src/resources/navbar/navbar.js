import React, { useState } from "react"

import $ from 'jquery';
import "./navbar.css"

import { NavLink } from 'react-router-dom'

function Navbar() {
    const [arrow, setArrow] = useState("fas fa-angle-double-down")
    const [count, setCount] = useState(0)
    return (
        <div className="fixnav vflex">
            <nav className="hflex">
                <NavLink to="/"><div className="logo vflex">
                    <h3>Lynshia</h3>
                    <p>Menstrual Assistant</p>
                </div>
                </NavLink>
                <div className="menuwrapper hflex">
                    <div className="dmenu">
                        <ul className="dlist hflex">
                            <li className="done"><NavLink exact activeClassName="selected" to="/" >Home</NavLink></li>
                            <li className="dtwo"><NavLink activeClassName="selected" to="/aboutus" >About&nbsp;Us</NavLink></li>
                            <li className="dfour"><NavLink activeClassName="selected" to="/careers" >Careers</NavLink></li>
                            <li className="dthree"><NavLink activeClassName="selected" to="/peoplebehindlynshia">People&nbsp;Behind&nbsp;Lynshia</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbutton hflex">
                        <ul className="hflex lol">
                            <NavLink to="/comingsoon">
                                <li className="login">Login</li>
                            </NavLink>
                            <NavLink to="/comingsoon">
                                <li className="signup">Sign&nbsp;Up</li>
                            </NavLink>
                            <span className="toggle" onClick={() => {
                                $(".one").slideToggle(100);
                                $(".two").slideToggle(200);
                                $(".three").slideToggle(300);
                                $(".four").slideToggle(400);
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
                    $(".four").slideUp(400);
                    if (count === 0) {
                        setArrow("fa fa-angle-double-up")
                        setCount(1)
                    }
                    else if (count === 1) {
                        setArrow("fa fa-angle-double-down")
                        setCount(0)
                    }
                }}>
                    <li className="one"><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                    <li className="two"><NavLink activeClassName="selected" to="/aboutus">About&nbsp;Us</NavLink></li>
                    <li className="four"><NavLink exact activeClassName="selected" to="/careers">Careers</NavLink></li>
                    <li className="three"><NavLink activeClassName="selected" to="/peoplebehindlynshia">People&nbsp;Behind&nbsp;Lynshia</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar