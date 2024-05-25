import React, { useContext } from "react";
import { PokemonContext } from '../context/PokemonContext'

function FilterBar() {
    const { active } = useContext(PokemonContext)
    return (
        <div className={`fixed top-0 text-white h-full border-r-4 rounded-tr-3xl rounded-br-3xl border-emerald-500 bg-slate-950 transition-all ease-in-out duration-500 ${active ? 'left-0' : '-left-96'}`}>
            <div className="px-5 pt-2 pb-4 space-y-1">
                <span className="text-xl">Tipo</span>
                <div className="space-y-1.5">
                    <CheckboxType type={"grass"} labelName={"Planta"} />
                    <CheckboxType type={"fire"} labelName={"Fuego"} />
                    <CheckboxType type={"bug"} labelName={"Bicho"} />
                    <CheckboxType type={"fairy"} labelName={"Hada"} />
                    <CheckboxType type={"dragon"} labelName={"Dragon"} />
                    <CheckboxType type={"water"} labelName={"Agua"} />
                    <CheckboxType type={"flying"} labelName={"Volador"} />
                    <CheckboxType type={"shadow"} labelName={"Fantasma"} />
                    <CheckboxType type={"ground"} labelName={"Tierra"} />
                    <CheckboxType type={"normal"} labelName={"Normal"} />
                    <CheckboxType type={"psychic"} labelName={"Psiquico"} />
                    <CheckboxType type={"steel"} labelName={"Acero"} />
                    <CheckboxType type={"dark"} labelName={"Siniestro"} />
                    <CheckboxType type={"electric"} labelName={"Electrico"} />
                    <CheckboxType type={"fighting"} labelName={"Lucha"} />
                    <CheckboxType type={"ice"} labelName={"Hielo"} />
                    <CheckboxType type={"poison"} labelName={"Veneno"} />
                    <CheckboxType type={"rock"} labelName={"Roca"} />
                </div>
            </div>
        </div>
    );
}

export default FilterBar;

const CheckboxType = ({ type, labelName }) => {
    const { handleCheckBox } = useContext(PokemonContext)
    return (
        <div className="flex items-center">
            <input type="checkbox" name={type} id={type} onChange={handleCheckBox} />
            <label htmlFor={type} className={`ml-2 px-2 bg-${type}`} >{labelName}</label>
        </div>
    )
}