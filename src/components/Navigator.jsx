import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'

function Navigator() {
    const context = useContext(PokemonContext)
    console.log(context);
    const [valueSearch, setValueSearch] = useState("")
    const handleValueSearch = (e) => {
        setValueSearch(e.target.value)
    }
    return (
        <>
            <header className='fixed top-0 z-50 mx-auto w-max flex gap-48 mt-[10px] font-mono text-xl items-center'>
                <Link to='/'>
                    <img
                        src='src\assets\Pokédex_logo.png'
                        alt='Logo Pokedex'
                        className='w-50 h-16'
                    />
                </Link>
                <form className='flex gap-3 items-center'>
                    <div className='bg-slate-700 flex border-gray-700 rounded-2xl p-2 items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 mr-2 text-white'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                        <input
                            type='search'
                            name='valueSearch'
                            id=''
                            value={valueSearch}
                            onChange={handleValueSearch}
                            placeholder='Buscar nombre de pokemon'
                            className='w-72 border-none outline-none bg-slate-700 text-white'
                        />
                    </div>
                    <button className='bg-green-500 text-xl px-3 py-1 rounded-2xl'>Buscar</button>
                </form>
            </header>
            <Outlet />
        </>
    )
}

export default Navigator