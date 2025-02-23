import TiposPokemon from './TiposPokemon';

// 🔹 Función para reproducir el sonido de un Pokémon   
const reproducirSonido = (url) => {
    const audio = new Audio(url);
    audio.play();
};

// 🔹 Componente para mostrar la información de un Pokémon
const TarjetaPokemon = ({ pokemon }) => {
    if (!pokemon || !pokemon.sprites || !pokemon.sprites.front_default) {
        return null;
    }

    return (
        <div className="tarjeta">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <TiposPokemon tipos={pokemon.types} />

            <p><strong>Altura:</strong> {pokemon.height} dm</p>
            <p><strong>Peso:</strong> {pokemon.weight} hg</p>

            {/* 🔹 Botón para reproducir el sonido del Pokémon */}
            <button onClick={() => reproducirSonido(`https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`)}>
                🔊 Escuchar Sonido
            </button>
        </div>
    );
};

export default TarjetaPokemon;
