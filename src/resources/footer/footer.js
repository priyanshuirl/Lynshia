import "./footer.css"

function Footer() {
    return (
        <footer className="vflex foot">
        <div className="vflex">
        <a href={"/#"}>
        <div className="logo flogo">
            <h3>Lynshia</h3>
            <p>Menstrual Assistant</p>
        </div>
        </a>
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
                <a href={"/#"}><li>Copyright</li></a>
                <a href={"/#"}><li>Privacy&nbsp;Policy</li></a>
                <a href={"/#"}><li>Terms of Use</li></a>
            </ul>
            </div>
            <div className="footone">
            <p className="footh">Menu</p>
            <ul>
                <a href={"/#"}><li><span className="selected">Home</span></li></a>
                <a href={"/#"}><li>About Us</li></a>
                <a href={"/#"}><li>Pee Pee</li></a>
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