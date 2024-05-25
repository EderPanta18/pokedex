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
        const data = await getPokemonByID(id);
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();
        const flavorTextEntry = speciesData.flavor_text_entries.find(
            entry => entry.language.name === 'es'
        );
        setDescription(flavorTextEntry ? flavorTextEntry.flavor_text : 'No disponible en español');
        const generaEntry = speciesData.genera.find(
            entry => entry.language.name === 'es'
        );
        setCategory(generaEntry ? generaEntry.genus.replace("Pokémon", "") : 'No disponible en español');
        setEggGroup(speciesData.egg_groups[0].name)
        setPokemon(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchPokemon(id)
    }, [])
    console.log(pokemon.types)
    return (
        <div className='mt-16 mx-56'>
            {loading ? (<Loader />)
                : (
                    <div className='font-mono text-white bg-slate-800 py-5 mt-2 flex flex-col items-center overflow-y-auto'>
                        <h1 className='text-3xl font-extrabold text-green-500'>{pokemon.name}</h1>
                        <div className='grid grid-cols-2 space-x-10 mx-10 mt-2'>
                            <img
                                className='w-[750px] h-[400px]'
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={`Pokemon ${pokemon.name}`}
                            />
                            <div className='flex flex-col space-y-2'>
                                <p className='text-wrap'>{description}</p>
                                <div className='flex gap-3 mt-3'>
                                    {pokemon.types.map(type => (
                                        <span key={type.type.name} className={`px-2 py-1 rounded-2xl ${pokemonColors[type.type.name]}`}>
                                            {type.type.name}
                                        </span>
                                    ))}
                                </div>
                                <div className='grid grid-cols-2 grid-rows-3 bg-slate-700 p-3 gap-1'>
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
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                )}
        </div>
    )
}

export default PokemonPage