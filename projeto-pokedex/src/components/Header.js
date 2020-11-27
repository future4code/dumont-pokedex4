import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../router/coordinator'
import logo from '../assets/logo.svg'
import { HeaderContainer,ButtonLeft,Logo } from './styled'


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