import React from 'react'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import { StyledCard, StyledImg, StyledButton,ButtonsContainer } from '../styled'


function CardPokemon(props) {
  const history = useHistory()
  const pokemon = useRequestData(props.url, undefined)

  const goToDetails = (id, name) => {
     history.push(`/detalhes/${id}/${name}`)
  }

  return (<div>
    {pokemon && <StyledCard>
      <StyledImg variant="top" src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <ButtonsContainer>
          <StyledButton variant="secondary" onClick={() => goToDetails(pokemon.id, pokemon.name)}>detalhes</StyledButton>
          <StyledButton variant="danger" onClick={props.removePokeFromPokedex}> deletar Pokedex </StyledButton>
        </ButtonsContainer>
      </Card.Body>
    </StyledCard>

    }
  </div>



  );
}

export default CardPokemon;