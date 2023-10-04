import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home/Home'

const Roots = () => {
  return (
    <div>
        <Home></Home>
        <Outlet></Outlet>
        
    </div>
  )
}

export default Roots