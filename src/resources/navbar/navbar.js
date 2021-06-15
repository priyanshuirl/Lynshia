import React, {useState} from "react"
import $ from 'jquery';
import "./navbar.css"
function Navbar (){
    const [arrow, setArrow]=useState("fas fa-angle-double-down")
    const [count, setCount]=useState(0)
    return (
            <div className="fixnav vflex">
    <nav className="hflex">
       <a href={"/#"}><div className="logo vflex">
            <h3>Lynshia</h3>
            <p>Menstrual Assistant</p>
        </div></a>
        <div className="menuwrapper hflex">
        <div className="dmenu">
            <ul className="dlist hflex">
               <a href={"/#"}><li className="selected done">Home</li></a>
               <a href={"/#"}><li className="dtwo">About&nbsp;Us</li></a>
               <a href={"/#"}><li className="dthree">PeePee</li></a>
            </ul>
        </div>
        <div className="navbutton hflex">
            <ul className="hflex lol">
                <a href={"/#"}>
                    <li className="login">Login</li>
                </a>
                <a href={"/#"}>
                    <li className="signup">Sign&nbsp;Up</li>
                </a>
                <span className="toggle" onClick={()=>{
                      $(".one").slideToggle(100);
                      $(".two").slideToggle(200);
                      $(".three").slideToggle(300);
                      if (count===0){
                          setArrow("fa fa-angle-double-up")   
                          setCount(1)   
                      }        
                      else if (count===1){        
                        setArrow("fa fa-angle-double-down")  
                        setCount(0)
                      }  
                }}><i id="marrja" className={arrow}></i></span>
            </ul>
        </div>
        </div>
    </nav>
    <div className="menu vflex">
        <ul className="ulhvr">
           <a href={"/#"}><li className="one"><span className="selected">Home</span></li></a>
           <a href={"/#"}><li className="two">About Us</li></a>
           <a href={"/#"}><li className="three">PeePee</li></a>
        </ul>
    </div>
</div>
    )
}

export default Navbar