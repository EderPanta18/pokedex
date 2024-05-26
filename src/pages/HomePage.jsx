import React, { useContext } from 'react'
import ListPokemon from '../components/ListPokemon'
import FilterBar from '../components/FilterBar'
import { PokemonContext } from '../context/PokemonContext'

function HomePage() {
    const { active, setActive } = useContext(PokemonContext)
    return (
        <div className='font-mono mt-16 flex flex-col items-end sm:items-center'>
            <div className='flex gap-1 mt-3 text-white mr-10 sm:mr-0'>
                <button onClick={() => setActive(!active)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </button>
                <span>Filtrar</span>
            </div>
            <FilterBar />
            <ListPokemon />
            <img src="https://i.gifer.com/WiCJ.gif" alt="gif" className='absolute w-20 hidden right-4  top-[20%] xl:w-56 xl:block' />
        </div>
    )
}

export default HomePage