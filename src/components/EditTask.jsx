import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from '../features/tasks/taskSlice'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../utils/API'
import { TaskForm } from "../constent"

const EditTask = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const naviaget = useNavigate()

    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    useEffect(() => {
        const fetchTask = async () => {
            const res = await api.get(`/task/${id}`)
            setTask(res.data)
        }

        fetchTask()
    }, [id])

    const handleEdit = (data) => {
        dispatch(updateTask({
            id: task._id,
            data: {
                title: data.title,
                description: data.description
            }
        }));
        console.log("updated data", data);

        naviaget('/create')
        // console.log("Done");
    }

    return (
        <div className='bg-zinc-500'>

            <h2>Task ID:{id}</h2>

            <TaskForm initialData={task} buttonText="Edit" onSubmit={handleEdit} />

            {/* <TaskForm /> */}
            {/* <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} className='bg-green-800' /> */}

            {/* <input type="text" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} className='bg-green-800' /> */}


            {/* <button onClick={handleEdit}>Done</button> */}
        </div>
    )
}

export default EditTask
