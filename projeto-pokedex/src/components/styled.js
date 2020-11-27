import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// styles dos cards
export const StyledCard = styled(Card)`
    width: 250px;
    height: 350px;
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

// styled do footer
export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  color: black;
  background-color: #FDE964;
  height: 4vh;
  padding: 1em;
  padding-top: 2em;
  width:100%;
`

