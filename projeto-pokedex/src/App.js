import React from 'react'
import Router from './router/Router'
import PokemonContext from './contexts/PokemonContext'

const pokemons = {}

function App() {

  return (
    <PokemonContext.Provider value={pokemons}>
      <div className="App">
        <Router />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
