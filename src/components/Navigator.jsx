import React, { useContext, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

function Navigator() {
    const { onInputChange, valueSearch, onResetForm, setFilteredPokemonsByType } = useContext(PokemonContext);
    const navigate = useNavigate()
    const location = useLocation()
    const resetPokemons = () => {
        if (location.pathname !== "/") {
            setFilteredPokemonsByType([])
        }
    }
    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (valueSearch.trim() === "") {
            resetPokemons()
            navigate("/");
        } else {
            navigate("/search", {
                state: valueSearch
            });
        }
        onResetForm();
    }
    return (
        <>
            <header className="fixed top-0 gap-5 mx-4 sm:gap-15 md:gap-32 xl:gap-48 flex justify-between mt-[10px] font-mono text-xl items-center">
                <Link to="/">
                    <img
                        src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
                        alt='Logo Pokedex'
                        className="w-32 h-16 z-0 md:w-max md:h-16"
                        onClick={resetPokemons}
                    />
                </Link>
                <form onSubmit={onSearchSubmit} className="flex gap-3 items-center">
                    <div className="bg-slate-700 flex border-gray-700 rounded-2xl p-2 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mr-2 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                        <input
                            type="search"
                            name="valueSearch"
                            id=""
                            autoComplete="off"
                            value={valueSearch}
                            onChange={onInputChange}
                            placeholder="Buscar nombre de pokemon"
                            className="w-40 md:48 xl:w-72 border-none outline-none bg-slate-700 text-white"
                        />
                    </div>
                    <button className="bg-green-500 text-xl px-3 py-1 rounded-2xl hidden md:flex">Buscar</button>
                </form>
            </header>
            <Outlet />
        </>
    );
}

export default Navigator;
