import React from 'react'

const TeamCard = ({pokemon, viewInfo, typeImg}) => {
    const name = pokemon.name === "mr. mime" ? pokemon.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") : pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    return (
        <div className="pokemon-card">
            <div className="button-container">
                <button onClick={() => viewInfo(pokemon)}>i</button>
            </div>
            <h4>{name}</h4>
            <img src={front(pokemon)} alt={pokemon.name}/>
            <div className="type-container">
                {pokemon.types.split(", ").map(type => <img key={pokemon.name + type} src={typeImg[type]} alt={type}/>)}
            </div>
        </div>
    )
}

export default TeamCard

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