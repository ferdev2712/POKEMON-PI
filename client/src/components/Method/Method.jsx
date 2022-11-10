import React from "react";
import Filter from "../Filter/Filter";
import Order from "../Order/Order"
import style from "./Method.module.css"

export default function Method(){
    return <div className={style.methodContainer}>
        <Order/>
        <Filter/>
    </div>
}