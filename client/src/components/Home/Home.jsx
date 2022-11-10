import React from "react";
import NavBar from "../NavBar/NavBar";
import Method from "../Method/Method"
import Pokemons from "../Pokemons/Pokemons";
import Pagination from '../Pagination/Pagination';


export default function Home({pokemons, pokemonsPerPage, totalPokemons, paginate}){
    return <div>
        <NavBar/>
        <Method/>
        { pokemons.length >= 1 || pokemons.hasOwnProperty('name') ? <Pokemons pokemons={pokemons}/> : null}
        {totalPokemons > 1 ? <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={totalPokemons} paginate={paginate}/>:null}
    </div>
}