import "./App.css"
import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./containers/Navbar"
import Home from './containers/Home'
import Team from './containers/Team'
import Profile from './containers/Profile'
import Battle from './containers/Battle'

const pokemonUrl = "http://localhost:9393/pokemon"

class App extends Component {
  state = {
    pokemon: []
  }

  componentDidMount() {
    fetch(pokemonUrl).then(r => r.json()).then(pokemon => this.setState({pokemon: pokemon.pokemon}))
  }

  render() {
    return (
      <Router>
        <div className="route-container">
          <Navbar />
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/team" render={() => <Team pokemon={this.state.pokemon}/>}/>
          <Route exact path="/profile" render={() => <Profile />}/>
          <Route exact path="/battle" render={() => <Battle />}/>
        </div>
      </Router>
    )
  }
}

export default App;
