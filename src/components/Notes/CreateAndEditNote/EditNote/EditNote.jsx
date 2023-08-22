//Dependencies
import React from "react";
import NoteForm from "../NoteForm/NoteForm";
import { useTitle } from "../../../../hooks/useTitle";


const EditNote = () => {
    useTitle("Notes | Edit")
    return <NoteForm isEditing={true} />
}
export default EditNote