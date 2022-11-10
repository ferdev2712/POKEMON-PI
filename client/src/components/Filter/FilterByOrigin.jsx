import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API, DB, DEF } from "../../constantes/index";
import { filterByOrigin } from "../../store/actions/index";
import style from "./styles/FilterBy.module.css"

export default function FilterByOrigin(){

    const dispatch = useDispatch()

    function onSelectChange(e){
        dispatch(filterByOrigin(e.target.value))
    }

    return <select name='select' onChange={onSelectChange} className={style.filterSelect}>
        <option value={DEF}>ORIGIN:</option>
        <option value={API}>API</option>
        <option value={DB}>DB</option>
    </select>
}