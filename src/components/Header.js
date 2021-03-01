import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToHome } from '../router/coordinator'
import logo from '../assets/logo.svg'
import Button from 'react-bootstrap/Button'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #FDE964;
  height: 8vh;
  position: relative;
`

const ButtonLeft = styled(Button)`
  position: absolute;
  left: 10px;
  margin-left: 2em;
`

const Logo = styled.img`
  cursor: pointer;
  width: 10%;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 28%;
  }
`

function Header({ leftButtonFunction, buttonTitle }) {
  const history = useHistory()

  return (
    <HeaderContainer >
      <ButtonLeft variant="danger"onClick={() => leftButtonFunction(history)}> {buttonTitle} </ButtonLeft>
      <Logo src={logo} onClick={() => goToHome(history)} />
    </HeaderContainer>
  );
}

export default Header;