import { combineReducers } from "redux";
import { noteReducer } from "./reducer/noteReducer";
import { taskReducer } from "./reducer/taskReducer";

const rootReducer = combineReducers({
    notes: noteReducer,
    tasks: taskReducer
});

export default rootReducer;