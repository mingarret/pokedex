//Menú de navegación de la aplicación

import React from "react";

const Navbar = ({ setVista }) => { // Recibe la función setVista como prop para cambiar la vista de la aplicación
    return (
        <nav>
            <button onClick={() => setVista("busqueda")}>🔍 Buscar Pokémon</button> {/* Botón para cambiar a la vista de búsqueda de Pokémon */}
            <button onClick={() => setVista("capturados")}>📋 Mis Pokémon</button>  {/* Botón para cambiar a la vista de Pokémon capturados */}
        </nav>
    );
};

export default Navbar;
