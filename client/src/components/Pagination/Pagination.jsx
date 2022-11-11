import React from "react";
import { Link } from "react-router-dom";
import style from "./Pagination.module.css"

export default function Pagination({pokemonsPerPage,totalPokemons, paginate}){

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPokemons/pokemonsPerPage); i++) {
        pageNumbers.push(i)
    }

    return <nav className={style.paginationContainer}>
        <ul>
            {pageNumbers.map(number=>(
                <li key={number} className={style.paginationLi}>
                    <Link to={`/home/page/${number}`}>
                        <button className={style.paginationButton} onClick={()=>paginate(number)}>{number}</button>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
}