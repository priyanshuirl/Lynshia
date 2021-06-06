import React from "react"
import "./feature.css"

function Feature (props){
    return (
       <div className="featwrapper vflex" style={{flexDirection:props.direction}}>
           <div className="featimg" style={{backgroundImage:`url("${props.fimage}")`,width:props.imgwidth,marginLeft:props.leftmargin}}>

           </div>
           <div className="featinfo" style={{width:props.infowidth}}>
               <h3>{props.heading}</h3>
               <p>{props.description}</p>
           </div>
       </div>
    )
}
export default Feature