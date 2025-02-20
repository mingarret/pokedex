//Maneja las peticiones a la PokeAPI para obtener información de los Pokémon

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [datos, setDatos] = useState([null]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        setCargando(true);
        axios.get(url)
            .then((response) => {
                setDatos(response.data);
                setCargando(false);
            })
            .catch((error) => {
                setError(error);
                setCargando(false);
            });
    }
    , [url]);

    return {datos, cargando error};
};
export default useFetch;

