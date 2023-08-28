import { TASKS } from "../actions/taskActions";

const initialState = {
    allTasks: [
        {
            id: "adfadsss",
            completed: false,
            text: "Drink some coffee",
            date: new Date().getFullYear(),
            time: new Date().getTime(),
        },
        {
            id: "adfadss",
            completed: false,
            text: "Drink some coffee",
            date: new Date().getFullYear(),
            time: new Date().getTime()
        },
        {
            id: "adfass",
            completed: false,
            text: "Drink some coffee",
            date: new Date().getFullYear(),
            time: new Date().getTime()
        },
        {
            id: "aadsss",
            completed: false,
            text: "Drink some coffee",
            date: new Date().getFullYear(),
            time: new Date().getTime(),
        },
        {
            id: "fadsss",
            completed: false,
            text: "Drink some coffee",
            date: new Date().getFullYear(),
            time: new Date().getTime(),
        },
        {
            id: "sss",
            completed: false,
            text: "Drink some coffee",
            date: new Date().getFullYear(),
            time: new Date().getTime(),
        }
    ],

    completedTasks: [],
    task: {
        id: "",
        isComplete: false,
        text: "",
        date: "",
        time: "",
    }
}


export const taskReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TASKS.markComplete: return {
            ...state,
            ...state.task,
            isComplete: payload.isComplete
        };
        default: return state;
    }
};
