//Componente principal de la aplicación

import React, { useState } from "react";
import { PokemonProveedor } from "./contexto/PokemonContexto";
import BuscadorPokemon from "./componentes/BuscadorPokemon";
import ListaCapturados from "./componentes/ListaCapturados";
import Navbar from "./componentes/Navbar";
import "./estilos.css";  // Importamos los estilos

const App = () => {
    const [vista, setVista] = useState("busqueda");

    return (
        <PokemonProveedor>
            <div className="contenedor">
                <h1>Pokédex</h1>
                <Navbar setVista={setVista} />
                {vista === "busqueda" && <BuscadorPokemon />}
                {vista === "capturados" && <ListaCapturados />}
            </div>
        </PokemonProveedor>
    );
};

export default App;

