import React, {useContext} from 'react'
import logo from '../assets/logo.svg'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToHome, goToPokedex } from '../router/coordinator'
import GlobalStateContext from '../global/GlobalStateContext.js'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #FDE964;
  height: 8vh;
  position: relative;
`

const ButtonRight = styled(Button)`
  position: absolute;
  right: 10px;
  margin-right: 2em;
`

const ButtonLeft = styled(Button)`
  position: absolute;
  left: 10px;
  margin-left: 2em;
`

const Logo = styled.img`
  cursor: pointer;
  width: 10%;
`

function HeaderDetails() {
  const { states, setters } = useContext(GlobalStateContext)
  const history = useHistory()

  const whatToDo = (item) => {
    if (states.pokemonList.inPokedex || states.pokedex.inPokedex) {
      const index = states.pokemonList.findIndex((i) => i.name === item.name)

      // copia a pokedex com o que tá
      let newPokedex = [...states.pokedex]
      // adiciona o item na pokedex
      newPokedex.push({ ...item, inPokedex: true })
      // seta a pokedex com o novo item
      setters.setPokedex(newPokedex)

      console.log(newPokedex)

      // copia a pokemonList com o que tá
      let newPokeList = [...states.pokemonList]
      // apaga o item com base no seu index
      newPokeList.splice(index, 1)
      // seta a pokemonList sem esse item
      setters.setPokemonList(newPokeList)

      alert(`${item.name} foi adicionado na pokedex!`)
    } else {
      // acha o index do item que é para remoção
      const index = states.pokedex.findIndex((item) => item.name === item.name)

      // copia a pokedex com o que tá
      let newPokedex = [...states.pokedex]
      // apaga o item para remoção com base no seu index
      newPokedex.splice(index, 1)
      // seta a pokedex sem esse item
      setters.setPokedex(newPokedex)

      // copia a pokemonList com o que tá
      let newPokeList = [...states.pokemonList]
      // adiciona o item que é removido da pokedex para a a pokemonList
      newPokeList.push({ ...item, inPokedex: false })
      // seta a pokemonList com esse item
      setters.setPokemonList(newPokeList)
    }

  }

  return (
    <HeaderContainer >
      <ButtonLeft variant="danger" onClick={() => goToPokedex(history)}> Pokedex </ButtonLeft>
      <Logo src={logo} onClick={() => goToHome(history)} />
      <ButtonRight variant="danger" onClick={() => whatToDo(props.name)} >add / remover</ButtonRight>
    </HeaderContainer>
  );
}

export default HeaderDetails;