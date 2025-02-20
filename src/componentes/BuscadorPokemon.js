//Formulario de búsqueda de Pokémon por nombre

import React, { useRef, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import TarjetaPokemon from "./TarjetaPokemon";
import BotonCapturar from "./BotonCapturar";

// 🔹 Componente para buscar Pokémon por nombre 
const BuscadorPokemon = () => {
    const inputRef = useRef(null); // 🔹 Referencia al input 
    const [nombrePokemon, setNombrePokemon] = useState(""); // 🔹 Estado para el nombre del Pokémon
    const [mostrarError, setMostrarError] = useState(false); // 🔹 Estado para mostrar error 
    const [busquedaRealizada, setBusquedaRealizada] = useState(false); // 🔹 Estado para saber si se realizó una búsqueda 

    // 🔹 URL de la API con el nombre del Pokémon 
    const url = nombrePokemon ? `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}` : null;
    const { datos: pokemon, cargando, error } = useFetch(url); // 🔹 Datos del Pokémon 

    // 🔹 Maneja la búsqueda del Pokémon 
    const manejarBusqueda = () => {
        const valor = inputRef.current.value.trim(); // 🔹 Obtiene el valor del input 
        if (valor) {
            setNombrePokemon(valor);
            setBusquedaRealizada(true);
            setMostrarError(false);
        }
    };

    // 🔹 Limpia la búsqueda 
    const limpiarBusqueda = () => {
        setNombrePokemon("");
        setBusquedaRealizada(false);
        setMostrarError(false);
        inputRef.current.value = "";
    };

    // 🔹 Muestra el error si no se encuentra el Pokémon    
    useEffect(() => {
        if (busquedaRealizada && error) {
            setMostrarError(true);
        } else {
            setMostrarError(false);
        }
    }, [error, busquedaRealizada]);

    // 🔹 Renderiza el formulario de búsqueda   
    return (
        <div>
            <h2>Buscar Pokémon</h2>
            <input ref={inputRef} type="text" placeholder="Ingresa un nombre o número..." />
            <button onClick={manejarBusqueda}>Buscar</button>
            <button className="boton-limpiar" onClick={limpiarBusqueda}>Limpiar Búsqueda</button>

            {cargando && <p>Cargando...</p>}
            
            {busquedaRealizada && mostrarError && !cargando && (
                <p style={{ color: "red" }}>❌ No se encontró el Pokémon.</p>
            )}

            {/* 🔹 Solo mostrar el Pokémon si hay datos */}
            {pokemon && !cargando && busquedaRealizada && (
                <div>
                    <TarjetaPokemon pokemon={pokemon} />
                    <BotonCapturar pokemon={pokemon} />
                </div>
            )}
        </div>
    );
};

export default BuscadorPokemon;
