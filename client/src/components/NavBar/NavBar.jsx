import React from "react";
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';
import style from "./navBar.module.css"
import image from "../../images/pngegg.png"
import button from "../../images/plus-icon-21715.png"

export default function NavBar (props){
    return(
        <div className={style.navContainer}>
            <Link to='/'>
                <img src={image} className={style.navImg}></img>
            </Link>
            <SearchBar className={style.searhcBar}/>
            <Link to='/form'>
                <img className={style.navButton} src={button}></img>
            </Link>
        </div> 
    )
}