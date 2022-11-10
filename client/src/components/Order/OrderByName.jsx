import React from "react";
import { useDispatch } from "react-redux";
import { ASC, DEF, DESC } from "../../constantes/index";
import { orderByName } from "../../store/actions/index";
import style from "./styles/OrderBy.module.css"

export default function OrderByName(){

    const dispatch = useDispatch()

    function onSelectChange(e){
        dispatch(orderByName(e.target.value))
    }

    return <select name='select' onChange={onSelectChange} className={style.orderSelect}>
        <option value={DEF}>NAME:</option>
        <option value={ASC}>A-Z</option>
        <option value={DESC}>Z-A</option>
    </select>
}