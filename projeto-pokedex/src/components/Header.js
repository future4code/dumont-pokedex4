import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToHome } from '../router/coordinator'
import logo from '../assets/logo.svg'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #FDE964;
  width: 100vw;
  height: 8vh;
  position: relative;
`

const ButtonRight = styled.button`
  margin-right:2em;
  position: absolute;
  right: 10px;
`

const ButtonLeft = styled.button`
  margin-left: 2em;
  position: absolute;
  left: 10px;
`

const Logo = styled.img`
  cursor: pointer;
  width: 10%;
`

function Header({ leftButtonFunction, rightButtonFunction, buttonTitle }) {
  const history = useHistory()

  return (
    <HeaderContainer >
      <ButtonLeft onClick={() => leftButtonFunction(history)}> {buttonTitle} </ButtonLeft>
      <Logo src={logo} onClick={() => goToHome(history)} />
      {rightButtonFunction && <ButtonRight onClick={() => rightButtonFunction(history)} >
                Ir para pokedex
      </ButtonRight>}
    </HeaderContainer>
  );
}

export default Header;