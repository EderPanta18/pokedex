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
        <div className='mt-16 text-white'>
            {filteredPokemons.length > 0 ? (
                <div className='flex flex-col items-center'>
                    <p className='text-2xl mt-2'>Se encontraron {filteredPokemons.length} resultados</p>
                    <div className='h-[calc(100vh-150px)] grid grid-cols-2 mx-32 mt-3 pr-3 md:grid-cols-4 gap-4  overflow-y-auto'>
                        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
                    </div>
                </div>
            ) : (
                <p className='mt-4 font-serif '>No se encontro ningun pokemon que coincida con "{location.state}"</p>
            )}
        </div>
    );
}

export default SearchPage;
