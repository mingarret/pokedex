//Maneja el estado global de Pokémon capturados en la Pokédex
import React, { createContext, useReducer, useEffect } from "react";

// Creamos el contexto
export const PokemonContexto = createContext();

// Reducer para manejar la lista de Pokémon capturados
const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case "CAPTURAR":
            return [...estado, { ...accion.payload, fecha: new Date().toLocaleString() }];
        case "LIBERAR":
            return estado.filter(pokemon => pokemon.name !== accion.payload.name);
        case "CARGAR_LOCAL":
            return accion.payload;
        default:
            return estado;
    }
};

// Proveedor del contexto
export const PokemonProveedor = ({ children }) => {
    const [capturados, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        const datosGuardados = JSON.parse(localStorage.getItem("capturados"));
        if (datosGuardados) {
            dispatch({ tipo: "CARGAR_LOCAL", payload: datosGuardados });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("capturados", JSON.stringify(capturados));
    }, [capturados]);

    return (
        <PokemonContexto.Provider value={{ capturados, dispatch }}>
            {children}
        </PokemonContexto.Provider>
    );
};
