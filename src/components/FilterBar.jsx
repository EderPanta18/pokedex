import React from "react";

function FilterBar() {
    return (
        <div className="fixed left-0 top-0 text-white bg-slate-950">
            <div className="p-4">
                <span>Tipo</span>
                <div className="my-2">
                    <input type="checkbox" name="grass" id="grass" />
                    <label htmlFor="grass" className="ml-2">Planta</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="fire" id="fire" />
                    <label htmlFor="fire" className="ml-2">Fuego</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="bug" id="bug" />
                    <label htmlFor="bug" className="ml-2">Bicho</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="fairy" id="fairy" />
                    <label htmlFor="fairy" className="ml-2">Hada</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="dragon" id="dragon" />
                    <label htmlFor="dragon" className="ml-2">Dragón</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="shadow" id="shadow" />
                    <label htmlFor="shadow" className="ml-2">Fantasma</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="ground" id="ground" />
                    <label htmlFor="ground" className="ml-2">Tierra</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="normal" id="normal" />
                    <label htmlFor="normal" className="ml-2">Normal</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="psychic" id="psychic" />
                    <label htmlFor="psychic" className="ml-2">Psíquico</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="steel" id="steel" />
                    <label htmlFor="steel" className="ml-2">Acero</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="dark" id="dark" />
                    <label htmlFor="dark" className="ml-2">Siniestro</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="electric" id="electric" />
                    <label htmlFor="electric" className="ml-2">Eléctrico</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="fighting" id="fighting" />
                    <label htmlFor="fighting" className="ml-2">Lucha</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="flying" id="flying" />
                    <label htmlFor="flying" className="ml-2">Volador</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="ice" id="ice" />
                    <label htmlFor="ice" className="ml-2">Hielo</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="poison" id="poison" />
                    <label htmlFor="poison" className="ml-2">Veneno</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="rock" id="rock" />
                    <label htmlFor="rock" className="ml-2">Roca</label>
                </div>
                <div className="my-2">
                    <input type="checkbox" name="water" id="water" />
                    <label htmlFor="water" className="ml-2">Agua</label>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
