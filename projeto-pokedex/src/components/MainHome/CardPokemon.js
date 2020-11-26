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

    // aqui faz a requisição só que em vez de usar o baseUrl, usa-se a props recebida e faz a requisição com ela
    const pokemon = useRequestData(props.url, undefined)

    // funcao para ir pra pagina de detalhes do pokemon escolhido
    const goToDetails = (name) => {
        // ela recebe um parametro que na chamada da função será pokemon.name e dai na url fica com o nome do pokemon
        history.push(`/detalhes/${name}`)
    }

    return (
        <div>
            {/* aqui tem aquela mesma coisa do component home, se tá vivo, aparece o card */}
            {/* ISSO É NECESSARIO PARA AMBOS OS CASOS, com hook ou sem */}
            {pokemon && <StyledCard>
                <StyledImg variant="top" src={pokemon.sprites.other.dream_world.front_default} />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <ButtonsContainer>
                        <StyledButton variant="dark" onClick={() => goToDetails(pokemon.name)}>detalhes</StyledButton>
                        <StyledButton variant="dark" onClick={props.addPokeToPokedex} >add pokedex</StyledButton>
                    </ButtonsContainer>

                </Card.Body>
            </StyledCard> }

            {/* essa é a estilização é a que o meu grupo fez, mas vc só precisa da foto, do nome e dos botoes */}
        </div>
    );
}

export default CardPokemon;

