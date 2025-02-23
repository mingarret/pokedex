//Componente principal de la aplicación

import React, { useState } from "react";
import { PokemonProveedor } from "./contexto/PokemonContexto";
import BuscadorPokemon from "./componentes/BuscadorPokemon";
import ListaCapturados from "./componentes/ListaCapturados";
import Navbar from "./componentes/Navbar";
import "./estilos.css";  // Importamos los estilos
import fondo from "./assets/Pokemon-gifs-19.gif";  // 🔹 Importamos el GIF

const App = () => {
    const [vista, setVista] = useState("busqueda");

    return (
        <PokemonProveedor>
            <div 
                className="contenedor"
                style={{
                    backgroundImage: `url(${fondo})`, 
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    height: "100vh"
                }}
            >
                <h1>Pokédex</h1>
                <Navbar setVista={setVista} />
                {vista === "busqueda" && <BuscadorPokemon />}
                {vista === "capturados" && <ListaCapturados />}
            </div>
        </PokemonProveedor>
    );
};

export default App;
