import React, { useEffect } from 'react';
import Pokemon from './Pokemon';
import style from "./styles/Pokemons.module.css"
import AxiosError from "../Errors/AxiosError";

export default function Pokemons({pokemons}) {
    return <div>
        {
            pokemons.name === "AxiosError" || pokemons.name === "No Pokemons found" ? <AxiosError/> :
            <div className={style.pokemonsContainer}>{pokemons.length >= 1 ? pokemons.map((pokemon)=>{
                    return <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} img={pokemon.img} types={pokemon.types}/>
                }) : <Pokemon id={pokemons.id} name={pokemons.name} img={pokemons.img} types={pokemons.types}/>}
            </div>
        }
    </div>
    
}

