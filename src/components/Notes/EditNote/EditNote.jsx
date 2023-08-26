//Dependencies
import React from "react";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import NoteForm from "../NoteForm/NoteForm";
const EditNote = () => {
    useDocumentTitle("Notes | Edit")
    return <NoteForm isEditing={true} />
}
export default EditNote