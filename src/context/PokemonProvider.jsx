import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext'
import { useForm } from '../hooks/useForm'

function PokemonProvider({ children }) {
    const [allPokemons, setAllPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffSet] = useState(0)

    const [loading, setLoading] = useState(true)
    const [activeSearch, setActiveSearch] = useState(false)

    const { valueSearh, onInputChange, onResetForm } = useForm({
        valueSearh: ""
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
    }, [])

    useEffect(() => {
        getGlobalPokemons()
    }, [])

    const getPokemonByID = async (id) => {
        const urlBASE = 'https://pokeapi.co/api/v2/'
        const res = await fetch(`${urlBASE}pokemon/${id}`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <PokemonContext.Provider value={{
                valueSearh,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonByID
            }}>
                {children}
            </PokemonContext.Provider>
        </div>
    )
}

export default PokemonProvider