import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { CardPokemon, Loader } from '../components'

function ListPokemon() {
    const { allPokemons, onClickLoadMore, loading, filteredPokemonsByType } = useContext(PokemonContext)
    return (
        <div>
            {loading ? (<Loader />) : (
                <div className='h-[calc(100vh-150px)] overflow-y-auto mx-32 mt-3 pr-3'>
                    {filteredPokemonsByType.length ? (
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
                            {filteredPokemonsByType.map(pokemon => <CardPokemon pokemon={pokemon} />)}
                        </div>
                    ) : (
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 '>
                                {allPokemons.map(pokemon => <CardPokemon pokemon={pokemon} />)}
                            </div>
                            <button onClick={onClickLoadMore} className='text-white flex mx-auto my-5 font-extrabold bg-red-700 px-3 py-1 rounded-3xl'>
                                Cargar mas
                            </button>
                        </div>
                    )}
                </div >
            )}
        </div>
    )
}

export default ListPokemon