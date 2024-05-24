import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import CardPokemon from './CardPokemon'
import Loader from './Loader'

function ListPokemon() {
    const { allPokemons } = useContext(PokemonContext)
    return (
        <div className='h-[calc(100vh-150px)] grid grid-cols-2 mx-32 mt-3 pr-3 md:grid-cols-4 gap-4  overflow-y-auto'>
            {allPokemons.map(pokemon => <CardPokemon pokemon={pokemon} />)}
        </div>
    )
}

export default ListPokemon