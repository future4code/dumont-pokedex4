import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import Buttons from './Buttons'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

const StyledCard = styled(Card)`
    width: 250px;
    background-color: black;
    color: white;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function CardPokemon(props) {
    const pokemon = useRequestData(props.url, undefined)
    return (
        <div>
            {pokemon ? <StyledCard>
                <Card.Img variant="top" src={pokemon.sprites.front_default} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Buttons />
                </Card.Body>
            </StyledCard> : null}
        </div>
    );
}

export default CardPokemon;

