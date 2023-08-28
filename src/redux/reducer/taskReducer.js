import { TASKS } from "../actions/taskActions";

const initialState = {
    pendingTasks: new Map(),
    completedTasks: new Map(),
    task: {
        id: "",
        type: "pending",
        text: "",
    }
}


export const taskReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TASKS.markComplete: {
            
        }

        case TASKS.writeTask: return {
            ...state,
            task: { ...payload }
        }

        case TASKS.saveTask: {
            const newTask = { ...state.task }
            const newTasks = new Map(state.pendingTasks);

            newTasks.set(newTask.id, newTask);

            return {
                ...state,
                pendingTasks: newTasks
            }
        }

        case TASKS.deleteTask: {
            const allPendingTasks = new Map(state.pendingTasks);
            const allCompletedTasks = new Map(state.completedTasks);

            if (payload.type === "pending") {
                if (allPendingTasks.has(payload.id)) {
                    allPendingTasks.delete(payload.id)
                }

                return {
                    ...state,
                    pendingTasks: allPendingTasks
                }
            }
            else if (payload.type === "complete") {
                if (allCompletedTasks.has(payload.id)) {
                    allCompletedTasks.delete(payload.id);
                }
                return {
                    ...state,
                    completedTasks: allCompletedTasks
                }
            }
            else return state;
        };



        default: return state;
    }
};
