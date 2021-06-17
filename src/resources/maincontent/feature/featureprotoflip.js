import React from "react"
import "./feature.css"

function FeatureProtoFlip (props){
    return (
       <div className="featwrapper vflex flip">
           <div className="featimg flipimg" style={{backgroundImage:`url("${props.fimage}")`}}></div>
           <div className="featinfo flipinfo">
               <h3>{props.heading}</h3>
               <p>{props.description}</p>
           </div>
       </div>
    )
}
export default FeatureProtoFlip