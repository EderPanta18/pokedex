import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'

function CardPokemon({ pokemon }) {
    const { pokemonColors } = useContext(PokemonContext)
    return (
        <Link to={`/pokemon/${pokemon.id}`}>
            <div className='bg-slate-800 p-2 rounded-md duration-200  hover:scale-[103%]'>
                <div className='px-4 bg-slate-700 py-2 rounded-xl'>
                    <img
                        className='w-[180px] h-[180px]'
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={`Pokemon ${pokemon.name}`}
                    />
                </div>
                <div className='font-mono flex flex-col items-center text-white my-1'>
                    <span className='font-bold text-xl'>N° {pokemon.id}</span>
                    <h3 className='text-xl w-40 text-center mb-1'>{pokemon.name}</h3>
                    <div className='flex gap-1'>
                        {pokemon.types.map(type => (
                            <span key={type.type.name} className={`text-sm md:text-[20px] px-2 py-1 rounded-2xl text-white ${pokemonColors[type.type.name]}`}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardPokemon