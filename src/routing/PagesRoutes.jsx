import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateCompo, EditTask } from "../constent"

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateCompo />} />
                <Route path='/edit/:id' element={<EditTask />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRoutes
