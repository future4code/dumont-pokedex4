import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { goToDetails } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'


const StyledCard = styled(Card)`
    width: 250px;
    height: 400px;
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
  
    return (
        
        <StyledCard>
        <StyledImg variant="top" src= {"https://picsum.photos/200/300"} />
        <Card.Body>
          <Card.Title>Pokemon Bonitinho</Card.Title>
          <ButtonsContainer>
          <StyledButton  variant="dark"> Del da Pokedex </StyledButton>
          <StyledButton variant="dark" onClick={() => goToDetails(history)}>detalhes</StyledButton>
          </ButtonsContainer>
        </Card.Body>
      </StyledCard>


    );
  }
  
  export default CardPokemon;