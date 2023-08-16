import { combineReducers } from "redux";
import { noteReducer } from "./reducer/noteReducer";

const rootReducer = combineReducers({
    notes: noteReducer,
});

export default rootReducer;