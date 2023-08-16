export const NOTES = {
    "undo": "UNDO",
    "redo": "REDO",
    "writeNote": "WRITE_NOTE",
    "deleteNote": "DELETE_NOTE",
    "editNote": "EDIT_NOTE",
    "saveNote": "SAVE_NOTE",
};



export const writeNote = (title, text, id, date, time) => {
    return {
        type: NOTES.writeNote,
        payload: { title, text, id, date, time },
    }
};


export const saveNote = () => {
    return {
        type: NOTES.saveNote,
    }
};

export const editNote = (id) => {
    return {
        type: NOTES.editNote,
        payload: { id },
    }
}