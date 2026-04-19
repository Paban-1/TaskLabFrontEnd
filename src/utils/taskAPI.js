import api from "./API"

const createTask = async (taskData) => {
    try {
        return await api.post("/task/task-create", taskData)
        console.log("Task created successfully", taskData);
        
    } catch (error) {
        throw error
    }
}

export default createTask