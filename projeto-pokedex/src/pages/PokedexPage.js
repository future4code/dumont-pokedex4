import React, { useContext } from 'react'
import styled from 'styled-components'
import CardPokemon from '../components/MainPokedex/CardPokemon'
import GlobalStateContext from '../global/GlobalStateContext.js'

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2em;
    background-color: black;
    gap: 1em;
    height: 100%;
`
const NoPokeContainer = styled.div`
    height: 77vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

function PokedexPage() {
    const { states, setters } = useContext(GlobalStateContext)


    const removePokeFromPokedex = (itemToRemove) => {
        
        const index = states.pokedex.findIndex((item) => item.name === itemToRemove.name)

       
        let newPokedex = [...states.pokedex]
        
        newPokedex.splice(index, 1)
       
        setters.setPokedex(newPokedex)

        
        let newPokeList = [...states.pokemonList]
        
        newPokeList.push({ ...itemToRemove })
       
        setters.setPokemonList(newPokeList)

        alert(`${itemToRemove.name} foi removido da pokedex!`)
    }

    const pokedexList = states.pokedex.map((item) => {
        return <CardPokemon removePokeFromPokedex={() => removePokeFromPokedex(item)} url={item.url} />
    });
    return (

        <FlexContainer>
            {pokedexList.length > 0 ? pokedexList : <NoPokeContainer><h1>Sem Pokemons!</h1></NoPokeContainer>}
        </FlexContainer>
    );
}

export default PokedexPage;
