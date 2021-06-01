import React, { Component } from 'react'
import TeamCard from '../components/TeamCard'
import ViewInTeam from '../components/ViewInTeam'
import EditProfile from '../components/EditProfile'

class Profile extends Component {
    state = {
        viewed: null,
        editing: false
    }

    viewInfo = pokemon => {
        this.setState({viewed: this.state.viewed ? "" : pokemon})
    }

    editProfile = () => {
        this.setState({editing: !this.state.editing})
    }

    render() {
        const {currentUser, updateTrainer} = this.props
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
                    this.state.editing ? <EditProfile editProfile={this.editProfile} currentUser={currentUser} updateTrainer={updateTrainer} sprites={this.props.sprites}/> :
                    (<>
                        <div className="trainer-info">
                            <h2>{currentUser.name}</h2>
                            <h3>Wins: {currentUser.wins}</h3>
                            <h3>Losses: {currentUser.losses}</h3>
                            <img className="profile-img" src={require(`../images/Spr_B2W2_${currentUser.sprite.split(" ").join("_")}.png`).default} alt="trainer"/>
                            <h3>{currentUser.bio}</h3>
                            <button onClick={this.editProfile}>Edit Profile</button>
                        </div>
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
                    </>) : <h2>Please sign in to manage your Pokémon</h2>)}
            </div>
        )
    }
}

export default Profile