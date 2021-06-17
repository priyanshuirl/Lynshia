import React, {useEffect} from "react"

import "./comingsoon.css"

function Comingsoon(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="comingbanner vflex">
            <h1>Coming Soon!</h1>
            <p>Thank You for showing Your interest in Lynshia, we are yet to announce our Official Launch date, so till then, Stay Tuned! </p>
        </div>
    )
}

export default Comingsoon