import React from 'react'

const Key = ({ children }) => {
    
    return (
        <kbd className='text-xs bg-slate-600 text-neutral-100 rounded p-1 mx-2'>
            {children}
        </kbd>
    )
}

export default Key