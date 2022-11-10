const axios = require('axios')
const {Pokemons, Types} = require('../db')

const getApiDataPokemon = async () =>{
   try{ 
    const apiData = await axios.get('https://pokeapi.co/api/v2/pokemon')
    // const apiData2 = await axios.get(apiData.data.next)
    const pokemonUrl = await apiData.data.results.map((pokemon)=> pokemon.url)
    // const pokemonUrl2 = await apiData2.data.results.map((pokemon)=> pokemon.url)
    const filteredPokemon = await Promise.all(pokemonUrl.map(async (poke) => {
        let newPokemon = await axios.get(poke)
        return {
            id: newPokemon.data.id,
            name: newPokemon.data.name,
            hp: newPokemon.data.stats[0].base_stat,
            attack: newPokemon.data.stats[1].base_stat,
            defense: newPokemon.data.stats[2].base_stat,
            speed: newPokemon.data.stats[5].base_stat,
            img: newPokemon.data.sprites.other.dream_world.front_default,
            height: newPokemon.data.height,
            weight: newPokemon.data.weight,
            types: newPokemon.data.types.map(e=>e.type.name)
        }
      }
    ))
    // const filteredPokemon2 = await Promise.all(pokemonUrl2.map(async (poke) => {
    //     let newPokemon = await axios.get(poke)
    //     return {
    //         id: newPokemon.data.id,
    //         name: newPokemon.data.name,
    //         hp: newPokemon.data.stats[0].base_stat,
    //         attack: newPokemon.data.stats[1].base_stat,
    //         defense: newPokemon.data.stats[2].base_stat,
    //         speed: newPokemon.data.stats[5].base_stat,
    //         img: newPokemon.data.sprites.other.dream_world.front_default,
    //         height: newPokemon.data.height,
    //         weight: newPokemon.data.weight,
    //         types: newPokemon.data.types.map(e=>e.type.name)
    //     }
    //   }
    // ))
    // const allPokemons = [...filteredPokemon, ...filteredPokemon2]
    return filteredPokemon;
    }catch(e){
        console.log(e) 
    }
    
}

const getDbData = async () =>{
    const pokemons = await Pokemons.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
    return pokemons 
}

const getAllPokemons =  async () => {
    let findPokemonApi = await getApiDataPokemon()
    let findPokemonDb = await getDbData()
    let allPokemons = [...findPokemonApi, ...findPokemonDb]
    return allPokemons
}

const getApiDataTypes = async () => {
    const apiData = await axios.get('https://pokeapi.co/api/v2/type')
    const types = apiData.data.results.map(type=>type.name)
    types.forEach(type => {
        Types.findOrCreate({where: {name: type}})
    });
    const allTypes = await Types.findAll()
    return allTypes
}

module.exports = {getAllPokemons, getApiDataTypes};
