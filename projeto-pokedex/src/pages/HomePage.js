import React, { useContext } from 'react'
import PokemonContext from '../contexts/PokemonContext'
import { useRequestData } from '../hooks/useRequestData'
import { baseUrl } from '../constants/urls'
import CardPokemon from '../components/MainHome/CardPokemon'
import styled from 'styled-components'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: black;
  justify-content: center;
  gap: 3em;
  padding: 2em;
  padding-left: 5em;
`

function HomePage() {
  const data = useRequestData(`${baseUrl}`, undefined)

  return (
    <div>
      <GridContainer>
      {data && data.results.map((item) => {
        return <CardPokemon url={item.url} />
      })}
      </GridContainer>
    </div>
  );
}

export default HomePage;
