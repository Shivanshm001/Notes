const initialState = {
    allTasks: new Map(),
    task: {
        id: "",
        completed: false,
        title: "",
        date: "",
        time: "",
    }
}


export const taskReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        default: return state;
    }
}