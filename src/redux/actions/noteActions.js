export const NOTES = {
    "undo": "UNDO",
    "redo": "REDO",
    "writeNote": "WRITE_NOTE",
    "deleteNote": "DELETE_NOTE",
    "editNote": "EDIT_NOTE",
    "saveNote": "SAVE_NOTE",
    "updateSearchQuery": "UPDATE_SEARCH_QUERY",
    "filterNotes": "FILTER_NOTES"
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

export const deleteNote = (id) => {
    return {
        type: NOTES.deleteNote,
        payload: { id },
    }
}


export const updateSearchQuery = (query) => {
    return {
        type: NOTES.updateSearchQuery,
        payload: { query },
    }
}

export const filterNotes = () => {
    return {
        type: NOTES.filterNotes,
    }
}