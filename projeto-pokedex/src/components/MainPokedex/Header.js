import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToHome } from '../../router/coordinator'

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
cursor: pointer;
`

const Title = styled.h1`
  cursor: pointer;
`

function Header() {
  const history = useHistory()
  

  return (
    <HeaderContainer >
      <ButtomLeft onClick={() => goToHome(history)}> VOLTAR </ButtomLeft>
      <Title  onClick={() => goToHome(history)}> LOGO </Title>
      <ButtomRight></ButtomRight>
    </HeaderContainer>
  );
}

export default Header;