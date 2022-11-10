import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemons, getTypes } from "../../store/actions/index";
import style from "./Form.module.css"
import { Link } from "react-router-dom";
import png from "../../images/pngwing.com.png"

function validate(pokemon) {
    let errors = {};
    if (!pokemon.name) {
      errors.name = 'Name is required';
    } else if(!/^[a-z A-Z,.'-']+$/.test(pokemon.name)){
        errors.name = 'Name is invalid'
    }else if (pokemon.hp < 0){
      errors.hp = 'HP cant be lower than 0';
    }else if (pokemon.attack < 0){
        errors.attack = 'Attack cant be lower than 0';
    } else if(pokemon.defense < 0) {
        errors.defense = 'Defense cant be lower than 0'
    }else if (pokemon.speed < 0){
        errors.speed = 'Speed cant be lower than 0';
    } else if(pokemon.height > 10) {
        errors.height = 'Height cant be bigger than 10'
    }else if(pokemon.weight < 0) {
        errors.weight = 'Weight cant be lower than 0'
    }else if(pokemon.types.length > 3){
        errors.types = 'Pokemon cannot have more than 3 types'
    }
    return errors;
  };

export default function Form(){

    const [pokemon, setPokemon] = useState({
        name: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    })
    const [errors, setErrors] = useState({})
    const [button, setButton] = useState(true)
    
    let dispatch = useDispatch()
    const types = useSelector((state)=>state.types)
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);

    useEffect(() =>{
        if(
            pokemon.name &&
            /^[a-z A-Z,.'-']+$/.test(pokemon.name) &&
            pokemon.hp && 
            pokemon.attack &&
            pokemon.defense &&
            pokemon.speed &&
            pokemon.height &&
            pokemon.weight &&
            pokemon.types.length < 4
        ) setButton(false)
        else setButton(true)
    },[pokemon,setButton])

    function onInputChange(e){
        e.preventDefault()
        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...pokemon,
            [e.target.name]: e.target.value
          }));
    }
    function handleSelect(e){
        e.preventDefault()
        if(pokemon && !pokemon.types.includes(e.target.value)){
            setPokemon({
                ...pokemon,
                types: [...pokemon.types, e.target.value]
            })
        }
    }
    function handleDelete(type){
        setPokemon({
            ...pokemon,
            types: pokemon.types.filter(t=>t!==type)
        })
    }
    function onSubmit(e){
        e.preventDefault()

        dispatch(addPokemons(pokemon))
        alert('Pokemon Created Successfully')
        setPokemon({
            name: "",
            img: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: []
        })
    } 
    console.log(pokemon);
    return <div className={style.formContainer}>
        <form onSubmit={onSubmit} className={style.form}>
        <Link to='/home'><img className={style.formGoBack} src={png}/></Link>
        <h1 className={style.formTitle}>CREATE POKEMON</h1>

        <label className={style.formLabel}>NAME:</label>
        {!errors.name ? null : <p className={style.formError}>{errors.name}</p>}
        <input name="name" onChange={onInputChange} type='text' value={pokemon.name.trim()} className={style.formInput}></input>

        <label className={style.formLabel}>IMG:</label>
        {!errors.img ? null : <p className={style.formError}>{errors.img}</p>}
        <input name="img" onChange={onInputChange} type='text' value={pokemon.img} className={style.formInput}></input>

        <label className={style.formLabel}>HP:</label>
        {!errors.hp ? null : <p className={style.formError}>{errors.hp}</p>}
        <input name="hp" onChange={onInputChange} type='float' value={pokemon.hp} className={style.formInput}></input>

        <label className={style.formLabel}>ATTACK:</label>
        {!errors.attack ? null : <p className={style.formError}>{errors.attack}</p>}
        <input name="attack" onChange={onInputChange} type='float' value={pokemon.attack} className={style.formInput}></input>

        <label className={style.formLabel}>DEFENSE:</label>
        {!errors.defense ? null : <p className={style.formError}>{errors.defense}</p>}
        <input name="defense" onChange={onInputChange} type='float' value={pokemon.defense} className={style.formInput}></input>

        <label className={style.formLabel}>SPEED:</label>
        {!errors.speed ? null : <p className={style.formError}>{errors.speed}</p>}
        <input name="speed" onChange={onInputChange} type='float' value={pokemon.speed} className={style.formInput}></input>

        <label className={style.formLabel}>HEIGHT:</label>
        {!errors.height ? null : <p className={style.formError}>{errors.height}</p>}
        <input name="height" onChange={onInputChange} type='float' value={pokemon.height} className={style.formInput}></input>

        <label className={style.formLabel}>WEIGHT:</label>
        {!errors.weight ? null : <p className={style.formError}>{errors.weight}</p>}

        <input name="weight" onChange={onInputChange} type='float' value={pokemon.weight} className={style.formInput}></input>

        <select name='select' onChange={handleSelect} className={style.formSelect}>
        <option value='Default' selected disabled>TYPES:</option>
        {types.length && types.map(type=><option value={type} key={Math.random() + type}>{type}</option>)}
        </select>
        <ul className={style.formUl}>
            {pokemon.types.length > 0 ? pokemon.types.map(type=><li key={type} onClick={()=>handleDelete(type)} className={style.formLi}>{type}</li>):<></>}
        </ul>
        {!errors.types ? null : <p className={style.formError}>{errors.types}</p>}

        <input type='submit' disabled={button} className={button ? style.formDisabled : style.formButton} value="Send"></input>
    </form>
    </div>
}