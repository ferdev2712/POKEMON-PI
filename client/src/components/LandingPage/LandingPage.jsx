import React from "react"
import { Link } from "react-router-dom"
import style from "./LandingPage.module.css"

export default function LandingPage(){
    return(
        <div className={style.landingContainer}>
            <h1 className={style.landingTitle}>POKEMON</h1>
            <p className={style.LandingP}>Welcome to my PI</p>
            <Link to='/home'>
                <button className={style.landingButton}>GO!</button>
            </Link>
        </div>
    )
}