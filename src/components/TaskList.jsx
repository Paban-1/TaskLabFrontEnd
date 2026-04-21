import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, deleteTask } from '../features/tasks/taskSlice'
import { ArrowRight, Notebook } from "lucide-react"


const TaskList = () => {
    const dispatch = useDispatch()
    const { items, loading } = useSelector((state) => state.tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    const handleDelete = (task) => {
        dispatch(deleteTask(task._id))
        console.log("Deleted", task._id);
        
    }


    if (loading) return <p>Loading.....</p>
    if (!items.length) return <p>No Items...</p>
    return (
        <div className='py-4'>
            {items.map((task) => (
                <div key={task._id} className='flex flex-col py-4'>
                    <div className='bg-gray-800 text-white'>
                        <h3 className='flex items-center gap-2 py-4'><ArrowRight size={20} />{task.title}</h3>
                        <p className='flex items-center gap-2'><Notebook size={20} />{task.description}</p>
                        <p className='text-red-400'>{task.flag}</p>
                        <button onClick={() => handleDelete(task)} className='bg-red-600 text-white rounded-xl '>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskList
