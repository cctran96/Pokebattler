import "./App.css"
import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Navbar from "./containers/Navbar"
import Home from './containers/Home'
import Team from './containers/Team'
import Profile from './containers/Profile'
import Battle from './containers/Battle'
import Signup from './containers/Signup'

const pokemonUrl = "http://localhost:9393/pokemon/"
const movesUrl = "http://localhost:9393/moves/"
const teamsUrl = "http://localhost:9393/teams/"
const fetchData = url => fetch(url).then(r => r.json())

class App extends Component {
  state = {
    trainerTeams: [],
    currentUser: "",
    currentTeam: "",
    allPokemon: [],
    pokemon: [],
    moves: [],
    teamInProcess: [],
    battling: false
  }

  login = (user, team) => {
    this.setState({currentUser: user, trainerTeams: team, currentTeam: team[0]})
  }

  logout = () => {
    this.setState({currentUser: "", trainerTeams: []})
  }

  componentDidMount() {
    fetchData(pokemonUrl).then(pokemon => this.setState({pokemon: pokemon.pokemon, allPokemon: pokemon.pokemon}))
    fetchData(movesUrl).then(moves => this.setState({moves: moves.moves}))
  }

  filterSearch = input => {
    this.setState({pokemon: this.state.allPokemon.filter(p => !this.state.teamInProcess.includes(p) && p.name.includes(input))})
  }

  restorePokemon = input => {
    this.setState({pokemon: this.state.allPokemon.filter(p => p.name.includes(input))})
  }

  addToTeam = (pokemon, input) => {
    let team = this.state.teamInProcess
    team.includes(pokemon) ? this.setState({teamInProcess: team.filter(p => p !== pokemon), pokemon: this.state.allPokemon.filter(p => (!team.includes(p) && p.name.includes(input)) || (p === pokemon && p.name.includes(input)))}) :
    (team.length < 6 ? this.setState({teamInProcess: [...team, pokemon], pokemon: this.state.pokemon.filter(p => p !== pokemon)}) : alert("Your team can only be composed of 6 pokemon!"))
  }

  clearTeam = () => {
    this.setState({teamInProcess: []})
  }

  updateTrainerTeams = team => {
    this.setState({trainerTeams: [...this.state.trainerTeams, team]},
      () => {
        this.state.trainerTeams.length === 1 ? this.setCurrentTeam(team) : console.log()
      })
  }

  deleteTeam = id => {
    const newTeam = this.state.trainerTeams.filter(team => team.id !== id)
    fetch(teamsUrl + id, {method: "DELETE"}).then(this.setState({trainerTeams: newTeam}))
    this.state.currentTeam.id === id ? this.setState({currentTeam: newTeam[0]}) : console.log()
  }

  updateTrainer = info => {
    this.setState({currentUser: info})
  }

  setCurrentTeam = team => {
    this.setState({currentTeam: team, battling: false})
  }

  handleBattleStart = () => {
    this.setState({battling: true})
  }

  render() {
    return (
      <Router>
        <div className="route-container">
          <Navbar login={this.login} logout={this.logout} currentUser={this.state.currentUser}/>
          <Route exact path="/" render={() => <Home />}/>
          {this.state.currentUser ? null : <Route exact path="/signup" render={() => <Signup login={this.login}/>}/>}
          <Route exact path="/team" 
            render={() => 
              <Team 
                pokemon={this.state.pokemon} 
                filterSearch={this.filterSearch}
                addToTeam={this.addToTeam}
                clearTeam={this.clearTeam}
                teamInProcess={this.state.teamInProcess}
                moves={this.state.moves}
                currentUser={this.state.currentUser}
                updateTrainerTeams={this.updateTrainerTeams}
                typeImg={typeImg}
                restorePokemon={this.restorePokemon}
              />}/>
          <Route exact path="/profile" 
            render={() => 
              <Profile
                currentUser={this.state.currentUser}
                currentTeam={this.state.currentTeam}
                setCurrentTeam={this.setCurrentTeam}
                trainerTeams={this.state.trainerTeams}
                allPokemon={this.state.allPokemon}
                typeImg={typeImg}
                moves={this.state.moves}
                deleteTeam={this.deleteTeam}
                updateTrainer={this.updateTrainer}
                sprites={this.state.sprites}
              />}/>
          <Route exact path="/battle" 
            render={() => 
              <Battle 
                currentUser={this.state.currentUser}
                currentTeam={this.state.currentTeam}
                battling={this.state.battling}
                handleBattleStart={this.handleBattleStart}
                allPokemon={this.state.allPokemon}
                moves={this.state.moves}
                updateTrainer={this.updateTrainer}
              />}/>
        </div>
      </Router>
    )
  }
}

export default App;

const typeImg = {
  normal: "https://archives.bulbagarden.net/media/upload/3/39/NormalIC_Big.png",
  fight: "https://cdn2.bulbagarden.net/upload/8/8e/FightingIC.gif",
  flying: "https://cdn2.bulbagarden.net/upload/7/73/FlyingIC.gif",
  poison: "https://cdn2.bulbagarden.net/upload/7/71/PoisonIC.gif",
  ground: "https://cdn2.bulbagarden.net/upload/d/d9/GroundIC.gif",
  rock: "https://cdn2.bulbagarden.net/upload/1/15/RockIC.gif",
  bug: "https://cdn2.bulbagarden.net/upload/2/2a/BugIC.gif",
  ghost: "https://cdn2.bulbagarden.net/upload/4/48/GhostIC.gif",
  steel: "https://cdn2.bulbagarden.net/upload/6/69/SteelIC.gif",
  fire: "https://cdn2.bulbagarden.net/upload/d/d0/FireIC.gif",
  water: "https://cdn2.bulbagarden.net/upload/c/cc/WaterIC.gif",
  grass: "https://cdn2.bulbagarden.net/upload/8/8a/GrassIC.gif",
  electric: "https://cdn2.bulbagarden.net/upload/f/f7/ElectricIC.gif",
  psychic: "https://cdn2.bulbagarden.net/upload/2/23/PsychicIC.gif",
  ice: "https://cdn2.bulbagarden.net/upload/7/70/IceIC.gif",
  dragon: "https://cdn2.bulbagarden.net/upload/5/57/DragonIC.gif",
  dark: "https://cdn2.bulbagarden.net/upload/e/e9/DarkIC.gif",
  fairy: "https://cdn2.bulbagarden.net/upload/6/61/FairyIC.gif"   
}