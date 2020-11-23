import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
color: black;
background-color: #FDE964;
width: 100;
height: 8vh;
margin-top:0;
`

const ButtomRight = styled.button`
margin-right:2em;
`

const ButtomLeft = styled.button`
margin-left: 2em;
`

function Header() {
    return (
      <HeaderContainer >
          <ButtomLeft> POKEDEX </ButtomLeft>
          <h1> LOGO </h1>
          <ButtomRight> Remover / Add Pokedex </ButtomRight>
      </HeaderContainer>
    );
  }
  
  export default Header;

