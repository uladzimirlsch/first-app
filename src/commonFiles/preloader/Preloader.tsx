import preloader from "../../assets/images/preloader.svg";
import React from "react";

const Preloader = () => {
    return (
        <div style={{backgroundColor: "gainsboro"}}>
            <img src={preloader} alt={''}/>
        </div>
    )
}
export default Preloader