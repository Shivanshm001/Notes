import React, { useRef, useEffect } from 'react'

import { GrRedo, GrSave, GrUndo, GrClose } from 'react-icons/gr'
import IconButton from './IconButton/IconButton'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const NavBar = () => {
    const { text, title } = useSelector(state => state.notes.note);
    const saveBtnRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.addEventListener('keydown', (e) => {
            if (e.shiftKey && e.key === "Enter") {
                saveBtnRef.current.focus();
            }
        })
    }, [])


    return (
        <div className='flex justify-between border-y border-y-gray-200 py-2'>
            <div className='flex gap-4'>
                <IconButton type={"submit"} icon={<GrSave />} title="Save" refValue={saveBtnRef} />
                <IconButton type={"button"} onClick={() => navigate("/")} icon={<GrClose />} title="Close" />
            </div>
            <div className='flex gap-4'>
                <IconButton type={"button"} onClick={() => console.log("Clicked undo")} icon={<GrUndo />} title={"Undo"} />
                <IconButton type={"button"} onClick={() => console.log("Clicked redo")} icon={<GrRedo />} title={"Redo"} />
            </div>
        </div>
    )
}

export default NavBar