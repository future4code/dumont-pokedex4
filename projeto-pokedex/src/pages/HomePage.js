import React, { useContext, useEffect } from 'react'
import CardPokemon from '../components/MainHome/CardPokemon'
import styled from 'styled-components'
import GlobalStateContext from '../global/GlobalStateContext.js'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: black;
  justify-content: center;
  gap: 3em;
  padding: 2em;
  padding-left: 5em;
`

function HomePage() {

  // chamando o state e o request
  const { states, requests, setters } = useContext(GlobalStateContext)

  // chamando a função em um useEffect com sentido de didmount
  
  // se vc coloca a função nesse array, vira um didupdate e assim entra em um looping infinito

  const addPokeToPokedex = (newItem) => {
    const index = states.pokemonList.findIndex((i) => i.name === newItem.name)
    const indexPokedex = states.pokedex.findIndex((i) => i.name === newItem.name)

    let newPokedex = [...states.pokedex]
    newPokedex.push({ ...newItem })

    let newPokeList = [...states.pokemonList]
    newPokeList.splice(index, 1)

    setters.setPokemonList(newPokeList)
    setters.setPokedex(newPokedex)
    alert(`${newItem.name} foi adicionado na pokedex!`)
  }


  return (
    <div>
      <GridContainer>
        {/* curto-circuito pra saber se a pokemonList ta viva, se sim pega o estado pokemonList e mapeia ele para pegar o url */}
        {states.pokemonList && states.pokemonList.map((item) => {
          return <CardPokemon addPokeToPokedex={() => addPokeToPokedex(item)} url={item.url} />
        })}
        {/* ele vai mapear pelo tamanho do array da pokemonList, ou seja, vai aparecer 20 cards */}
        {/* cada card terá seu url e fará uma requisão para pegar a url do pokemon (essa url contem TUDO do pokemon) */}
      </GridContainer>
    </div>
  );
}

export default HomePage;
