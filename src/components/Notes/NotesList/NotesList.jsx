import React, { useState } from 'react'

import { useSelector } from 'react-redux';


import { NoteCard } from '../NoteCard/NoteCard'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import { SearchBar } from './SearchBar/SearchBar';
import { CreateButton } from '../../SharedComponents/CreateButton/CreateButton';








export function NotesList() {
    useDocumentTitle("Notes");
    const { allNotes, filteredNotes } = useSelector(state => state.notes);

    function convertMapToArray(noteAsMap) {
        return Array.from(noteAsMap.values());
    }

    return (
        <>
            <div className='bg-gray-200 py-4 border-b border-b-black'>

                <div className='p-2'>
                    <SearchBar />
                </div>

                <div className=' w-full min-h-screen flex flex-col gap-4 p-2 px-4'>
                    {
                        (filteredNotes.size <= 0)
                            ? convertMapToArray(allNotes).map(note => <NoteCard {...note} key={note.id} />).reverse()
                            : convertMapToArray(filteredNotes).map(note => <NoteCard {...note} key={note.id} />).reverse()
                    }
                </div>
                <CreateButton type={"notes"} />
            </div>
        </>
    );
}
