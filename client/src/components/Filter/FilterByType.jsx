import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEF } from "../../constantes";
import { filterByType,getTypes } from "../../store/actions/index";
import style from "./styles/FilterBy.module.css"


export default function FilterByType(){

    const dispatch = useDispatch()
    const types = useSelector((state)=>state.types)
    useEffect(() => {
        dispatch(getTypes())
    }, []);

    function onSelectChange(e){
        dispatch(filterByType(e.target.value))
    }

    return <select name='select' onChange={onSelectChange} className={style.filterSelect}>
        <option value={DEF}>TYPES:</option>
        {types.length && types.map(type=><option value={type} key={Math.random() + type}>{type}</option>)}
    </select>
}