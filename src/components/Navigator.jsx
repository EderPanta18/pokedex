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
            <header className='mx-auto w-max flex gap-10 mt-4 font-mono text-xl items-center'>
                <Link to='/'>
                    <img
                        src='src\assets\Pokédex_logo.png'
                        alt='Logo Pokedex'
                        className='w-100 h-14'
                    />
                </Link>
                <form className='flex gap-5 items-center'>
                    <div className='bg-slate-300 flex border-gray-700 rounded-2xl p-2 items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5 mr-2'
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
                            className='w-[500px] border-none outline-none bg-slate-300 focus:bg-slate-200'
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