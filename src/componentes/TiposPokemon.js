import React from "react";

// 🔹 Colores de los tipos de Pokémon   
const coloresTipo = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

// 🔹 Componente para mostrar los tipos de un Pokémon
const TiposPokemon = ({ tipos }) => {
    return (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            {tipos.map((tipo, index) => ( // 🔹 Mapea los tipos del Pokémon
                <span 
                    key={index} 
                    style={{
                        backgroundColor: coloresTipo[tipo.type.name] || "#777",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontWeight: "bold"
                    }}
                >
                    {tipo.type.name.toUpperCase()} {/* 🔹 Muestra el tipo en mayúsculas */}
                </span>
            ))}
        </div>
    );
};

export default TiposPokemon;
