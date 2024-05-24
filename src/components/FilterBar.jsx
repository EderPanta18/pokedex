import React from "react";

function FilterBar({ close }) {
    return (
        <div className="flex bg-gradient-to-r from-sky-600 to-sky-200 h-[100vh]">
            <div className="">
                <span>Tipo</span>
                <div className="">
                    <input
                        type="checkbox"
                        name="grass"
                        id="grass"
                    />
                    <label htmlFor="grass">Planta</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="fire"
                        id="fire"
                    />
                    <label htmlFor="fire">Fuego</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="bug"
                        id="bug"
                    />
                    <label htmlFor="bug">Bicho</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="fairy"
                        id="fairy"
                    />
                    <label htmlFor="fairy">Hada</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="dragon"
                        id="dragon"
                    />
                    <label htmlFor="dragon">Dragón</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="shadow"
                        id="shadow"
                    />
                    <label htmlFor="shadow">Fantasma</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="ground"
                        id="ground"
                    />
                    <label htmlFor="ground">Tierra</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="normal"
                        id="normal"
                    />
                    <label htmlFor="normal">Normal</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="psychic"
                        id="psychic"
                    />
                    <label htmlFor="psychic">Psíquico</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="steel"
                        id="steel"
                    />
                    <label htmlFor="steel">Acero</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="dark"
                        id="dark"
                    />
                    <label htmlFor="dark">Siniestro</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="electric"
                        id="electric"
                    />
                    <label htmlFor="electric">Eléctrico</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="fighting"
                        id="fighting"
                    />
                    <label htmlFor="fighting">Lucha</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="flying"
                        id="flying"
                    />
                    <label htmlFor="flying">Volador</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="ice"
                        id="ice"
                    />
                    <label htmlFor="">Hielo</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="poison"
                        id="poison"
                    />
                    <label htmlFor="poison">Veneno</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="rock"
                        id="rock"
                    />
                    <label htmlFor="rock">Roca</label>
                </div>
                <div className="">
                    <input
                        type="checkbox"
                        name="water"
                        id="water"
                    />
                    <label htmlFor="water">Agua</label>
                </div>
            </div>
            <button onClick={close}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                </svg>
            </button>
        </div>
    );
}

export default FilterBar;
