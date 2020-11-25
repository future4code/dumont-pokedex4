import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  color: black;
  background-color: #FDE964;
  height: 5vh;

`


function Footer() {
    return (
      <FooterContainer >
          
          <p> Desenvolvido por DevsTops!  </p>
          
      </FooterContainer>
    );
  }
  
  export default Footer;

