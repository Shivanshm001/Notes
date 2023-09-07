import { NOTES } from "../actions/noteActions";

const initialState = {
    redoStack: [],
    undoStack: [],
    allNotes: new Map(),
    searchQuery: "",
    filteredNotes: new Map(),
    note: {
        "title": "",
        "text": "",
        "id": "",
        "date": "",
        "time": "",
    }
};


export const noteReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case NOTES.writeNote: return {
            ...state,
            note: { ...payload },
        }

        case NOTES.saveNote: {
            const newNote = {
                ...state.note,
            }
            const newAllNotes = new Map(state.allNotes);
            newAllNotes.set(newNote.id, newNote);
            return {
                ...state,
                allNotes: newAllNotes

            }
        }

        case NOTES.editNote: {
            const updatedNotes = new Map(state.allNotes);
            const updateNote = state.note;

            if (updatedNotes.has(updateNote.id)) {
                updatedNotes.set(payload.id, updateNote)
                return {
                    ...state,
                    allNotes: updatedNotes
                }
            }
        };

        case NOTES.deleteNote: {
            const notes = new Map(state.allNotes);
            if (notes.has(payload.id)) {
                notes.delete(payload.id)
                return {
                    ...state,
                    allNotes: notes,
                }
            }
        }

        case NOTES.updateSearchQuery: return {
            ...state,
            searchQuery: payload.query
        }

        case NOTES.filterNotes: {
            console.log("Filter")
            const allNotes = new Map(state.allNotes);
            const filteredNotes = new Map();
            if (state.searchQuery) {
                const notes = allNotes.values();
                const query = state.searchQuery.toLowerCase();
                const filteredNotesArray = Array.from(notes).filter(note => {
                    if (note){
                        if(note.title) return note.title.toLowerCase().includes(query);
                        if(note.text) return note.text.toLowerCase().includes(query);
                    }
                });

                filteredNotesArray.forEach(note => {
                    filteredNotes.set(note.id, note);
                });
            }

            return {
                ...state,
                filteredNotes: filteredNotes
            }
        }
        default: return state;
    };
}