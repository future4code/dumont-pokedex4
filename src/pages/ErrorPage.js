import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
    height: 85.5vh;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`

function ErrorPage() {
    return (
      <ErrorContainer>
        <h3>Página não encontrada :(</h3>
    </ErrorContainer>
    );
  }
  
  export default ErrorPage;
  