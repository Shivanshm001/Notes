//Dependencies
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

//Components
import NavBar from '../NavBar/NavBar';


//Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { writeNote, editNote } from '../../redux/actions/noteActions';


const EditNote = () => {

    const { noteId } = useParams();

    //React hooks
    const [tempNote, setTempNote] = useState({});
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const textRef = useRef();
    const submitRef = useRef();
    const navigate = useNavigate();

    //React redux hooks
    const dispatch = useDispatch();
    const allNotes = useSelector(state => state.notes.allNotes);

    //Date and time of creating the note
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString();


    useEffect(() => {
        const note = allNotes.filter(n => n.id === noteId)
        setTempNote(note[0])
    }, [noteId])

    useEffect(() => {
        console.log("Tempnote", tempNote)
        if (tempNote) {
            setText(tempNote.text)
            setTitle(tempNote.title)
        }
    }, [tempNote])
    console.log("Temp note", tempNote)

    const handleSubmitFocus = (e) => {
        if (e.shiftKey && e.key === "Enter") {
            e.preventDefault();
            submitRef.current.focus();
        }
    }

    function handleNote(e) {
        e.preventDefault();

        //Unique id of the note , generated when creating a new note

        //Note actions
        dispatch(writeNote(title, text, noteId, date, time))
        dispatch(editNote(noteId))

        //Reset input fields
        setTitle("");
        setText("");

        //After creating successfully , navigate back to home page
        navigate("/");
    }


    return (
        <>
            {
                tempNote &&
                <div className='p-4 w-full bg-gray-50 min-h-screen'>

                    {/* Form covers the whole page  */}
                    <form onSubmit={handleNote} className='flex flex-col gap-4'>
                        <div>
                            {(text || title) && <>

                                {/* The save, redo, undo, option buttons are here  */}
                                <NavBar />
                            </>}
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

                            <p className='text-xs text-neutral-500'>{text ? text.length : "0"} characters</p>
                        </div>


                        <textarea name="text" id="text"
                            className='w-full min-h-screen p-2 outline-none bg-transparent placeholder:text-sm text-sm'
                            placeholder='Start typing...'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={handleSubmitFocus}
                        ></textarea>
                    </form>
                </div>
            }
        </>
    )
}

export default EditNote