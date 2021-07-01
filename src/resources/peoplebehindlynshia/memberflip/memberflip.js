import React from "react"
import "./memberflip.css"

function MemberFlip(props) {
    return (
        <div className="vflex pblmemberflip">
            <div className="vflex pblwrapper">
                <div className="pblmempic" style={{ backgroundImage: `url("${props.image}")` }}></div>
                <div className="vflex emldiv">
                    <div className="memsocial">
                        <a href={props.linkedin}><i className="fab fa-linkedin"></i></a>
                        <a href={props.github}><i className="fab fa-github"></i></a>
                        <a href={props.instagram}><i className="fab fa-instagram"></i></a>
                        <a href={"mailto:" + props.email}><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <div className=" vflex pblmemdesc">
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default MemberFlip
