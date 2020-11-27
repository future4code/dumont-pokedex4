import React from 'react'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import { useParams } from 'react-router-dom'
import HeaderDetails from '../components/Headers/HeaderDetails'
import { BoxImgType, BoxStats, BoxAttacks, DetailsContainer, PokeImgContainer, PokeTypeContainer, PokeStatsContainer, PokeMovesContainer, PokeImage, MainContainer, Title} from './styled'


function DetailsPage() {
    // pegar o :id lá da função 
    const params = useParams();

    const object = {name: params.name, url: `${baseUrl}/${params.id}`}

    // fazendo a requisição usando o parametro recebido
    const pokeDetails = useRequestData(`${baseUrl}/${params.id}`, undefined)

    console.log(pokeDetails)

    return (
        <div>
            <HeaderDetails pokemon={object} />
            {pokeDetails ? <MainContainer>
            <Title>{pokeDetails.name}</Title>
                <DetailsContainer>
                <BoxImgType>
                    <PokeImgContainer>
                    <PokeImage src={pokeDetails.sprites.other.dream_world.front_default} alt="pokemon"/>
                    </PokeImgContainer>
                    <PokeTypeContainer>
                        <p><strong>Tipos:</strong></p>
                    {pokeDetails.types.map((item) => {
                        return (<p>{item.type.name}</p>)
                    })}
                    </PokeTypeContainer>
                </BoxImgType>
                <BoxStats>
                    <PokeStatsContainer>
                        {pokeDetails.stats.map((item) => {
                            return <p><strong>{item.stat.name}: </strong>{item.base_stat}</p>
                        })}
                    </PokeStatsContainer>
                </BoxStats>
                <BoxAttacks>
                    <PokeMovesContainer>
                        <h3>Principais Ataques</h3>
                        {pokeDetails.moves.map((item, index) => {
                            return index < 5 && <p>{item.move.name}</p>
                        })}
                    </PokeMovesContainer>
                </BoxAttacks>

            </DetailsContainer>
            </MainContainer>

                : null}

        </div>
    )
}
export default DetailsPage;
