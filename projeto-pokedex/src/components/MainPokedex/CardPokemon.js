import React from 'react'
import styled from 'styled-components'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CardContainer = styled.div`
  border: 3px solid white;
  padding: 4px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  width: 400px;
  height: 450px;
  margin: 12px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  align-items: center;
  
`;

const Photo = styled.img`
  width: 100%;
  max-height: 350px;
`;

const Name = styled.p`
  display:inline;
  justify-content:center;
  flex-direction:row;
  color: black;
  font-size: 30px;
  margin: 0 0 4px 0;
  font-weight: 600;
  border: 1px solid black;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content:space-around;
`
const ButtonRemove = styled.button`
 border: 3px solid white;
  padding: 4px;
  border-radius: 5px;
`


const StyleCard = styled(Card)`
 border: 3px solid white;
  padding: 4px;
  border-radius: 5px;
  width: 18rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

function CardPokemon() {
        
  
    return (
        
        <StyleCard>
        <Card.Img variant="top" src="https://picsum.photos/200/300" />
        <Card.Body>
          <Card.Title>Pokemon Bonitinho</Card.Title>
          <Button variant="primary"> Remover da Pokedex </Button>
          <Button variant="primary"> Ver detalhes </Button>
        </Card.Body>
      </StyleCard>


    );
  }
  
  export default CardPokemon;