import React from "react";
import OrderByAttack from "./OrderByAttack";
import OrderByName from "./OrderByName"
import style from "./styles/Order.module.css"

export default function Order(){
    return <div className={style.orderContainer}>
        <h3 className={style.orderTitle}>Order By: </h3>
        <OrderByName/>
        <OrderByAttack/>
    </div>
}