import { API, ASC, DEF } from "../../constantes";
import { ADD_POKEMON, FILTER_BY_ORIGIN, FILTER_BY_TYPE, GET_POKEMONS, ORDER_BY_NAME, ORDER_BY_ATTACK, POKEMON_DETAIL, SEARCH_POKEMONS, GET_TYPES, RESTART, AXIOS_ERROR } from "../actions";

const initialState = {
    pokemons: [],
    types: [],
    filteredPokemons: [],
    pokemonDetail: {}
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                filteredPokemons: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case SEARCH_POKEMONS:
            return {
                ...state,
                filteredPokemons: action.payload
            }
        case ADD_POKEMON:
            return {
                ...state,
                pokemons: state.pokemons.concat(action.payload),
                filteredPokemons: state.pokemons
            }
        case POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case FILTER_BY_TYPE:
            let filteredPokemonsByType = [...state.pokemons]

            if(action.payload === DEF){
                return {
                    ...state,
                    filteredPokemons: state.pokemons
                }
            }
            
            filteredPokemonsByType = filteredPokemonsByType.filter(pokemon => pokemon.types.includes(action.payload))

            if(filteredPokemonsByType.length > 0){
                return {
                    ...state,
                    filteredPokemons: filteredPokemonsByType
                }
            }else{
                return {
                    ...state,
                    filteredPokemons: {name: "No Pokemons found"}
                }
            }
        case FILTER_BY_ORIGIN:
            let filteredPokemonsByOrigin = [...state.pokemons]
            
            if(action.payload === DEF){
                return {
                    ...state,
                    filteredPokemons: state.pokemons
                }
            }
            if(action.payload === API){
                filteredPokemonsByOrigin = filteredPokemonsByOrigin.filter(pokemon => !pokemon.hasOwnProperty("created"))
                return {
                    ...state,
                    filteredPokemons: filteredPokemonsByOrigin
                }

            }else{
                filteredPokemonsByOrigin = filteredPokemonsByOrigin.filter(pokemon => pokemon.hasOwnProperty("created"))
                return {
                    ...state,
                    filteredPokemons: filteredPokemonsByOrigin
                }
            }
            

        case ORDER_BY_NAME:
            let orderedPokemons = [...state.filteredPokemons]
            
            if(action.payload === DEF){
                return {
                    ...state,
                    filteredPokemons: state.pokemons
                }
            }
            orderedPokemons = orderedPokemons.sort((a,b)=>{
                if(a.name < b.name){
                    return action.payload === ASC ?  -1 : 1;
                }
                if(a.name > b.name){
                    return action.payload === ASC ? 1 : -1
                }
                return 0;
            })
            return {
                ...state,
                filteredPokemons: orderedPokemons
            }
        case ORDER_BY_ATTACK:
            let orderedPokemonsAttack = [...state.filteredPokemons]
            
            if(action.payload === DEF){
                return {
                    ...state,
                    filteredPokemons: state.pokemons
                }
            }
            orderedPokemonsAttack = orderedPokemonsAttack.sort((a,b)=>{
                
                if(a.attack < b.attack){
                    return action.payload === ASC ?  -1 : 1;
                }
                if(a.attack > b.attack){
                    return action.payload === ASC ? 1 : -1
                }
                return 0;
            })
            return {
                ...state,
                filteredPokemons: orderedPokemonsAttack
            }
        case AXIOS_ERROR:
            return {
                ...state,
                filteredPokemons: action.payload,
                pokemonDetail: action.payload
            }
        default:
            return {...state}
    }
}