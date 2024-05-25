import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hooks/useForm'

function PokemonProvider({ children }) {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffSet] = useState(0)
    const [loading, setLoading] = useState(true)
    const [activeSearch, setActiveSearch] = useState(false)

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: ""
    })

    const getAllPokemons = async (limit = 50) => {
        const urlBASE = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${urlBASE}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemons([
            ...allPokemons,
            ...results
        ])
        setLoading(false)
    }

    const getGlobalPokemons = async () => {
        const urlBASE = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${urlBASE}pokemon?limit=10000&offset=0`)
        const data = await res.json()
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setGlobalPokemons(results)
        setLoading(false)
    }

    useEffect(() => {
        getAllPokemons()
    }, [offset])

    useEffect(() => {
        getGlobalPokemons()
    }, [])

    const getPokemonByID = async (id) => {
        const urlBASE = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${urlBASE}pokemon/${id}`)
        const data = await res.json()
        return data
    }

    const pokemonColors = {
        fire: 'bg-fire',
        grass: 'bg-grass',
        steel: 'bg-steel',
        water: 'bg-water',
        psychic: 'bg-psychic',
        ground: 'bg-ground',
        ice: 'bg-ice',
        flying: 'bg-flying',
        ghost: 'bg-ghost',
        normal: 'bg-normal',
        poison: 'bg-poison',
        rock: 'bg-rock',
        fighting: 'bg-fighting',
        dark: 'bg-dark',
        bug: 'bg-bug',
        electric: 'bg-electric',
        fairy: 'bg-fairy',
        shadow: 'bg-shadow',
        unknow: 'bg-unknow',
        dragon: 'bg-dragon',
    };

    return (
        <div>
            <PokemonContext.Provider value={{
                onInputChange,
                onResetForm,
                getPokemonByID,
                valueSearch,
                allPokemons,
                globalPokemons,
                pokemonColors,
                loading,
                setOffSet,
                activeSearch,
                setActiveSearch
            }}>
                {children}
            </PokemonContext.Provider>
        </div>
    )
}

export default PokemonProvider