import React, { useState } from 'react'

import { useSelector } from 'react-redux';

import { GrAdd } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';

import NoteCard from '../NoteCard/NoteCard'
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';








const NotesList = () => {
    const [search, setSearch] = useState("");
    const { allNotes } = useSelector(state => state.notes)
    function handleSearch(e) {
        e.preventDefault();
        console.log("Searching...");
        console.log(allNotes.size)
    }


    return (
        <>
            <div className='bg-gray-200 py-4 border-b border-b-black'>
                <div className='p-2'>
                    <form className='w-full bg-gray-300 flex p-1 px-2 items-center justify-center rounded-full' autoComplete='off' onSubmit={handleSearch}>
                        <div>
                            <button className='pt-2'>
                                <IconContext.Provider value={{ className: "text-lg text-neutral-500" }}>
                                    <BiSearch />
                                </IconContext.Provider>
                            </button>
                        </div>

                        <div className='w-full'>
                            <input type="text" name="search" id="search" placeholder='Search'
                                className='placeholder:text-neutral-500 bg-transparent outline-none w-full px-2 py-1 text-sm font-semibold tracking-wide' />
                        </div>
                    </form>
                </div>
                <div className=' w-full min-h-screen flex flex-col gap-4 p-2 px-4'>
                    {
                        allNotes && Array.from(allNotes.values()).map(note => {
                            return (
                                <NoteCard {...note} key={note.id}/>
                            )
                        }).reverse()
                    }
                </div>
            </div>
            <Link to={"/create"} className='fixed bottom-8 right-8 rounded-full overflow-hidden'>
                <button className='bg-yellow-400 p-4 rounded-full text-lg font-bold'>
                    <GrAdd />
                </button>
            </Link>
        </>
    )
}

export default NotesList