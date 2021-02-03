import preloader from "../../assets/images/preloader.svg";
import * as React from "react";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: "gainsboro"}}>
            <img src={preloader} alt={''}/>
        </div>
    )
}
export default Preloader