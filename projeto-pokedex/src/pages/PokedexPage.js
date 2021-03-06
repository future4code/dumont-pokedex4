import React, { useContext } from 'react'
import CardPokemon from '../components/MainPokedex/CardPokemon'
import GlobalStateContext from '../global/GlobalStateContext.js'
import { FlexContainer, MainContainer, NoPokeContainer, Title } from './styled'


function PokedexPage() {
    const { states, setters } = useContext(GlobalStateContext)


    const removePokeFromPokedex = (itemToRemove) => {
        // acha o index do item que é para remoção
        const index = states.pokedex.findIndex((item) => item.name === itemToRemove.name)

        // copia a pokedex com o que tá
        let newPokedex = [...states.pokedex]
        // apaga o item para remoção com base no seu index
        newPokedex.splice(index, 1)
        // seta a pokedex sem esse item
        setters.setPokedex(newPokedex)

        // copia a pokemonList com o que tá
        let newPokeList = [...states.pokemonList]
        // adiciona o item que é removido da pokedex para a a pokemonList
        newPokeList.push({ ...itemToRemove })
        // seta a pokemonList com esse item
        setters.setPokemonList(newPokeList)

        alert(`${itemToRemove.name} foi removido da pokedex!`)
    }

    const pokedexList = states.pokedex.map((item) => {
        return <CardPokemon removePokeFromPokedex={() => removePokeFromPokedex(item)} url={item.url} />
    });
    return (
        <MainContainer>
            <Title>Pokedex</Title>
            <FlexContainer>
            {pokedexList.length > 0 ? pokedexList : <NoPokeContainer><h1>Sem Pokemons!</h1></NoPokeContainer>}
            </FlexContainer>
        </MainContainer>
        
    );
}

export default PokedexPage;
