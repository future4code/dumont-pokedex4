import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'


const StyledCard = styled(Card)`
    width: 250px;
    height: 100%;
    background-color: black;
    color: white;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const StyledButton = styled(Button)`
    width: 100px;
    height: 70px;
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
`

const StyledImg = styled(Card.Img)`
    width: 200px;
    height: 200px;
    padding: 1em;
`

function CardPokemon(props) {
  const history = useHistory()
  const pokemon = useRequestData(props.url, undefined)

  return (<div>
    {pokemon && <StyledCard>
      <StyledImg variant="top" src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <ButtonsContainer>
          <StyledButton variant="dark" onClick={null}>detalhes</StyledButton>
          <StyledButton variant="dark" onClick={props.removePokeFromPokedex}> deletar Pokedex </StyledButton>
        </ButtonsContainer>
      </Card.Body>
    </StyledCard>

    }
  </div>



  );
}

export default CardPokemon;