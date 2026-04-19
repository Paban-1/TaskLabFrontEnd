import React, { useState } from 'react'
import api from "../utils/API"
import createTask from "../utils/taskAPI"

const testCompo = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: ""
  })

  const handleCreateTask = async () => {
    await createTask(
      taskData
    )
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={taskData.description}
        onChange={(e) =>
          setTaskData({ ...taskData, description: e.target.value })
        }
      />
      <button onClick={handleCreateTask}>Create Task</button>

    </div>
  )
}

export default testCompo
