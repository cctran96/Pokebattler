import React, { Component } from 'react'

const enemyUrl = "http://localhost:9393/enemy/"
const battleUrl = "http://localhost:9393/battle/"

class Battle extends Component {
    state = {
        enemyUser: "",
        yourTeam: "",
        yourCurrent: "",
        enemyTeam: [],
        enemyCurrent: "",
        log: [],
        selectedMove: null,
        selectedPokemon: null,
        won: null,
        loss: null
    }

    componentDidUpdate(_, prevState) {
        if (prevState.log !== this.state.log) {
            const chat = document.querySelector(".chatbox")
            chat.scrollTop = chat.scrollHeight
        }
    }

    createPokemonObjects = team => {
        return team.team.split(", ").map(p => JSON.parse(JSON.stringify(this.props.allPokemon.find(pokemon => pokemon.name === p)))).map((p,idx) => ({...p, unique: idx, currentHP: p.hp}))
    }

    fetchEnemyTeam = () => {
        fetch(enemyUrl).then(r => r.json()).then(data => {
            let enemyTeam = this.createPokemonObjects(data.team)
            this.setState({enemyUser: data.trainer, enemyTeam: enemyTeam, enemyCurrent: enemyTeam[0]})
        })
    }

    startBattle = () => {
        let team = this.createPokemonObjects(this.props.currentTeam)
        this.props.handleBattleStart()
        this.fetchEnemyTeam()
        this.setState({yourTeam: team, yourCurrent: team[0]})
    }

    playAgain = () => {
        this.setState({won: null, loss: null})
        this.startBattle()
    }

    pokemonMoves = () => {
        return this.state.yourCurrent.moves.split(", ")
    }

    parseMoves = () => {
        return this.pokemonMoves().map(move => move.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" "))
    }

    healthColor = health => {
        if (health <= 0.3) {
            return "red"
        } else if (health <= 0.7) {
            return "yellow"
        }
        return "green"
    }
    
    selectMove = e => {
        this.state.yourCurrent.currentHP === 0 ? alert("Your pokemon has fainted! Please choose another pokemon.") :
        this.setState({selectedMove: e.target.id, selectedPokemon: null})
    }
    
    selectPokemon = e => {
        this.setState({selectedPokemon: e.target.name, selectedMove: null})
    }
    
    moveDamage = (attacker, defender, selectedMove) => {
        const move = this.props.moves.find(m => m.name === selectedMove)
        const attack = move.move_class === "physical" ? attacker.atk : attacker.sp_a
        const defense = move.move_class === "physical" ? defender.def : defender.sp_d
        const STAB = attacker.types.split(", ").includes(move.move_type) ? 1.5 : 1
        return Math.floor((((42 * move.power * (attack/defense))/50)+2) * ((Math.floor(Math.random() * (100 - 85 + 1)) + 85)/100) * STAB * type(defender, move))
    }
    
    enemySwitch = () => {
        const filtered = this.state.enemyTeam.filter(p => p.currentHP > 0)
        if (filtered.length !== 0) {
            return filtered[Math.floor(Math.random() * filtered.length)]
        }
        return
    }
    
    yourTeamCheck = () => {
        const filtered = this.state.yourTeam.filter(p => p.currentHP > 0)
        if (filtered.length === 0) {
            this.setState({loss: true})
            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({losses: this.props.currentUser.losses + 1})
            }
            fetch(battleUrl + this.props.currentUser.id, config).then(r => r.json()).then(data => this.props.updateTrainer(data.trainer))
        }
    }

    updateWin = () => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({wins: this.props.currentUser.wins + 1})
        }
        fetch(battleUrl + this.props.currentUser.id, config).then(r => r.json()).then(data => this.props.updateTrainer(data.trainer))
    }
    
    pokemonAttack = () => {
        const enemy = this.state.enemyCurrent
        const enemyName = pokemonName(enemy)
        const enemyMoves = enemy.moves.split(", ").map(m => this.props.moves.find(move => move.name === m))
        const selectedEnemyMove = enemyMoves[[Math.floor(Math.random() * enemyMoves.length)]].name
        const enemyMove = this.props.moves.find(m => m.name === selectedEnemyMove)
        const you = this.state.yourCurrent
        const yourName = pokemonName(you)
        const selectedMove = this.state.selectedMove
        const move = this.props.moves.find(m => m.name === selectedMove)
        const enemyDmg = this.moveDamage(enemy, you, selectedEnemyMove)
        const moveDmg = this.moveDamage(you, enemy, selectedMove)
        if (you.spd > enemy.spd) {
            let hpChange = enemy.currentHP - moveDmg
            let enemyObj = {...enemy, currentHP: hpChange > 0 ? hpChange : 0}
            let message = [...this.state.log, `Your ${yourName} used ${formattedMove(selectedMove)} on the opponent's ${enemyName}${effectiveness(type(enemy, move))} (Dealt ${moveDmg})`]
            this.setState({
                enemyCurrent: enemyObj,
                enemyTeam: this.state.enemyTeam.map(p => p.unique === enemyObj.unique ? enemyObj : p),
                log: hpChange > 0 ? message : [...message, `The opponent's ${enemyName} has fainted.`],
            }, () => {
                this.setState({selectedMove: null})
                let yourHp = you.currentHP - enemyDmg
                let yourObj = {...you, currentHP: yourHp > 0 ? yourHp : 0}
                let message = [...this.state.log, `The opponent's ${enemyName} used ${formattedMove(selectedEnemyMove)} on your ${yourName}${effectiveness(type(you, enemyMove))} (Dealt ${enemyDmg})`]
                if (hpChange > 0) {    
                    this.setState({
                        yourCurrent: yourObj,
                        yourTeam: this.state.yourTeam.map(p => p.unique === yourObj.unique ? yourObj : p),
                        log: yourHp > 0 ? message : [...message, `Your ${yourName} has fainted.`]
                    }, () => {
                        this.yourTeamCheck()
                    })
                } else {
                    if (this.enemySwitch()) {
                    this.setState({enemyCurrent: this.enemySwitch()}, () => {this.setState({log: [...this.state.log, `The opponent sends out their ${pokemonName(this.state.enemyCurrent)}`]})})
                    } else {
                        this.setState({won: true})
                        this.updateWin()
                    }
                }
            })
        } else {
            let yourHp = you.currentHP - enemyDmg
            let yourObj = {...you, currentHP: yourHp > 0 ? yourHp : 0}
            let message = [...this.state.log, `The opponent's ${enemyName} used ${formattedMove(selectedEnemyMove)} on your ${yourName}${effectiveness(type(you, enemyMove))} (Dealt ${enemyDmg})`]
            this.setState({
                yourCurrent: yourObj,
                yourTeam: this.state.yourTeam.map(p => p.unique === yourObj.unique ? yourObj : p),
                log: yourHp > 0 ? message : [...message, `Your ${yourName} has fainted.`]
            }, () => {
                this.yourTeamCheck()
                let hpChange = enemy.currentHP - moveDmg
                let enemyObj = {...enemy, currentHP: hpChange > 0 ? hpChange : 0}
                let message = [...this.state.log, `Your ${yourName} used ${formattedMove(selectedMove)} on the opponent's ${enemyName}${effectiveness(type(enemy, move))} (Dealt ${moveDmg})`]
                this.setState({selectedMove: null})
                if (yourHp > 0) {
                    this.setState({
                        enemyCurrent: enemyObj,
                        enemyTeam: this.state.enemyTeam.map(p => p.unique === enemyObj.unique ? enemyObj : p),
                        log: hpChange > 0 ? message : [...message, `The opponent's ${enemyName} has fainted.`],
                        won: this.enemySwitch() ? null : true
                    }, () => {
                        if (hpChange > 0) {
                            return
                        }
                        if (this.enemySwitch()) {
                            
                            this.setState({enemyCurrent: this.enemySwitch()}, () => {this.setState({log: [...this.state.log, `The opponent sends out their ${pokemonName(this.state.enemyCurrent)}`]})})
                        } else {
                            this.setState({won: true})
                            this.updateWin()
                        }
                    })
                }
            })
        }
    }

    switchPokemon = () => {
        const switching = this.state.yourTeam.find(pokemon => pokemon.unique === parseInt(this.state.selectedPokemon))
        const randFaint = faintPhrases[[Math.floor(Math.random() * faintPhrases.length)]]
        const randReturn = returnPhrases[[Math.floor(Math.random() * returnPhrases.length)]]
        const randSummon = summonPhrases[[Math.floor(Math.random() * summonPhrases.length)]]
        if (this.state.yourCurrent.currentHP === 0) {
            this.setState({
                yourCurrent: switching, 
                selectedPokemon: null,
                log: [...this.state.log, `${randFaint}${pokemonName(this.state.yourCurrent)}. ${randSummon}${pokemonName(switching)}!`]
            })
        } else {
            this.setState({
                yourCurrent: switching,
                selectedPokemon: null,
                log: [...this.state.log,`${randReturn}${pokemonName(this.state.yourCurrent)}. ${randSummon}${pokemonName(switching)}!`]
            }, () => {
                const enemy = this.state.enemyCurrent
                const enemyName = pokemonName(enemy)
                const enemyMoves = enemy.moves.split(", ").map(m => this.props.moves.find(move => move.name === m))
                const selectedEnemyMove = enemyMoves[[Math.floor(Math.random() * enemyMoves.length)]].name
                const enemyMove = this.props.moves.find(m => m.name === selectedEnemyMove)
                const you = this.state.yourCurrent
                const yourName = pokemonName(you)
                const enemyDmg = this.moveDamage(enemy, you, selectedEnemyMove)
                const yourHp = you.currentHP - enemyDmg
                const yourObj = {...you, currentHP: yourHp > 0 ? yourHp : 0}
                const message = [...this.state.log, `The opponent's ${enemyName} used ${formattedMove(selectedEnemyMove)} on your ${yourName} while it switched in${effectiveness(type(you, enemyMove))} (Dealt ${enemyDmg})`]
                this.setState({
                    yourCurrent: yourObj,
                    yourTeam: this.state.yourTeam.map(p => p.unique === yourObj.unique ? yourObj : p),
                    log: yourHp > 0 ? message : [...message, `Your ${pokemonName(this.state.yourCurrent)} has fainted.`]
                }, () => {
                    this.yourTeamCheck()
                })
            })
        }
    }

    simulateBattle = () => {
        if (this.state.selectedMove) {
            this.pokemonAttack()
        } else {
            this.switchPokemon()
        }
    }

    render() {
        const yourHealth = this.state.yourCurrent.currentHP/this.state.yourCurrent.hp
        const enemyHealth = this.state.enemyCurrent.currentHP/this.state.enemyCurrent.hp
        return (
            <div className="battle">
                {this.props.currentUser ? 
                <>
                    <div className="pokemon-battle">
                        {this.state.loss ? <div className="play-again lose"><h2>You lost!</h2><button onClick={this.playAgain}>Play Again</button></div> : (this.state.won ? <div className="play-again win"><h2>You won!</h2><button onClick={this.playAgain}>Play Again</button></div> :
                        (this.props.battling && this.state.yourCurrent ?
                        <div className="battle-container">
                            <div className="enemy-team">
                                {this.state.enemyCurrent ?
                                <div className="enemy-container">
                                    <div className="enemy-switch">
                                        <div>
                                            {this.state.enemyTeam.filter(p => p.currentHP > 0 && this.state.enemyCurrent.unique !== p.unique).map(pokemon => <img className={pokemon.unique} key={pokemon.unique} src={front(pokemon)} alt={pokemon}/>)}
                                        </div>
                                        <div className="enemy-health">
                                            <div className="your-health">
                                                <div className="pokemon-health" style={{background: this.healthColor(enemyHealth),width: `${enemyHealth*100}%`}}></div>
                                            </div>
                                            <p>{`${this.state.enemyCurrent.currentHP} / ${this.state.enemyCurrent.hp}`}</p>
                                        </div>
                                    </div>
                                    <div className="enemy-pokemon">
                                        <img src={front(this.state.enemyCurrent)} alt={this.state.enemyCurrent.name}/>
                                    </div>
                                </div>: null}
                            </div>
                            <div className="your-team">
                                {this.state.yourCurrent ?
                                    <div className="your-container">
                                        <div className="your-pokemon">
                                            <img src={back(this.state.yourCurrent)} alt={this.state.yourCurrent.name}/>
                                        </div>
                                        <div className="your-moves">
                                            <div className="health-container">
                                                <p>{`${this.state.yourCurrent.currentHP} / ${this.state.yourCurrent.hp}`}</p>
                                                <div className="your-health">
                                                    <div className="pokemon-health" style={{background: this.healthColor(yourHealth),width: `${yourHealth*100}%`}}></div>
                                                </div>
                                            </div>
                                            <table className="move-table">
                                                <tbody>
                                                    <tr>
                                                        <th onClick={this.selectMove} id={this.pokemonMoves()[0]} className={this.state.selectedMove === this.pokemonMoves()[0] ? "active-move" : null}>{this.parseMoves()[0]}</th>
                                                        <th onClick={this.selectMove} id={this.pokemonMoves()[1]} className={this.state.selectedMove === this.pokemonMoves()[1] ? "active-move" : null}>{this.parseMoves()[1]}</th>
                                                    </tr>
                                                    <tr>
                                                        <th onClick={this.selectMove} id={this.pokemonMoves()[2]} className={this.state.selectedMove === this.pokemonMoves()[2] ? "active-move" : null}>{this.parseMoves()[2]}</th>
                                                        <th onClick={this.selectMove} id={this.pokemonMoves()[3]} className={this.state.selectedMove === this.pokemonMoves()[3] ? "active-move" : null}>{this.parseMoves()[3]}</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="switch-pokemon">
                                                {this.state.selectedMove || this.state.selectedPokemon ? <button onClick={() => this.simulateBattle()}>Confirm</button> : null}
                                                <div className="switch-sprites">
                                                    {this.state.yourTeam.filter(p => p.currentHP > 0 && this.state.yourCurrent.unique !== p.unique).map(pokemon => <img onClick={e => this.selectPokemon(e)} className={parseInt(this.state.selectedPokemon) === pokemon.unique ? "active-pokemon" : null} name={pokemon.unique} key={pokemon.unique} src={front(pokemon)} alt={pokemon.name}/>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>: null}
                            </div>
                        </div> : <button onClick={this.startBattle}>Start Battle</button>))}
                    </div>
                    <div className="chatbox">
                        <ul>
                            {this.state.log.map(action => <li className={action.startsWith("The") ? "enemy-log" : "your-log"}>{action}</li>)}
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

const weakness = {
    normal: {
        normal: 1, fight: 2, flying: 1, poison: 1, ground: 1, rock: 1, bug: 1, ghost: 0, steel: 1, fire: 1, water: 1, grass: 1, electric: 1, psychic: 1, ice: 1, dragon: 1, dark: 1, fairy: 1
    },
    fight: {
        normal: 1, fight: 1, flying: 2, poison: 1, ground: 1, rock: 0.5, bug: 0.5, ghost: 1, steel: 1, fire: 1, water: 1, grass: 1, electric: 1, psychic: 2, ice: 1, dragon: 1, dark: 0.5, fairy: 2
    },
    flying: {
        normal: 1, fight: 0.5, flying: 1, poison: 1, ground: 0, rock: 2, bug: 0.5, ghost: 1, steel: 1, fire: 1, water: 1, grass: 0.5, electric: 2, psychic: 1, ice: 2, dragon: 1, dark: 1, fairy: 1
    },
    poison: {
        normal: 1, fight: 0.5, flying: 1, poison: 0.5, ground: 2, rock: 1, bug: 0.5, ghost: 1, steel: 1, fire: 1, water: 1, grass: 0.5, electric: 1, psychic: 2, ice: 1, dragon: 1, dark: 1, fairy: 0.5
    },
    rock: {
        normal: 0.5, fight: 2, flying: 0.5, poison: 0.5, ground: 2, rock: 1, bug: 1, ghost: 1, steel: 2, fire: 0.5, water: 2, grass: 2, electric: 1, psychic: 1, ice: 1, dragon: 1, dark: 1, fairy: 1
    },
    bug: {
        normal: 1, fight: 0.5, flying: 2, poison: 1, ground: 0.5, rock: 2, bug: 1, ghost: 1, steel: 1, fire: 2, water: 1, grass: 0.5, electric: 1, psychic: 1, ice: 1, dragon: 1, dark: 1, fairy: 1
    },
    ghost: {
        normal: 0, fight: 0, flying: 1, poison: 0.5, ground: 1, rock: 1, bug: 0.5, ghost: 2, steel: 1, fire: 1, water: 1, grass: 1, electric: 1, psychic: 1, ice: 1, dragon: 1, dark: 2, fairy: 1
    },
    steel: {
        normal: 0.5, fight: 2, flying: 0.5, poison: 0, ground: 2, rock: 0.5, bug: 0.5, ghost: 1, steel: 0.5, fire: 0.5, water: 1, grass: 0.5, electric: 1, psychic: 0.5, ice: 0.5, dragon: 0.5, dark: 1, fairy: 0.5
    },
    fire: {
        normal: 1, fight: 1, flying: 1, poison: 1, ground: 2, rock: 2, bug: 0.5, ghost: 1, steel: 0.5, fire: 0.5, water: 2, grass: 0.5, electric: 1, psychic: 1, ice: 0.5, dragon: 1, dark: 1, fairy: 0.5
    },
    water: {
        normal: 1, fight: 1, flying: 1, poison: 1, ground: 1, rock: 1, bug: 1, ghost: 1, steel: 0.5, fire: 0.5, water: 0.5, grass: 2, electric: 2, psychic: 1, ice: 0.5, dragon: 1, dark: 1, fairy: 1
    },
    electric: {
        normal: 1, fight: 1, flying: 0.5, poison: 1, ground: 2, rock: 1, bug: 1, ghost: 1, steel: 0.5, fire: 1, water: 1, grass: 1, electric: 0.5, psychic: 1, ice: 1, dragon: 1, dark: 1, fairy: 1
    },
    psychic: {
        normal: 1, fight: 0.5, flying: 1, poison: 1, ground: 1, rock: 1, bug: 2, ghost: 2, steel: 1, fire: 1, water: 1, grass: 1, electric: 1, psychic: 0.5, ice: 1, dragon: 1, dark: 2, fairy: 1
    },
    ice: {
        normal: 1, fight: 2, flying: 1, poison: 1, ground: 1, rock: 2, bug: 1, ghost: 1, steel: 2, fire: 2, water: 1, grass: 1, electric: 1, psychic: 1, ice: 0.5, dragon: 1, dark: 1, fairy: 1
    },
    dragon: {
        normal: 1, fight: 1, flying: 1, poison: 1, ground: 1, rock: 1, bug: 1, ghost: 1, steel: 1, fire: 0.5, water: 0.5, grass: 0.5, electric: 0.5, psychic: 1, ice: 2, dragon: 2, dark: 1, fairy: 2
    },
    dark: {
        normal: 1, fight: 2, flying: 1, poison: 1, ground: 1, rock: 1, bug: 2, ghost: 0.5, steel: 1, fire: 1, water: 1, grass: 1, electric: 1, psychic: 0, ice: 1, dragon: 1, dark: 0.5, fairy: 2
    },
    grass: {
        normal: 1, fight: 1, flying: 2, poison: 2, ground: 0.5, rock: 1, bug: 2, ghost: 1, steel: 1, fire: 2, water: 0.5, grass: 0.5, electric: 0.5, psychic: 1, ice: 2, dragon: 1, dark: 1, fairy: 1
    },
    fairy: {
        normal: 1, fight: 0.5, flying: 1, poison: 2, ground: 1, rock: 1, bug: 0.5, ghost: 1, steel: 2, fire: 1, water: 1, grass: 1, electric: 1, psychic: 1, ice: 1, dragon: 0, dark: 0.5, fairy: 1
    },
    ground: {
        normal: 1, fight: 1, flying: 1, poison: 0.5, ground: 1, rock: 0.5, bug: 1, ghost: 1, steel: 1, fire: 1, water: 2, grass: 2, electric: 0, psychic: 1, ice: 2, dragon: 1, dark: 1, fairy: 1
    }
}

const type = (defender, move) => {
    let total = 1
    defender.types.split(", ").forEach(type => {
        total *= weakness[type][move.move_type]
    })
    return move.name === "splash" ? 0 : total
}

const pokemonName = pokemon => {
    return pokemon.name === "mr. mime" ? pokemon.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") : pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
}

const formattedMove = move => {
    return move.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

const effectiveness = type => {
    if (type === 0) {
        return ", but it had no effect!"
    } else if (type < 1) {
        return ", but it wasn't very effective!"
    }
    else if (type >= 2) {
        return ", and it was super effective!"
    }
    return "."
}

const faintPhrases = ["You did well, ", "Thanks for your efforts, ", "You fought well, "]
const returnPhrases = ["That's enough for now ", "Come back ", "Return "]
const summonPhrases = ["I choose you ", "Go ", "Let's do this "]