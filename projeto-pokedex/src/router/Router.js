import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokedexPage from '../pages/PokedexPage'
import DetailsPage from '../pages/DetailsPage'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import { goToPokedex, goToHome } from '../router/coordinator'

function Router() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Header leftButtonFunction={goToPokedex} buttonTitle={"Pokedex"} />
                <HomePage />
                <Footer />
            </Route>
            <Route exact path= "/detalhes">
                <Header leftButtonFunction={goToHome}
                        rightButtonFunction={goToPokedex} buttonTitle={"Ver Pokemons"}/>
                <DetailsPage />
                <Footer />
            </Route>
            <Route exact path= "/pokedex">
                <Header leftButtonFunction={goToHome} buttonTitle={"Voltar"}/>
                <PokedexPage />
                <Footer />
            </Route>
            <Route>
                <Header leftButtonFunction={goToHome} />
                <ErrorPage />
                <Footer />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;

//   /:id
  