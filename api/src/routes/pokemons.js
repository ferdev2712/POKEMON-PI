const { Router } = require('express');
const router = Router();
const {Pokemons, Types} = require('../db')
const {getAllPokemons} = require("./utils");

router.get('/', async (req, res, next)=>{
    const {name} = req.query
    if(name){
        try {
        
        let findPokemon = await getAllPokemons()
        let foundPokemon = findPokemon.find(pokemon=>pokemon.name === name)
        if(foundPokemon){
            res.send(foundPokemon)
        }else{
            res.status(404).send("No existe un pokemon con ese nombre")
        }
        }catch (error) {
            next(error)
        }
    }else{
        try {
            let allPokemons = await getAllPokemons();
            res.send(allPokemons)
        } catch (error) {
            next(error)
        }
    }
});

router.get('/:id', async(req,res,next)=>{
    try {
        const {id} = req.params
        let findPokemon = await getAllPokemons()
        let foundPokemon = findPokemon.find(pokemon=>pokemon.id == id)
        if(foundPokemon){
            res.send(foundPokemon)
        }else{
            res.status(404).send("No existe un pokemon con ese id")
        }
    } 
    catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next)=>{
    const {name, hp, attack, defense, speed, height, weight,types} = req.body
    if(!name) return res.status(404).json({msg: "Missing Data"})
    try {
        const newPokemon = await Pokemons.create({
            name, hp, attack, defense, speed, height, weight,
        })
        if(types && types.length > 0){
            let typesPokemons = await Types.findAll({where: {
                name: types
            }})
            await newPokemon.addTypes(typesPokemons)
        }else{
            let typeNormal = await Types.findAll({where: {
                name: ["unknown"]
            }})
            await newPokemon.addTypes(typeNormal)
        }
        res.json(newPokemon)
    } catch (error) {
        next(error)
    }
});

module.exports = router;
