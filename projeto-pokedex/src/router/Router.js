import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokedexPage from '../pages/PokedexPage'
import DetailsPage from '../pages/DetailsPage'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'

function Router() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path= "/detalhes">
                <DetailsPage />
            </Route>
            <Route exact path= "/pokedex">
                <PokedexPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;

//   /:id
  