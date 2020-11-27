import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export const StyledCard = styled(Card)`
    width: 250px;
    height: 400px;
    background-color: black;
    color: white;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const StyledImg = styled(Card.Img)`
    width: 200px;
    height: 200px;
    padding: 1em;
`

export const StyledButton = styled(Button)`
    width: 100px;
    height: 70px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
`
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  color: black;
  background-color: #FDE964;
  height: 5vh;
  padding: 1em;
  padding-top: 2em;
  width:100%;
  position: fixed;
  bottom: 0;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #FDE964;
  height: 8vh;
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

export const HeaderContainerD = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #FDE964;
  height: 8vh;
  position: relative;
`

export const ButtonRightD = styled(Button)`
  position: absolute;
  right: 10px;
  margin-right: 2em;
`

export const ButtonLeftD = styled(Button)`
  position: absolute;
  left: 10px;
  margin-left: 2em;
`

export const LogoD = styled.img`
  cursor: pointer;
  width: 10%;
`

export const StyledCardP = styled(Card)`
    width: 250px;
    height: 100%;
    background-color: black;
    color: white;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const StyledButtonP = styled(Button)`
    width: 100px;
    height: 70px;
`
export const ButtonsContainerP = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
`

export const StyledImgP = styled(Card.Img)`
    width: 200px;
    height: 200px;
    padding: 1em;
`