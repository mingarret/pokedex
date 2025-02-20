//Botón para capturar Pokémon en la Pokédex

import React, { useContext } from "react";
import { PokemonContexto } from "../contexto/PokemonContexto";

// Componente que muestra un botón para capturar un Pokémon en la Pokédex
const BotonCapturar = ({ pokemon }) => {
    const { dispatch } = useContext(PokemonContexto); // Obtenemos la función dispatch del contexto global

    const capturarPokemon = () => {
        dispatch({ tipo: "CAPTURAR", payload: pokemon }); // Enviamos la acción de capturar el Pokémon al contexto
    };

    return <button onClick={capturarPokemon}>Capturar</button>; // Botón que llama a la función capturarPokemon al hacer clic en él
};

export default BotonCapturar;
