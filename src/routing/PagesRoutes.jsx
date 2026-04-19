import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { testCompo } from "../constent"

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<testCompo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRoutes
