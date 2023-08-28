//Dependencies
import React from 'react';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';


import {NoteForm}  from '../NoteForm/NoteForm';


export function CreateNote() {
    useDocumentTitle("Notes | Create");
    return <NoteForm isEditing={false} />;
}