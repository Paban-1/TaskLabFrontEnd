import React, { useState } from 'react'
import api from "../utils/API"
import createTask from "../utils/taskAPI"
import { TaskList, ButtonView } from "../constent"
import { useDispatch } from 'react-redux'
import { fetchTasks } from '../features/tasks/taskSlice'
import { TaskForm } from "../constent"

const CreateCompo = () => {
    const dispatch = useDispatch()

    const [taskData, setTaskData] = useState({
        title: "",
        description: ""
    })

    const handleCreateTask = async (data) => {
        await createTask(data)
        dispatch(fetchTasks())
    }

    return (
        <div>
            <TaskForm
                onSubmit={handleCreateTask}
                buttonText="Create TAsk"
            />
            <TaskList />
        </div>
    )
}

export default CreateCompo
