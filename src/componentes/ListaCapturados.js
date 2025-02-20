//Lista de Pokémon capturados en la Pokédex
import React, { useContext } from "react";


import { PokemonContexto } from "../contexto/PokemonContexto";

const ListaCapturados = () => {
    const { capturados, dispatch } = useContext(PokemonContexto); // Obtenemos la lista de Pokémon capturados y la función dispatch del contexto global de Pokémon

    return (
        <div>
            <h2>Pokémon Capturados</h2>
            {capturados.length === 0 && <p>No has capturado ningún Pokémon.</p>}  {/* Mensaje que se muestra si no se ha capturado ningún Pokémon aún */}
            {capturados.map((pokemon, index) => (
                <div key={index}>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} /> {/* Imagen del Pokémon */}
                    <p>Capturado el: {pokemon.fecha}</p> {/* Fecha en la que se capturó el Pokémon */}
                    <button onClick={() => dispatch({ tipo: "LIBERAR", payload: pokemon })}> {/* Botón para liberar el Pokémon, que envía la acción de liberar al contexto global de Pokémon */}
                        Liberar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ListaCapturados;
