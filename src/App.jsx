import React from 'react'
import MainRouter from './MainRouter'
import "./App.css"
import PokemonProvider from './context/PokemonProvider'

function App() {
  return (
    <PokemonProvider >
      <MainRouter />
    </PokemonProvider >
  )
}

export default App