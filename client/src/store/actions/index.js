import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const SEARCH_POKEMONS = "SEARCH_POKEMONS"
export const ADD_POKEMON = "ADD_POKEMON"
export const POKEMON_DETAIL = "POKEMON_DETAIL"
export const FILTER_BY_TYPE = "FILTER_BY_TYPE"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK"
export const AXIOS_ERROR = "AXIOS_ERROR"

export function getPokemons() {
    return function(dispatch){
        axios.get("/pokemons/")
        .then((pokemons) => {
            pokemons.data.forEach(pokemon => {
               if(pokemon.types[0].hasOwnProperty('name')){
                    pokemon.types = pokemon.types.map(type=>type.name)
               } 
            });
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data
            })
        }).catch(err => dispatch({
            type: AXIOS_ERROR,
            payload: err
        }))
    }
}

export function getTypes() {
    return function(dispatch){
        axios.get("/types/")
        .then((types) => {
            let allTypes = types.data.map(type=>type.name)
            dispatch({
                type: GET_TYPES,
                payload: allTypes
            })
        }).catch(err => console.log(err))
    }
}

export function searchPokemons(name){
    return function(dispatch){
        axios.get(`/pokemons/?name=${name}`)
        .then((pokemons) => {
            dispatch({
                type: SEARCH_POKEMONS,
                payload: pokemons.data
            })
        }).catch(err => dispatch({
            type: AXIOS_ERROR,
            payload: err
        }))
    }
}

export function addPokemons(info){
    return function(dispatch){
        axios.post("/pokemons/", info)
        .then((pokemon) => {
            dispatch({
                type: ADD_POKEMON,
                payload: pokemon.data
            })
        }).catch(err => console.log(err))
    }
}

export function pokemonDetail(id){
    return function(dispatch){
        axios.get(`/pokemons/${id}`)
        .then((pokemon) =>{
            dispatch({
                type: POKEMON_DETAIL,
                payload: pokemon.data
            })
        }).catch(err => dispatch({
            type: AXIOS_ERROR,
            payload: err
        }))
    }
}

export function filterByType(type){
    return {
        type: FILTER_BY_TYPE,
        payload: type
    }
}
export function filterByOrigin(origin){
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin
    }
}

export function orderByName(order) {
    return {
        type: ORDER_BY_NAME,
        payload: order
    }
} 

export function orderByAttack(order) {
    return {
        type: ORDER_BY_ATTACK,
        payload: order
    }
}