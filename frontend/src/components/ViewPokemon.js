import React from "react";

const ViewPokemon = ({pokemon, typeImg, viewInfo, addToTeam, teamInProcess, moves}) => {
    const name = pokemon.name === "mr. mime" ? pokemon.name.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ") : pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const img = `https://www.cpokemon.com/pokes/pokemon-artwork/${pokemon.id}.png`
    const moveNames = pokemon.moves.split(", ").map(move => move.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
    const moveTypes = pokemon.moves.split(", ").map(move => moves.find(m => m.name === move).move_type)

    return (
        <div className="info-container">
            <h2>{name}</h2>
            <img className="p-img" src={img} alt={pokemon.name}/>
            <div className="type-container">
                {pokemon.types.split(", ").map(type => <img key={pokemon.name + type} src={typeImg[type]} alt={type}/>)}
            </div>
            <div>
                <button className="return" onClick={viewInfo}>Return</button>
                {teamInProcess.includes(pokemon) ? <button className="remove" onClick={() => addToTeam(pokemon)}>Remove</button> : <button className="add" onClick={() => addToTeam(pokemon)}>Add</button>}
            </div>
            <table className="stats">
                <tbody>
                    <tr>
                        <th>HP</th>
                        <th>Attack</th>
                        <th>Defense</th>
                        <th>Special Attack</th>
                        <th>Special Defense</th>
                        <th>Speed</th>
                    </tr>
                    <tr>
                        <th>{pokemon.hp}</th>
                        <th>{pokemon.atk}</th>
                        <th>{pokemon.def}</th>
                        <th>{pokemon.sp_a}</th>
                        <th>{pokemon.sp_d}</th>
                        <th>{pokemon.spd}</th>
                    </tr>
                </tbody>
            </table>
            <table className="moves">
                <tbody>
                    <tr>
                        {moveNames.map(move => <th key={move}>{move}</th>)}
                    </tr>
                    <tr>
                        {moveTypes.map(type => <th key={Math.random()}>{<img src={typeImg[type]} alt={type}/>}</th>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ViewPokemon