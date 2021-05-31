import "./App.css"
import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./containers/Navbar"
import Home from './containers/Home'
import Team from './containers/Team'
import Profile from './containers/Profile'
import Battle from './containers/Battle'

const pokemonUrl = "http://localhost:9393/pokemon"
const movesUrl = "http://localhost:9393/moves"

class App extends Component {
  state = {
    allPokemon: [],
    pokemon: [],
    moves: [],
    teamInProcess: []
  }

  componentDidMount() {
    fetch(pokemonUrl).then(r => r.json()).then(pokemon => this.setState({pokemon: pokemon.pokemon, allPokemon: pokemon.pokemon}))
    fetch(movesUrl).then(r => r.json()).then(moves => this.setState({moves: moves.moves}))
  }

  filterSearch = input => {
    this.setState({pokemon: this.state.allPokemon.filter(p => !this.state.teamInProcess.includes(p) && p.name.includes(input))})
  }

  addToTeam = pokemon => {
    let team = this.state.teamInProcess
    team.includes(pokemon) ? this.setState({teamInProcess: team.filter(p => p !== pokemon)}) :
    (team.length < 6 ? this.setState({teamInProcess: [...team, pokemon]}) : alert("Your team can only be composed of 6 pokemon!"))
  }

  render() {
    return (
      <Router>
        <div className="route-container">
          <Navbar />
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/team" 
            render={() => 
              <Team 
                pokemon={this.state.pokemon} 
                filterSearch={this.filterSearch}
                addToTeam={this.addToTeam}
                teamInProcess={this.state.teamInProcess}
                moves={this.state.moves}
              />}/>
          <Route exact path="/profile" render={() => <Profile />}/>
          <Route exact path="/battle" render={() => <Battle />}/>
        </div>
      </Router>
    )
  }
}

export default App;