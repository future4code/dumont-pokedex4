import React, { useContext } from 'react'
import CardPokemon from '../components/MainHome/CardPokemon'
import styled from 'styled-components'
import GlobalStateContext from '../global/GlobalStateContext.js'

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background-color: black;
    gap: 10px;
    height:1600px;
`

function HomePage() {
  const { states, setters } = useContext(GlobalStateContext)

  const addPokeToPokedex = (newItem) => {
    // acha o index do item que é para adicionar
    const index = states.pokemonList.findIndex((i) => i.name === newItem.name)
    
    // copia a pokedex com o que tá
    let newPokedex = [...states.pokedex]
    // adiciona o item na pokedex
    newPokedex.push({ ...newItem })
    // seta a pokedex com o novo item
    setters.setPokedex(newPokedex)

    console.log(newPokedex)

    // copia a pokemonList com o que tá
    let newPokeList = [...states.pokemonList]
    // apaga o item com base no seu index
    newPokeList.splice(index, 1)
    // seta a pokemonList sem esse item
    setters.setPokemonList(newPokeList)
    
    alert(`${newItem.name} foi adicionado na pokedex!`)
  }

  return (
    
      <FlexContainer>
        {/* curto-circuito pra saber se a pokemonList ta viva, se sim pega o estado pokemonList e mapeia ele para pegar o url */}
        {states.pokemonList && states.pokemonList.map((item) => {
          return <CardPokemon addPokeToPokedex={() => addPokeToPokedex(item)} url={item.url} />
        })}
        {/* ele vai mapear pelo tamanho do array da pokemonList, ou seja, vai aparecer 20 cards */}
        {/* cada card terá seu url e fará uma requisão para pegar a url do pokemon (essa url contem TUDO do pokemon) */}
      </FlexContainer>
    
  );
}

export default HomePage;
