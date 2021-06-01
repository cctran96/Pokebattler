import React, { Component } from 'react'
import PokemonCard from '../components/PokemonCard'
import ViewPokemon from '../components/ViewPokemon'

const teamsUrl = "http://localhost:9393/teams"

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
        const obj = {
            name: this.state.teamName, 
            trainer_id: this.props.currentUser.id, 
            team: this.props.teamInProcess.map(pokemon => pokemon.name).join(", ")
        }
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "json/application",
                Accept: "json/application"
            },
            body: JSON.stringify(obj)
        }
        const save = () => {
            fetch(teamsUrl, config).then(r => r.json()).then(team => this.props.updateTrainerTeams(team.team))
            this.props.clearTeam()
        }
        this.props.currentUser ? save() : alert("Sign in to save your team!")
    }

    changeTeam = pokemon => {
        this.props.addToTeam(pokemon, this.state.search)
    }

    render() {
        const {teamInProcess, pokemon, moves} = this.props
        const cards = pokemon ? pokemon.map(p => 
        <PokemonCard 
            key={p.id} 
            pokemon={p} 
            viewInfo={this.viewInfo} 
            typeImg={this.props.typeImg} 
            addToTeam={this.changeTeam}
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
                                typeImg={this.props.typeImg} 
                                addToTeam={this.changeTeam}
                                teamInProcess={teamInProcess}
                            />)}
                            <form className="team-form" onSubmit={e => this.saveTeam(e)}>
                                <input onChange={e => this.nameInput(e)} type="text" value={this.state.teamName} placeholder="Name your team..." required/>
                                <input type="submit" value="Save Team"/>
                            </form>
                        </> : null}
                    </div>
                </div>
                {this.state.viewed ? 
                <ViewPokemon 
                    pokemon={this.state.viewed} 
                    typeImg={this.props.typeImg} 
                    viewInfo={this.viewInfo} 
                    addToTeam={this.changeTeam}
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