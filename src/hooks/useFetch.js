//Maneja las peticiones a la PokeAPI para obtener información de los Pokémon

import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [datos, setDatos] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        setCargando(true);
        setError(null); // 🔹 Restablece el error al hacer una nueva búsqueda

        axios.get(url)
            .then((respuesta) => {
                setDatos(respuesta.data);
                setCargando(false);
            })
            .catch(() => {
                setError(true);
                setDatos(null); // 🔹 Borra los datos anteriores si hay error
                setCargando(false);
            });
    }, [url]);

    return { datos, cargando, error };
};

export default useFetch;
