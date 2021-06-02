import React, { Component } from 'react'

class Battle extends Component {
    state = {
        enemyUser: "",
        yourTeam: this.props.currentTeam,
        yourCurrent: "",
        enemyTeam: [],
        enemyCurrent: "",
        log: []
    }

    componentDidMount(){
        
    }

    fetchEnemyTeam = () => {
        
    }

    render() {
        return (
            <div className="battle">
                {this.props.currentUser ? 
                <>
                    <div className="pokemon-battle">
                        <p>Test</p>
                    </div>
                    <div className="chatbox">
                        <ul>

                        </ul>
                    </div>
                </> 
                : <h2>Please sign in if you wish to battle</h2>}
            </div>
        )
    }
}

export default Battle

const front = pokemon => {
    switch(pokemon.name) {
        case "nidoran-♂":
            return `https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif`
        case "nidoran-♀":
            return `https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif`
        case "farfetch'd":
            return `https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif`
        case "mr. mime":
            return `https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif`
        default:
            return `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
    }
}

const back = pokemon => {
    switch(pokemon.name) {
        case "nidoran-♂":
            return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-m.gif`
        case "nidoran-♀":
            return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-f.gif`
        case "farfetch'd":
            return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/farfetchd.gif`
        case "mr. mime":
            return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/mr-mime.gif`
        default:
            return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${pokemon.name}.gif`
    }
}