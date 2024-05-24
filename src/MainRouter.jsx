import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navigator from './components/Navigator'
import { HomePage, PokemonPage, SearchPage } from './pages'
import FilterBtn from './components/FilterBtn'

function MainRouter() {
    const location = useLocation()
    const showFilterBtn = location.pathname === "/" || location.pathname === "/search"
    return (
        <div className='flex justify-between'>
            {showFilterBtn && <FilterBtn />}
            <div className=''>
                <Routes>
                    <Route path='/' element={<Navigator />}>
                        <Route index element={<HomePage />} />
                        <Route path='pokemon/:id' element={<PokemonPage />} />
                        <Route path='search' element={<SearchPage />} />
                    </Route>
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainRouter