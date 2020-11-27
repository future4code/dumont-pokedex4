import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { StyledCardP, StyledImgP, StyledButtonP,ButtonsContainerP } from '../../components/styled'




function CardPokemon(props) {
  const history = useHistory()
  const pokemon = useRequestData(props.url, undefined)

  const goToDetails = (id, name) => {
     history.push(`/detalhes/${id}/${name}`)
  }

  return (<div>
    {pokemon && <StyledCardP>
      <StyledImgP variant="top" src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <ButtonsContainerP>
          <StyledButtonP variant="dark" onClick={() => goToDetails(pokemon.id, pokemon.name)}>detalhes</StyledButtonP>
          <StyledButtonP variant="dark" onClick={props.removePokeFromPokedex}> deletar Pokedex </StyledButtonP>
        </ButtonsContainerP>
      </Card.Body>
    </StyledCardP>

    }
  </div>



  );
}

export default CardPokemon;