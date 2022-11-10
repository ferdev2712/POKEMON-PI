import React from "react";
import png from "../../images/pokeball_logo.png"
import style from "./styles/AxiosErrorDetail.module.css"

export default function AxiosErrorDetail(){
    return <div className={style.axiosErrorDetailContainer}>
        <img src={png} className={style.axiosErrorDetailImage}/>
        <h3 className={style.axiosErrorDetailTitle}>Something went wrong!</h3>
    </div>
}