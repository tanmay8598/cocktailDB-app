import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//pages
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import SingleCocktail from './components/SingleCocktail'
import Error from './Pages/Error'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cocktail/:id'>
          <SingleCocktail />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
