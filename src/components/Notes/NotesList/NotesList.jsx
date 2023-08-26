import React, { useState } from 'react'

import { useSelector } from 'react-redux';


import NoteCard from '../NoteCard/NoteCard'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import SearchBar from './SearchBar/SearchBar';
import CreateButton from '../../SharedComponents/CreateButton/CreateButton';








const NotesList = () => {
    useDocumentTitle("Notes")
    const { allNotes } = useSelector(state => state.notes)



    return (
        <>
            <div className='bg-gray-200 py-4 border-b border-b-black'>

                <div className='p-2'>
                    <SearchBar />
                </div>

                <div className=' w-full min-h-screen flex flex-col gap-4 p-2 px-4'>
                    {
                        allNotes
                            ? Array.from(allNotes.values()).map(note => {
                                return (
                                    <NoteCard {...note} key={note.id} />
                                )
                            }).reverse()
                            : <div>
                                <p>Create new note.</p>
                            </div>
                    }
                </div>
                <CreateButton type={"notes"} />
            </div>
        </>
    )
}

export default NotesList