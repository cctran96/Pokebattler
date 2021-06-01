import React, { Component } from 'react'
import TeamCard from '../components/TeamCard'
import ViewInTeam from '../components/ViewInTeam'

const sprite = "https://archives.bulbagarden.net/media/upload/4/4e/Spr_B2W2_Hilbert_2.png"

class Profile extends Component {
    state = {
        viewed: null
    }

    viewInfo = pokemon => {
        this.setState({viewed: this.state.viewed ? "" : pokemon})
    }

    render() {
        const {currentUser} = this.props
        return (
            <div className="profile">
                {this.state.viewed ?
                <ViewInTeam
                    pokemon={this.state.viewed} 
                    typeImg={this.props.typeImg} 
                    viewInfo={this.viewInfo}
                    moves={this.props.moves}
                /> :
                (currentUser ? 
                <>
                    <h2>{currentUser.name}</h2>
                    <h3>Wins: {currentUser.wins}</h3>
                    <h3>Losses: {currentUser.losses}</h3>
                    <img className="profile-img" src={sprite} alt="trainer"/>
                    <h3>{currentUser.bio}</h3>
                    <div className="trainer-teams">
                        {this.props.trainerTeams.map((team, idx) =>
                            <div key={idx}>
                                <div className="delete-team">
                                    <h2>{team.name}</h2>
                                    <button onClick={() => this.props.deleteTeam(team.id)}>Delete</button>
                                </div>
                                <div className="pokemon-container">
                                    {team.team.split(", ").map(pokemon => this.props.allPokemon.find(p => p.name === pokemon)).map((pokemon,idx)=>
                                        <TeamCard
                                            key={idx}
                                            pokemon={pokemon}
                                            viewInfo={this.viewInfo}
                                            typeImg={this.props.typeImg}
                                        />)}
                                </div>
                            </div>
                        )}
                    </div>
                </> : <h2>Please sign in to manage your Pokémon</h2>)}
            </div>
        )
    }
}

export default Profile