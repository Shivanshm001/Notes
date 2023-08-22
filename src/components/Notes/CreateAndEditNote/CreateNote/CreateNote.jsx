//Dependencies
import React from 'react';
import NoteForm from '../NoteForm/NoteForm';
import { useTitle } from '../../../../hooks/useTitle';



const CreateNote = () => {
    useTitle("Notes | Create")
    return <NoteForm isEditing={false} />
}
export default CreateNote