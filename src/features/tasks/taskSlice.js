import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import api from "../../utils/API"

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        const res = await api.get("/task/all")
        return res.data
    }
)

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    async (id) => {
        await api.delete(`/task/${id}`)
        return id;
    }
)

export const updateTask = createAsyncThunk(
    "task/updateTask",
    async ({ id, data }) => {
        const res = await api.put(`/task/${id}, data`)
        return res.data
    }
)

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state, _) => {
            state.loading = true;
        }).addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        }).addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }).addCase(deleteTask.fulfilled, (state, action) => {
            state.items = state.items.filter((task) => task._id !== action.payload)
        }).addCase(deleteTask.rejected, (state, action) => {
            state.error = action.error.message
            console.log("TaskSLice Errror:", action.error.message);
        }).addCase(updateTask.fulfilled, (state, action) => {
            const index = state.items.findIndex(
                (task) => task._id === action.payload._id
            )

            if (index !== -1) {
                state.items[index] = action.payload
            }
        })
    }
})

export default taskSlice.reducer