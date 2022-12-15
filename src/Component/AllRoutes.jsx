import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Brushes from '../Pages/Brushes/Brushes'
import BrushesDescription from '../Pages/Brushes/BrushesDescription'
import Cart from '../Pages/Cart/Cart'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import MakeUP from '../Pages/MakeUpPage/MakeUP'
import MakeUpDescription from '../Pages/MakeUpPage/MakeUpDescription'
import Skin from '../Pages/SkinPage/Skin'
import SkinDescription from '../Pages/SkinPage/SkinDescription'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skin" element={<Skin/>} />
            <Route path="/makeup" element={<MakeUP/>} />
            <Route path="/brushes" element={<Brushes/>}  />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />

            {/* SinglePage  */}
            
            <Route path="/makeup:id" element={<MakeUpDescription/>}/>
            <Route path="/skin:id" element={<SkinDescription/>}/>
            <Route path="/brushes:id" element={<BrushesDescription/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes