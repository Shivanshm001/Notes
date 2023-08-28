//Dependencies
import React from "react";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle";

import { NoteForm } from "../NoteForm/NoteForm";


export function EditNote() {
    useDocumentTitle("Notes | Edit");
    return <NoteForm isEditing={true} />;
}