//Dependencies

import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidV4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

//Components
import NavBar from './NavBar/NavBar';
import KdbKey from './KbdKey/KbdKey';

//Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { writeNote, saveNote, editNote } from '../../../redux/actions/noteActions';
import InfoBar from './InfoBar/InfoBar';



const NoteForm = ({ isEditing }) => {
    //React hooks
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [oldNote, setOldNote] = useState({});

    const navigate = useNavigate();
    const textRef = useRef();
    const submitRef = useRef();


    const { noteId } = useParams();


    //React redux hooks
    const dispatch = useDispatch();
    const {allNotes} = useSelector(state => state.notes)


    //Date and time of creating the note
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();

    //On page load
    useEffect(() => {
        textRef.current.focus()
    }, [])

    //If form is in editing mode
    useEffect(() => {
        setOldNote(allNotes.get(noteId))
    }, [isEditing, noteId])


    useEffect(() => {
        if (oldNote) {
            setText(oldNote.text)
            setTitle(oldNote.title)
        }
    }, [oldNote])

    //END - If form is in editing mode



    function handleNote(e) {

        e.preventDefault();

        //Unique id of the note , generated when creating a new note
        const uniqueId = isEditing ? noteId : uuidV4();

        //Note actions
        if (text || title) {
            dispatch(writeNote(title, text, uniqueId, date, time))
            if (isEditing) {
                dispatch(editNote(uniqueId))
            } else {
                dispatch(saveNote())
            }


            //Reset input fields
            setTitle("");
            setText("");
        }

        //After creating succefully navigate back to home page
        navigate("/");
    }


    return (
        <>
            <div className='p-4 w-full bg-gray-50 min-h-screen'>

                {/* Form covers the whole page  */}
                <form onSubmit={handleNote} className='flex flex-col gap-4'>
                    <div>
                        {
                            (!text || !title) && <p className='hidden md:block mb-2 text-xs text-neutral-400'>Press <KdbKey>Shift</KdbKey> + <KdbKey>Enter</KdbKey> to save the note.</p>
                        }
                        {(text || title) && <NavBar />}
                    </div>



                    <input type="text" placeholder='Title'
                        className='text-2xl outline-none w-full bg-transparent'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />


                    <InfoBar date={date} time={time} text={text} />

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

export default NoteForm