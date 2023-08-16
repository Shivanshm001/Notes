import { NOTES } from "../actions/noteActions";

const initialState = {
    allNotes: [

    ],
    note: {
        "title": "",
        "text": "",
        "id": "",
        "date": "",
        "time": "",
        "type": "",
    }
};


export const noteReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch (type) {
        case NOTES.writeNote: return {
            ...state,
            note: { ...payload },
        }

        case NOTES.saveNote: return {
            ...state,
            allNotes: [...state.allNotes, state.note]
        }

        case NOTES.editNote: {
            const tempNote = state.allNotes.find(n => n.id === payload.id)
            return {
                ...state,
            }
        }
        default: return state;
    };
}