import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemons } from "../../store/actions/index";
import style from "./searchBar.module.css"

export default function SearchBar() {
  const [search, setSearch] = useState('')
  let dispatch = useDispatch()
  
  function onSubmit(e){
    e.preventDefault();
    dispatch(searchPokemons(search))
  }
  function onInputChange(e){
    e.preventDefault()
    setSearch(e.target.value)
  }

  return <div>
    <form onSubmit={onSubmit} className={style.searchBarContainer}>
      <input type='text' className={style.searchInput} onChange={onInputChange} value={search}></input>
      <input type='submit' value='Search' className={style.searchButton}></input>
    </form>
  </div>  
}