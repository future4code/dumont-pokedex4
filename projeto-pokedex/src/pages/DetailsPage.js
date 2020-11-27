import React from 'react'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import HeaderDetails from '../components/HeaderDetails'

const BoxA = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const BoxB = styled.div`
    display: flex;
    justify-content: column;
    text-align: center;
`
const BoxC = styled.div`
    display:flex;
    flex-direction: column;
`
const DetailsContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
    height: 85.5vh;
`

const PokeImgContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 260px;
    width: 260px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PokeTypeContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 60px;
    width: 260px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const PokeStatsContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 430px;
    width: 290px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
const PokeMovesContainer = styled.div`
    background-color: #f2f2f2f2;
    height: 430px;
    width: 300px;
    margin: 20px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
const PokeImage = styled.img`
    width: 250px;
    height: 250px;
    padding: 1em;
`

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
            {pokeDetails ? <DetailsContainer>
                <BoxA>
                    <PokeImgContainer>
                    <PokeImage src={pokeDetails.sprites.other.dream_world.front_default} alt="pokemon"/>
                    </PokeImgContainer>
                    <PokeTypeContainer>
                        <p>tipos</p>
                    {pokeDetails.types.map((item) => {
                        return (<p>{item.type.name}</p>)
                    })}
                    </PokeTypeContainer>
                </BoxA>
                <BoxB>
                    <PokeStatsContainer>
                        {pokeDetails.stats.map((item) => {
                            return <p><strong>{item.stat.name}: </strong>{item.base_stat}</p>
                        })}
                    </PokeStatsContainer>
                </BoxB>
                <BoxC>
                    <PokeMovesContainer>
                        <h3>Principais Ataques</h3>
                        {pokeDetails.moves.map((item, index) => {
                            return index < 5 && <p>{item.move.name}</p>
                        })}
                    </PokeMovesContainer>
                </BoxC>

            </DetailsContainer>

                : null}

        </div>
    )
}
export default DetailsPage;
