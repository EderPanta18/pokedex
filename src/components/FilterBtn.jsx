import React, { useState } from 'react'
import FilterBar from './FilterBar'

function FilterBtn() {
    const [showFilterBar, setShowFilterBar] = useState(false)
    const handleFilterBarOpen = () => {
        setShowFilterBar(true)
    }
    const handleFilerBarClose = () => {
        setShowFilterBar(false)
    }
    return (
        <>
            {showFilterBar ? <FilterBar close={handleFilerBarClose} /> :
                <button className='bg-gradient-to-r from-sky-600 to-sky-200 h-[100vh]' onClick={handleFilterBarOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                    </svg>
                </button>}
        </>
    )
}

export default FilterBtn