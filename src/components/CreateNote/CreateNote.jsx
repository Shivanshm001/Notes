//Dependencies

import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

//Components
import NavBar from '../NavBar/NavBar';


//Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { writeNote, saveNote } from '../../redux/actions/noteActions';

const Key = ({ children }) => {
    return (
        <kbd className='text-xs bg-slate-600 text-neutral-100 rounded p-1 mx-2'>
            {children}
        </kbd>
    )
}
const CreateNote = () => {
    //React hooks
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const navigate = useNavigate();
    const textRef = useRef();

    //React redux hooks
    const dispatch = useDispatch();

    //Date and time of creating the note
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();


    useEffect(() => {
        textRef.current.focus()
    }, [])
    function handleNote(e) {
        e.preventDefault();

        //Unique id of the note , generated when creating a new note
        const uniqueId = uuidV4();

        //Note actions
        dispatch(writeNote(title, text, uniqueId, date, time))
        dispatch(saveNote())

        //Reset input fields
        setTitle("");
        setText("");

        //After creating succefully , navigate back to home page
        navigate("/");
    }


    return (
        <>
            <div className='p-4 w-full bg-gray-50 min-h-screen'>

                {/* Form covers the whole page  */}
                <form onSubmit={handleNote} className='flex flex-col gap-4'>
                    <div>
                        {
                            (text ||
                                !title) && <p className='hidden md:block mb-2 text-xs text-neutral-400'>Press <Key>Shift</Key> + <Key>Enter</Key> to save the note.</p>
                        }
                        {
                            (text || title) && <>
                                <NavBar />
                            </>
                        }
                    </div>



                    <input type="text" placeholder='Title'
                        className='text-2xl outline-none w-full bg-transparent'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                    <div className='flex gap-2'>
                        <p className='text-xs text-neutral-500 flex gap-2'>
                            <span>{date}</span>
                            <span>{time}</span>
                        </p>
                        {/* Empty span is used for gray vertical bar  */}
                        <span className='p-[1px] font-extralight bg-neutral-500'></span>

                        <p className='text-xs text-neutral-500'>{text.length} characters</p>
                    </div>


                    <textarea name="text" id="text"
                        ref={textRef}
                        className='w-full min-h-screen p-2 outline-none bg-transparent placeholder:text-sm text-sm'
                        placeholder='Start typing...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                </form>
            </div>
        </>
    )
}

export default CreateNote