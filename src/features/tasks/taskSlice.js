import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import api from "../../utils/API"

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        const res = await api.get("task/all")
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
        })
    }
})

export default taskSlice.reducer