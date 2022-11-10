import './App.css';
import React, {useEffect, useState} from "react";
import { Route,Switch } from 'react-router-dom';
import Form from './components/Form/Form'
import LandingPage from './components/LandingPage/LandingPage'
import PokemonDetails from './components/Pokemons/PokemonDetails';
import Home from './components/Home/Home'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/actions';
import Loading from './components/Loading/Loading';

function App() {

  let dispatch = useDispatch()
  const pokemons = useSelector((state)=> state.filteredPokemons)
  const [currentPage, setCurrentPage] = useState(1)
  const pokemonsPerPage = 12
  
  useEffect(()=>{
    dispatch(getPokemons());
  },[])
  const indexOfLastPokemons = currentPage * pokemonsPerPage;
  const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage;
  const currentPokemons = pokemons.length > 1 ? pokemons.slice(indexOfFirstPokemons,indexOfLastPokemons) : pokemons
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>
        <Route path='/home'>
          {pokemons.length >= 1 || pokemons.hasOwnProperty('name') ? <Home pokemons={currentPokemons} pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons.length} paginate={paginate}/> : <Loading/>}
        </Route>
        <Route exact path='/home/page/:num'>
          <Home pokemons={currentPokemons} pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons.length} paginate={paginate}/>
        </Route>
        <Route exact path='/form'>
          <Form/>
        </Route>
        <Route exact path='/:id'>
          <PokemonDetails/>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
