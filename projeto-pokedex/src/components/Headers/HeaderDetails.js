import React, { useContext } from 'react'
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../router/coordinator'
import GlobalStateContext from '../../global/GlobalStateContext.js'
import { HeaderContainer, ButtonRight, ButtonLeft, Logo } from './styled'



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
    <HeaderContainer>
      <ButtonLeft variant="danger" onClick={() => goToPokedex(history)}> Pokedex </ButtonLeft>
      <Logo src={logo} onClick={() => goToHome(history)} />
      <ButtonRight variant={indexOfPokedex === -1 ? "success" : "danger"} onClick={() => whatToDo(props.pokemon)}>{indexOfPokedex === -1 ? "adicionar" : "deletar"} </ButtonRight>
    </HeaderContainer>
  );
}

export default HeaderDetails;