import React from "react"
import "./footer.css"

import { Link } from "react-router-dom"

function Footer() {
    function copy() {
        var i = 0;
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        var toastbtn = document.querySelectorAll(".copytoast");
        toastbtn[i].classList.add("displaytoast");
        setTimeout(() => { toastbtn[i].classList.remove("displaytoast"); }, 2500);
    }
    return (
        <div>
            <footer className="vflex foot">
                <div className="vflex">
                    <Link to="/">
                        <div className="logo flogo">
                            <h3>Lynshia</h3>
                            <p>Menstrual Assistant</p>
                        </div>
                    </Link>
                    <div className="social">
                        <a href="https://twitter.com/Lynshia_app" ><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/lynshia_app/"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/lynshia/"><i className="fab fa-linkedin-in"></i></a>
                        <button onClick={copy}><i className="fas fa-share-alt"></i></button>
                        <p>&copy; All Rights Reserved</p>
                    </div>
                </div>
                <div className="list vflex">
                    <div className="footone">
                        <p className="footh">Legal</p>
                        <ul>
                            <Link to="/comingsoon"><li>Copyright</li></Link>
                            <Link to="/comingsoon"><li>Privacy&nbsp;Policy</li></Link>
                            <Link to="/comingsoon"><li>Terms of Use</li></Link>
                        </ul>
                    </div>
                    <div className="footone">
                        <p className="footh">Menu</p>
                        <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/aboutus"><li>About Us</li></Link>
                            <Link to="/peoplebehindlynshia"><li>People Behind Lynshia</li></Link>
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
            <p className="copytoast">Link&nbsp;Copied!</p>
        </div>
    )
}

export default Footer