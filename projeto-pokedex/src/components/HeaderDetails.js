import React, { useContext } from 'react'
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

function HeaderDetails(props) {
  const { states, setters } = useContext(GlobalStateContext)
  const history = useHistory()

  const indexOfPokedex = states.pokedex.findIndex((item) => item.name === props.pokemon.name)

  const whatToDo = (item) => {

    const indexList = states.pokemonList.findIndex((i) => i.name === item.name)
    const indexPokedex = states.pokedex.findIndex((i) => i.name === item.name)

    let newPokedex = [...states.pokedex]
    let newPokeList = [...states.pokemonList]

    if ((indexPokedex === -1)) {
      newPokedex.push({ ...item })
      newPokeList.splice(indexList, 1)
      alert(`${item.name} foi adicionado na pokedex!`)

    } else {
      newPokedex.splice(indexPokedex, 1)
      newPokeList.push({ ...item })
      alert(`${item.name} foi removido da pokedex!`)

    }

    setters.setPokedex(newPokedex)
    setters.setPokemonList(newPokeList)

  }

  return (
    <HeaderContainer >
      <ButtonLeft variant="danger" onClick={() => goToPokedex(history)}> Pokedex </ButtonLeft>
      <Logo src={logo} onClick={() => goToHome(history)} />
      <ButtonRight variant="danger" onClick={() => whatToDo(props.pokemon)}>{indexOfPokedex === -1 ? "adicionar na pokedex" : "deletar da pokedex"} </ButtonRight>
    </HeaderContainer>
  );
}

export default HeaderDetails;