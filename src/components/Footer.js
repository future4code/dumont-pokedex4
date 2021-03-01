import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  color: black;
  background-color: #FDE964;
  height: 5vh;
  padding: 1em;
  padding-top: 2em;
  position: fixed;
  bottom: 0;
  width: 100%;
`

function Footer() {
    return (
      <FooterContainer>
          <p> pokedex </p>
      </FooterContainer>
    );
  }
  
  export default Footer;

