export const TASKS = {
    "markComplete": "MARK_COMPLETE",
    "createTask": "CREATE_TASK",
    "editTask": "EDIT_TASK",
    "deleteTask": "DELETE_TASK",
};


export const markComplete = (isComplete) => {
    return {
        type: TASKS.markComplete,
        payload: { isComplete }
    }
}