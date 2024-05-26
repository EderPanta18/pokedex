import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';

function SearchPage() {
    const location = useLocation();
    const { globalPokemons } = useContext(PokemonContext);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        if (globalPokemons.length > 0) {
            const searchQuery = location.state.toLowerCase();
            const results = globalPokemons.filter(pokemon =>
                pokemon.name.includes(searchQuery)
            );
            setFilteredPokemons(results);
        }
    }, [globalPokemons, location.state]);

    return (
        <div className='mt-16 text-white font-mono'>
            {filteredPokemons.length > 0 ? (
                <div className='flex flex-col items-center'>
                    <p className='text-2xl mt-2 tracking-tight'>Se encontraron {filteredPokemons.length} resultados</p>
                    <div className='h-[calc(100vh-150px)] mt-3 pr-3 ml-6 mx-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto xl:mx-32'>
                        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
                    </div>
                </div>
            ) : (
                <div className='flex flex-col items-center mt-4'>
                    <p className='mx-4 text-center'>No se encontro ningun pokemon que coincida con "{location.state}"</p>
                    <img src="https://i.gifer.com/2iiJ.gif" className='w-64 mt-6' alt="pokemon de espera" />
                </div>
            )}
        </div>
    );
}

export default SearchPage;
