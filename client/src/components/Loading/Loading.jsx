import React from "react";
import loading from "../../images/pikachu-running.gif";
import style from "./Loading.module.css"

export default function Loading(){
    return <div className={style.loadingContainer}>
        <img src={loading}/>
        {/* <h3>Loading...</h3> */}
    </div>
}