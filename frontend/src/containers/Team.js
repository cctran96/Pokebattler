import React, { Component } from 'react'
import PokemonCard from '../components/PokemonCard'
import ViewPokemon from '../components/ViewPokemon'

const typeImg = {
    normal: "https://cdn2.bulbagarden.net/upload/e/e4/NormalIC.gif",
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

class Team extends Component {
    state = {
        viewed: "",
    }

    viewInfo = pokemon => {
        this.setState({viewed: pokemon})
    }

    render() {
        const cards = this.props.pokemon ? this.props.pokemon.map(p => <PokemonCard key={p.id} pokemon={p} viewInfo={this.viewInfo} typeImg={typeImg}/>) : null
        return (
            this.state.viewed ? <ViewPokemon pokemon={this.state.viewed} typeImg={typeImg}/> :
            <div className="card-container">
                <div className="pokemon-container">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Team