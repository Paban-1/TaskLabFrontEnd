import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateCompo} from "../constent"

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateCompo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PagesRoutes
