import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { TestCompo } from "../constent"

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TestCompo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRoutes
