import React, {useContext, useState} from 'react'
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
  const [inPokedex, setInPokedex] = useState(null)
  const { states, setters } = useContext(GlobalStateContext)
  const history = useHistory()

  const whatToDo = (item) => {
    const indexList = states.pokemonList.findIndex((i) => i.name === item.name)
    const indexPokedex = states.pokedex.findIndex((item) => item.name === item.name)

    if ((indexPokedex === -1)) {
      

      let newPokedex = [...states.pokedex]
      newPokedex.push({ ...item })
      setters.setPokedex(newPokedex)

      let newPokeList = [...states.pokemonList]
      newPokeList.splice(indexList, 1)
      setters.setPokemonList(newPokeList)

      alert(`${item.name} foi adicionado na pokedex!`)
      setInPokedex(true)
    } else {
      

      let newPokedex = [...states.pokedex]
      newPokedex.splice(indexPokedex, 1)
      setters.setPokedex(newPokedex)

      let newPokeList = [...states.pokemonList]
      newPokeList.push({ ...item })
      setters.setPokemonList(newPokeList)

      alert(`${item.name} foi removido da pokedex!`)
      setInPokedex(false)
    }

  }

  return (
    <HeaderContainer >
      <ButtonLeft variant="danger" onClick={() => goToPokedex(history)}> Pokedex </ButtonLeft>
      <Logo src={logo} onClick={() => goToHome(history)} />
  <ButtonRight variant="danger" onClick={() => whatToDo(props.pokemon)}>{inPokedex ? "remover" : "adicionar"}</ButtonRight>
    </HeaderContainer>
  );
}

export default HeaderDetails;