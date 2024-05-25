import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hooks/useForm'

function PokemonProvider({ children }) {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffSet] = useState(0)
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    const [filteredPokemonsByType, setFilteredPokemonsByType] = useState([])

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

    const onClickLoadMore = () => {
        setOffSet(offset + 50)
    }

    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
        shadow: false,
    })

    const handleCheckBox = (e) => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })
        if (e.target.checked) {
            const filteredResults = globalPokemons.filter(pokemon => pokemon.types.map(type => type.type.name).includes(e.target.name))
            setFilteredPokemonsByType([...filteredPokemonsByType, ...filteredResults])
        } else {
            const filteredResults = filteredPokemonsByType.filter(pokemon => !pokemon.types.map(type => type.type.name).includes(e.target.name));
            setFilteredPokemonsByType([...filteredResults]);
        }
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
                active,
                setActive,
                onClickLoadMore,
                handleCheckBox,
                filteredPokemonsByType,
                setFilteredPokemonsByType
            }}>
                {children}
            </PokemonContext.Provider>
        </div>
    )
}

export default PokemonProvider