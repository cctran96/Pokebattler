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
        search: "",
        viewed: "",
        teamName: ""
    }

    viewInfo = pokemon => {
        this.setState({viewed: this.state.viewed ? "" : pokemon})
    }

    nameInput  = e => {
        this.setState({teamName: e.target.value})
    }

    changeSearch = e => {
        this.setState({search: e.target.value})
        this.props.filterSearch(e.target.value)
    }

    saveTeam = e => {
        e.preventDefault()
        // const obj = {name: , trainer_id: , team:}
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "json/application",
                Accept: "json/application"
            },
            body: JSON.stringify(obj)
        }
        this.props.clearTeam()
    }

    render() {
        const {teamInProcess, pokemon, addToTeam, moves} = this.props
        const cards = pokemon ? pokemon.map(p => 
        <PokemonCard 
            key={p.id} 
            pokemon={p} 
            viewInfo={this.viewInfo} 
            typeImg={typeImg} 
            addToTeam={addToTeam}
            teamInProcess={teamInProcess}
        />) : null
        return (
            <>
                <div className="team-container">
                    <div className="pokemon-container">
                        {teamInProcess.length > 0 ?
                        <>
                            {teamInProcess.map(p => 
                             <PokemonCard 
                                key={p.id} 
                                pokemon={p} 
                                viewInfo={this.viewInfo} 
                                typeImg={typeImg} 
                                addToTeam={addToTeam}
                                teamInProcess={teamInProcess}
                            />)}
                            <form className="team-form" onSubmit={e => this.saveTeam(e)}>
                                <input onChange={e => this.nameInput(e)} type="text" value={this.state.teamName}/>
                                <input type="submit" value="Save Team"/>
                            </form>
                        </> : null}
                    </div>
                </div>
                {this.state.viewed ? 
                <ViewPokemon 
                    pokemon={this.state.viewed} 
                    typeImg={typeImg} 
                    viewInfo={this.viewInfo} 
                    addToTeam={addToTeam}
                    teamInProcess={teamInProcess}
                    moves={moves}
                /> :
                <div className="card-container">
                    <input className="poke-search" onChange={e => this.changeSearch(e)}type="text" value={this.state.search} placeholder="Search for a pokemon..."/>
                    <div className="pokemon-container">
                        {cards}
                    </div>
                </div>}
            </>
        )
    }
}

export default Team