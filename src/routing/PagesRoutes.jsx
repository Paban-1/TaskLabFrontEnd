import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateCompo, EditTask,ReisterPage } from "../constent"

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ReisterPage/>}/>
                <Route path="/create" element={<CreateCompo />} />
                <Route path='/edit/:id' element={<EditTask />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRoutes
