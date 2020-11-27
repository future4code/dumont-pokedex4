import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #FDE964;
  height: 9vh;
  position: relative;
`

export const ButtonLeft = styled(Button)`
  position: absolute;
  left: 10px;
  margin-left: 2em;
`

export const Logo = styled.img`
  cursor: pointer;
  width: 10%;
  @media screen and (min-device-width : 320px) and (max-device-width : 420px) {
    width: 28%;
  }
`

export const ButtonRight = styled(Button)`
  position: absolute;
  right: 10px;
  margin-right: 2em;
`
