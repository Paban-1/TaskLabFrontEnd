import React, { useState, useEffect } from 'react'

const TaskForm = ({ initialData, onSubmit, buttonText }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    // Handle Edit 
    useEffect(() => {
        if (initialData) {
            setFormData(initialData)
        }
    }, [initialData])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        onSubmit(formData);
        console.log(formData);
        setFormData(
            {
                title: "",
                description: ""
            }
        )
    }
    return (
        <div>
            <input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
            />

            <input
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>
                {buttonText}
            </button>
        </div>
    )
}

export default TaskForm
