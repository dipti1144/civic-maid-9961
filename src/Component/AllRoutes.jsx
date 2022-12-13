import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import MakeUP from '../Pages/MakeUpPage/MakeUP'
import Skin from '../Pages/SkinPage/Skin'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skin" element={<Skin/>} />
            <Route path="/makeup" element={<MakeUP/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes