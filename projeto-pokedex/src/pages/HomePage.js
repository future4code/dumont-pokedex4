import React, { useContext } from 'react'
import CardPokemon from '../components/MainHome/CardPokemon'
import styled from 'styled-components'
import GlobalStateContext from '../global/GlobalStateContext.js'

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2em;
    background-color: black;
    gap: 1em;
    height: 100vh;

`

function HomePage() {
  const { states, setters } = useContext(GlobalStateContext)

  const addPokeToPokedex = (newItem) => {
    
    const index = states.pokemonList.findIndex((i) => i.name === newItem.name)
    
    
    let newPokedex = [...states.pokedex]
   
    newPokedex.push({ ...newItem })
    
    setters.setPokedex(newPokedex)

    console.log(newPokedex)

    
    let newPokeList = [...states.pokemonList]
    
    newPokeList.splice(index, 1)
    
    setters.setPokemonList(newPokeList)
    
    alert(`${newItem.name} foi adicionado na pokedex!`)
  }

  return (
    <div>
      <FlexContainer>
        
        {states.pokemonList && states.pokemonList.map((item) => {
          return <CardPokemon addPokeToPokedex={() => addPokeToPokedex(item)} url={item.url} />
        })}
       
      </FlexContainer>
    </div>
  );
}

export default HomePage;
