import React from 'react'

const PokemonCard = ({pokemon, viewInfo, typeImg}) => {
    const front = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
    const back = `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${pokemon.name}.gif`
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    return (
        <div className="pokemon-card" onClick={() => viewInfo(pokemon)}>
            <h4>{name}</h4>
            <img src={front} alt={pokemon.name}/>
            <div className="type-container">
                {pokemon.types.split(", ").map(type => <img key={pokemon.name + type} src={typeImg[type]} alt={type}/>)}
            </div>
        </div>
    )
}

export default PokemonCard