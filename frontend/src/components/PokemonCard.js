import React from 'react'

const PokemonCard = ({pokemon, viewInfo, typeImg}) => {
    const front = () => {
        switch(pokemon.name) {
            case "nidoran-♂":
                return `https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif`
                break
            case "nidoran-♀":
                return `https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif`
                break
            case "farfetch'd":
                return `https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif`
                break
            case "mr. mime":
                return `https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif`
                break
            default:
                return `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`
        }
    }
    const back = () => {
        switch(pokemon.name) {
            case "nidoran-♂":
                return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-m.gif`
                break
            case "nidoran-♀":
                return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoran-f.gif`
                break
            case "farfetch'd":
                return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/farfetchd.gif`
                break
            case "mr. mime":
                return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/mr-mime.gif`
                break
            default:
                return `https://img.pokemondb.net/sprites/black-white/anim/back-normal/${pokemon.name}.gif`
        }
    }
    const name = pokemon.name === "mr.mime" ? pokemon.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") : pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    return (
        <div className="pokemon-card" onClick={() => viewInfo(pokemon)}>
            <h4>{name}</h4>
            <img src={front()} alt={pokemon.name}/>
            <div className="type-container">
                {pokemon.types.split(", ").map(type => <img key={pokemon.name + type} src={typeImg[type]} alt={type}/>)}
            </div>
        </div>
    )
}

export default PokemonCard