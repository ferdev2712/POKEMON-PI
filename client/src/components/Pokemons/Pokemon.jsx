import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/Pokemon.module.css"

export default function Pokemon({name,img,id,types}){
    return <Link to={`pokemons/${id}`}>
        <div className={style.pokemonCard}>
            <div className={style.container}>
                <img src={img} alt={name}></img>
                <h3 className={style.pokemonTitle}>{name}</h3>
                { types ? <ul className={style.pokemonTypes}>TYPES:{types.map(type => type.hasOwnProperty('name') ? <li key={type.name}>{type.name}</li> : <li key={type}>{type}</li>)}</ul> : <></>}
            </div>
        </div>
    </Link>
}