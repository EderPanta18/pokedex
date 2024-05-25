import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useParams } from 'react-router-dom'
import { Loader } from '../components'

function PokemonPage() {
    const { getPokemonByID, pokemonColors } = useContext(PokemonContext)
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState({})
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [eggGroup, setEggGroup] = useState("")
    const { id } = useParams()
    const fetchPokemon = async (id) => {
        const pokemonData = await getPokemonByID(id);
        const speciesResponse = await fetch(pokemonData.species.url);
        const speciesData = await speciesResponse.json();
        const flavorTextEntry = speciesData.flavor_text_entries.find(
            entry => entry.language.name === 'es'
        );
        setDescription(flavorTextEntry ? flavorTextEntry.flavor_text : 'No disponible en español');
        const generaEntry = speciesData.genera.find(
            entry => entry.language.name === 'es'
        );
        setCategory(generaEntry ? generaEntry.genus.replace("Pokémon", "") : 'No disponible en español');
        setEggGroup(speciesData.egg_groups[0].name === "no-eggs" ? "???" : speciesData.egg_groups[0].name)
        setPokemon(pokemonData);
        setLoading(false);
    }
    useEffect(() => {
        fetchPokemon(id)
    }, [])
    console.log(pokemon.types)
    return (
        <div className='mt-20 mb-5 mx-56 overflow-y-auto'>
            {loading ? (<Loader />)
                : (
                    <div className='font-mono text-white bg-slate-800 py-5 flex flex-col items-center rounded-3xl'>
                        <h1 className='text-5xl font-extrabold text-center text-green-500 mb-3'>#{pokemon.id} {pokemon.name}</h1>
                        <div className='grid grid-cols-2 space-x-10 mx-10 mt-2'>
                            <img
                                className='w-[750px] h-[400px]'
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={`Pokemon ${pokemon.name}`}
                            />
                            <div className='flex flex-col space-y-3'>
                                <p className='text-wrap'>{description}</p>
                                <div className='flex gap-3 mt-3'>
                                    {pokemon.types.map(type => (
                                        <span key={type.type.name} className={`px-2 py-1 rounded-2xl ${pokemonColors[type.type.name]}`}>
                                            {type.type.name}
                                        </span>
                                    ))}
                                </div>
                                <div className='grid grid-cols-2 grid-rows-3 bg-slate-700 p-3 gap-1 rounded-tl-3xl rounded-br-3xl'>
                                    <div>
                                        <h3 className='font-bold'>Altura</h3>
                                        <p>{pokemon.height / 10} m</p>
                                    </div>
                                    <div>
                                        <h3 className='font-bold'>Categoria</h3>
                                        <p>{category}</p>
                                    </div>
                                    <div>
                                        <h3 className='font-bold'>Peso</h3>
                                        <p>{pokemon.weight / 10} kg</p>
                                    </div>
                                    <div>
                                        <h3 className='font-bold'>Habilidad</h3>
                                        <p>{pokemon.abilities[0].ability.name}</p>
                                    </div>
                                    <div>
                                        <h3 className='font-bold'>Grupo huevo</h3>
                                        <p>{eggGroup}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-1 mt-4'>
                            <div className='text-2xl font-extrabold flex gap-1 justify-center items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                                <h1>Estadísticas</h1>
                            </div>
                            <div>
                                <StatBar label='Hp' value={pokemon.stats[0].base_stat} />
                                <StatBar label='Ataque' value={pokemon.stats[1].base_stat} />
                                <StatBar label='Defensa' value={pokemon.stats[2].base_stat} />
                                <StatBar label='Ataque especial' value={pokemon.stats[3].base_stat} />
                                <StatBar label='Defensa especial' value={pokemon.stats[4].base_stat} />
                                <StatBar label='Velocidad' value={pokemon.stats[5].base_stat} />
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                )}
        </div>
    )
}

export default PokemonPage

const StatBar = ({ label, value }) => {
    const getBarColor = (value) => {
        if (value >= 100) {
            return 'bg-green-400';
        } else if (value >= 50) {
            return 'bg-yellow-400';
        } else {
            return 'bg-red-400';
        }
    };

    return (
        <div className='flex items-center'>
            <div className='w-48 flex justify-between mr-2'>
                <span>{label}</span>
                <span>{value}</span>
            </div>
            <div className='h-3 bg-gray-300 w-[510px] rounded-full'>
                <div className={`h-full rounded-full ${getBarColor(value)}`} style={{ width: `${value * 2}px` }}></div>
            </div>
        </div>
    );
};
