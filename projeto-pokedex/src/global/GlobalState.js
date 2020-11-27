import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../constants/urls'
import GlobalStateContext from './GlobalStateContext.js'

const GlobalState = (props) => {
  // pokemonList é a lista de 20 pokemons
  // pokedex é a lista de pokemons da pokedex, que será usada depois
  const [pokemonList, setPokemonList] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  // pegar 20 pokemons, cada um com url e name
  const getPokemons = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => {
        // response.data.results = um array e cada item tem uma url e um nome
        setPokemonList(response.data.results)
      })
      .catch((error) => alert(error.message))
  };

  // states tem os states, setters tem o setStates e o request a função
  const states = { pokemonList, pokedex }
  const setters = { setPokemonList, setPokedex }
  const requests = { getPokemons }

  // esqueminha da chijo de separação
  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState
