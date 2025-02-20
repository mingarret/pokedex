//Botón para liberar Pokémon en la Pokédex

import React, { useContext } from "react";
import { PokemonContexto } from "../contexto/PokemonContexto";

const BotonLiberar = ({ pokemon }) => {
    const { dispatch } = useContext(PokemonContexto); // Obtenemos la función dispatch del contexto global para liberar el Pokémon

    const liberarPokemon = () => {
        dispatch({ tipo: "LIBERAR", payload: pokemon }); // Enviamos la acción de liberar el Pokémon al contexto global
    };

    return <button onClick={liberarPokemon}>Liberar</button>; // Botón que llama a la función liberarPokemon al hacer clic en él
};

export default BotonLiberar;
