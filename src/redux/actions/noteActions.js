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



export function writeNote(title, text, id, date, time){
    return {
        type: NOTES.writeNote,
        payload: { title, text, id, date, time },
    }
};


export function saveNote(){
    return {
        type: NOTES.saveNote,
    }
};

export function editNote(id){
    return {
        type: NOTES.editNote,
        payload: { id },
    }
}

export function deleteNote(id){
    return {
        type: NOTES.deleteNote,
        payload: { id },
    }
}


export function updateSearchQuery(query){
    return {
        type: NOTES.updateSearchQuery,
        payload: { query },
    }
}


export function filterNotes(){
    return {
        type: NOTES.filterNotes,
    }
}