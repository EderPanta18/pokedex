import React, { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navigator from './components/Navigator'
import { HomePage, PokemonPage, SearchPage } from './pages'

function MainRouter() {
    return (
        <div className="bg-slate-900 flex flex-col h-screen items-center justify-start">
            <Routes>
                <Route path='/' element={<Navigator />}>
                    <Route index element={<HomePage />} />
                    <Route path='pokemon/:id' element={<PokemonPage />} />
                    <Route path='search' element={<SearchPage />} />
                </Route>
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </div>
    );
}

export default MainRouter