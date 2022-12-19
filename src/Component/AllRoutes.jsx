// import { Payment } from '@mui/icons-material'
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
import Payment from '../Pages/Payment/Payment'
import Otp from '../Pages/Payment/Otp'
import PrivateRoute from './PrivateRoute'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skin" element={<PrivateRoute><Skin/></PrivateRoute>} />
            <Route path="/makeup" element={<PrivateRoute><MakeUP/></PrivateRoute>} />
            <Route path="/brushes" element={<PrivateRoute><Brushes/></PrivateRoute>}  />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
            <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>}/>
            <Route path="/otp" element={<PrivateRoute><Otp/></PrivateRoute>}/>

            {/* SinglePage  */}
            
            <Route path="/makeup:id" element={<PrivateRoute><MakeUpDescription/></PrivateRoute>}/>
            <Route path="/skin:id" element={<PrivateRoute><SkinDescription/></PrivateRoute>}/>
            <Route path="/brushes:id" element={<PrivateRoute><BrushesDescription/></PrivateRoute>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes