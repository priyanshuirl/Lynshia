import React from "react"
import "./footer.css"

import { NavLink } from "react-router-dom"

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
                    <NavLink to="/">
                        <div className="logo flogo">
                            <h3>Lynshia</h3>
                            <p>Menstrual Assistant</p>
                        </div>
                    </NavLink>
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
                            <li><NavLink activeClassName="selected" to="/comingsoon">Copyright</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/privacypolicy">Privacy&nbsp;Policy</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/termsofuse">Terms of Use</NavLink></li>
                        </ul>
                    </div>
                    <div className="footone">
                        <p className="footh">Menu</p>
                        <ul>
                            <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/aboutus">About&nbsp;Us</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/peoplebehindlynshia">People&nbsp;Behind&nbsp;Lynshia</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/careers">Careers</NavLink></li>

                        </ul>
                    </div>
                    <div className="footone">
                        <p className="footh">Contact <i className="fas fa-envelope"></i></p>
                        <ul>
                            <a href="mailto:lynshia.app@gmail.com"><li>lynshia.app@gmail.com</li></a>
                        </ul>
                        <div className="dmca">
                            <a href="//www.dmca.com/Protection/Status.aspx?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w200-2x1-03.png?ID=02110291-7bee-4587-aee6-ae5f55d1e5a4" alt="DMCA.com Protection Status" /></a>  <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
                        </div>
                    </div>
                </div>
            </footer>
            <p className="copytoast">Link&nbsp;Copied!</p>
        </div>
    )
}

export default Footer