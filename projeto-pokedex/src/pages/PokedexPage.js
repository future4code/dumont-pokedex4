import React, { useContext } from 'react'
import styled from 'styled-components'
import CardPokemon from '../components/MainPokedex/CardPokemon'
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

function PokedexPage() {
      const { states, setters } = useContext(GlobalStateContext)


      const removePokeFromPokedex = (itemToRemove) => {
            const index = states.pokedex.findIndex((item) => item.name === itemToRemove.name)
            let newPokedex = [...states.pokedex]
            newPokedex.splice(index, 1)
            setters.setPokedex(newPokedex)

            let newPokeList = [...states.pokemonList]
            newPokeList.push(itemToRemove)
            setters.setPokemonList(newPokeList)
      }

      const pokedexList = states.pokedex.map((item) => {
            return <CardPokemon removePokeFromPokedex={() => removePokeFromPokedex(item)} url={item.url} />
          });
      return (
          
          <GridContainer>
          {pokedexList.length > 0 ? pokedexList : <p>Sem Pokemons!</p>}
          </GridContainer>
    );
}
  
  export default PokedexPage;
  