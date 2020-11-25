import React from 'react'
import styled from 'styled-components'
import CardPokemon from '../components/MainPokedex/CardPokemon'


const MainPokedex = styled.div`
display: flex;
align-items:center;
color: white;
background-color: black;
width: 100%;
height:80vh;
`

function PokedexPage() {
    return (
          <div>
          <MainPokedex><CardPokemon /></MainPokedex>
          </div>
    );
  }
  
  export default PokedexPage;
  