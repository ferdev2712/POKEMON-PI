import React from "react";
import FilterByType from "./FilterByType";
import FilterByOrigin from "./FilterByOrigin"
import style from "./styles/Filter.module.css"

export default function Filter(){
    return <div className={style.filterContainer}>
        <h3 className={style.filterTitle}>Filter By: </h3>
        <FilterByType/>
        <FilterByOrigin/>
    </div>
}