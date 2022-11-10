import React from "react";
import { useDispatch } from "react-redux";
import { ASC, DEF, DESC } from "../../constantes/index";
import { orderByAttack } from "../../store/actions/index";
import style from "./styles/OrderBy.module.css"

export default function OrderByAttack(){

    const dispatch = useDispatch()

    function onSelectChange(e){
        dispatch(orderByAttack(e.target.value))
    }

    return <select name='select' onChange={onSelectChange} className={style.orderSelect}>
        <option value={DEF}>ATTACK:</option>
        <option value={ASC}>MIN-MAX</option>
        <option value={DESC}>MAX-MIN</option>
    </select>
}