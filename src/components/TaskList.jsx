import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../features/tasks/taskSlice'

const TaskList = () => {
    const dispatch = useDispatch()
    const { items, loading } = useSelector((state) => state.tasks)

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    
    if (loading) return <p>Loading.....</p>
    if (!items.length) return <p>No Items...</p>
    return (
        <div>
            {items.map((task) => (
                <div key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default TaskList
