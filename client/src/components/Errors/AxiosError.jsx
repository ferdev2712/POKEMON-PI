import React from "react";
import png from "../../images/pokeball_logo.png"
import style from "./styles/AxiosError.module.css"
import { Link } from "react-router-dom"
import { getPokemons } from "../../store/actions"
import {useDispatch} from "react-redux"
import { useEffect } from "react";

export default function AxiosError(){
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPokemons());
      },[])

    return <div className={style.axiosErrorContainer}>
        <Link to="/home">
            <img src={png} className={style.axiosErrorImage}/>
        </Link>
        {/* <h3 className={style.axiosErrorTitle}>Something went wrong!</h3> */}
    </div>
}