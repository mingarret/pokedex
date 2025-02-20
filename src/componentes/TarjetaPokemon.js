//Tarjeta con la información del Pokémon en la Pokédex

import React from "react";

const TarjetaPokemon = ({ pokemon }) => {
    // Validamos que los datos del Pokémon existan correctamente antes de renderizar
    if (!pokemon || !pokemon.sprites || !pokemon.sprites.front_default) { // Si no hay datos del Pokémon o no hay imagen, no muestra nada en la tarjeta
        return null; // No muestra nada si no hay datos válidos
    }

    return (
        <div className="tarjeta">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p><strong>Altura:</strong> {pokemon.height} cm</p>
            <p><strong>Peso:</strong> {pokemon.weight} Kg</p>
        </div>
    );
};

export default TarjetaPokemon;
