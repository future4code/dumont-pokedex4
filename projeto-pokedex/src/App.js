import React from 'react'
import GlobalState from './global/GlobalState'
import Router from './router/Router'

function App() {

  return (
      <GlobalState>
        <Router />
      </GlobalState>
  );
}

export default App;

// app limpinho, apenas com o globalState e o router, como a chijo ensinou na aula <3
