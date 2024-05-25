import React from 'react'
import { lineSpinner } from 'ldrs'
lineSpinner.register()
function Loader() {
    return (
        <div className='mt-10'>
            <l-line-spinner
                size="50"
                stroke="3"
                speed="1"
                color="lime"
            ></l-line-spinner>
        </div>
    )
}

export default Loader