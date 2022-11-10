import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link} from "react-router-dom";
import { pokemonDetail } from "../../store/actions/index";
import Loading from "../Loading/Loading"
import style from "./styles/PokemonDetails.module.css"
import png from "../../images/pngwing.com.png"
import AxiosError from "../Errors/AxiosError";


export default function PokemonDetails(){
    let {id} = useParams()
    let pokemon = useSelector((state)=> state.pokemonDetail)
    let dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(pokemonDetail(id))
    },[])

    console.log(pokemon) 

    return <div className={style.pokemonDetailsContainer}>
        {!pokemon.hasOwnProperty('name') ? <Loading/> : null}
        {pokemon.name === "AxiosError" ? <AxiosError/> : null}
        {pokemon.id == id ?
            <div className={style.pokemonDetailsCard}>
                <Link to='/home'><img className={style.pokemonDetailsGoBack} src={png}/></Link>
                <img src={pokemon.img} alt={pokemon.name} className={style.profileImg}/>
                <h3 className={pokemon.name.length > 8 ? style.pokemonDetailsLongName :style.pokemonDetailsName}>{pokemon.name}</h3>
                <p className={id.length < 4 ? style.pokemonDetailsId : style.pokemonDetailsIdBd}>{pokemon.id}</p>
                <ul className={style.pokemonDetailsStats}>STATS:
                    <li className={style.pokemonDetailsStatsli}>HP: {pokemon.hp}</li>
                    <li className={style.pokemonDetailsStatsli}>ATTACK: {pokemon.attack}</li>
                    <li className={style.pokemonDetailsStatsli}>DEFENSE: {pokemon.defense}</li>
                    <li className={style.pokemonDetailsStatsli}>SPEED: {pokemon.speed}</li>
                    <li className={style.pokemonDetailsStatsli}>HEIGHT: {pokemon.height}</li>
                    <li className={style.pokemonDetailsStatsli}>WEIGHT: {pokemon.weight}</li>
                </ul>
                <ul className={pokemon.types.length > 2 ? style.pokemonDetailsSoMuchTypes: style.pokemonDetailsTypes}>TYPES:{pokemon.types.map(type=> type.hasOwnProperty('name') ? <li key={type.name}>{type.name}</li> : <li key={type}>{type}</li>)}</ul>
            </div> : null
        }
    </div>
}