import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
color: black;
background-color: #FDE964;
width: 100vw;
height: 5vh;
margin-top:700px;
position:fixed;
bottom: 1;
`


function Footer() {
    return (
      <FooterContainer >
          
          <p> Desenvolvido por DevsTops!  </p>
          
      </FooterContainer>
    );
  }
  
  export default Footer;

