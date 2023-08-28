export const TASKS = {
    "markComplete": "MARK_COMPLETE",
    "writeTask": "WRITE_TASK",
    "saveTask": "SAVE_TASK",
    "editTask": "EDIT_TASK",
    "deleteTask": "DELETE_TASK",
};


export function markComplete(id) {
    return {
        type: TASKS.markComplete,
        payload: { id }
    }
};

export function writeTask(task, id) {
    return {
        type: TASKS.writeTask,
        payload: { task, id }
    }
}

export function saveTask() {
    return {
        type: TASKS.saveTask,
    }
}
export function deleteTask(id, type) {
    return {
        type: TASKS.deleteTask,
        payload: { id }
    }
};

export function editTask(id) {
    return {
        type: TASKS.editTask,
        payload: { id }
    }
}