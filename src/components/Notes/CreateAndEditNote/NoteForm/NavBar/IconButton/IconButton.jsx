import React from 'react'
import { IconContext } from 'react-icons'


const IconButton = ({ type, onClick, icon, title, refValue }) => {

    return (
        <IconContext.Provider value={{ className: "text-xl" }}>
            <button type={type} onClick={onClick} title={title} ref={refValue}>
                {icon}
            </button>
        </IconContext.Provider>
    )
}

export default IconButton