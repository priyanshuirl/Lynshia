import React from "react"
import "./footer.css"

import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className="vflex foot">
        <div className="vflex">
        <Link to="/lynshia">
        <div className="logo flogo">
            <h3>Lynshia</h3>
            <p>Menstrual Assistant</p>
        </div>
        </Link>
        <div className="social">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fas fa-share-alt"></i>
            <p>&copy; All Rights Reserved</p>
        </div>
        </div> 
        <div className="list vflex">
            <div className="footone">
            <p className="footh">Legal</p>
            <ul>
                <Link to="/lynshia/comingsoon"><li>Copyright</li></Link>
                <Link to="/lynshia/comingsoon"><li>Privacy&nbsp;Policy</li></Link>
                <Link to="/lynshia/comingsoon"><li>Terms of Use</li></Link>
            </ul>
            </div>
            <div className="footone">
            <p className="footh">Menu</p>
            <ul>
                <Link to="/lynshia"><li><span className="selected">Home</span></li></Link>
                <Link to="/lynshia/comingsoon"><li>About Us</li></Link>
                <Link to="/lynshia/comingsoon"><li>Pee Pee</li></Link>
            </ul>
            </div>
            <div className="footone">
            <p className="footh">Contact <i className="fas fa-envelope"></i></p>
            <ul>
                <a href="mailto:lynshia.app@gmail.com"><li>lynshia.app@gmail.com</li></a>
            </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer