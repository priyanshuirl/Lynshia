import React from "react"
import "./feature.css"

function FeatureProto(props) {
    return (
        <div className="featwrapper vflex">
            <div className="featimg" style={{ backgroundImage: `url("${props.fimage}")` }}>
            </div>
            <div className="featinfo">
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default FeatureProto