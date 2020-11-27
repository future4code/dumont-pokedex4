import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import Card from 'react-bootstrap/Card'
import { useHistory } from 'react-router-dom'
import { StyledCard, StyledImg, StyledButton,ButtonsContainer } from '../../components/styled'


function CardPokemon(props) {
    const history = useHistory()

    // aqui faz a requisição só que em vez de usar o baseUrl, usa-se a props recebida e faz a requisição com ela
    const pokemon = useRequestData(props.url, undefined)

    // funcao para ir pra pagina de detalhes do pokemon escolhido
    const goToDetails = (id, name) => {
        // ela recebe um parametro que na chamada da função será pokemon.name e dai na url fica com o nome do pokemon
        history.push(`/detalhes/${id}/${name}`)
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
                        <StyledButton variant="dark" onClick={() => goToDetails(pokemon.id, pokemon.name)}>detalhes</StyledButton>
                        <StyledButton variant="dark" onClick={props.addPokeToPokedex} >add pokedex</StyledButton>
                    </ButtonsContainer>

                </Card.Body>
            </StyledCard> }

            {/* essa é a estilização é a que o meu grupo fez, mas vc só precisa da foto, do nome e dos botoes */}
        </div>
    );
}

export default CardPokemon;

