import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

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

const StyledImg = styled(Card.Img)`
    width: 200px;
    height: 200px;
    padding: 1em;
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

function CardPokemon(props) {
    const history = useHistory()

    
    const pokemon = useRequestData(props.url, undefined)

    
    const goToDetails = (id, name) => {
       
        history.push(`/detalhes/${id}/${name}`)
    }

    return (
        <div>
            
            {pokemon && <StyledCard>
                <StyledImg variant="top" src={pokemon.sprites.other.dream_world.front_default} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <ButtonsContainer>
                        <StyledButton variant="dark" onClick={() => goToDetails(pokemon.id, pokemon.name)}>detalhes</StyledButton>
                        <StyledButton variant="dark" onClick={props.addPokeToPokedex} >add pokedex</StyledButton>
                    </ButtonsContainer>

                </Card.Body>
            </StyledCard> }

            
        </div>
    );
}

export default CardPokemon;

