import React from 'react'
import Header from '../components/MainPokedex/Header'
import Footer from '../components/Footer/Footer'
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
          <Header />
          <MainPokedex><CardPokemon /></MainPokedex>
        <Footer />
          </div>
    );
  }
  
  export default PokedexPage;
  