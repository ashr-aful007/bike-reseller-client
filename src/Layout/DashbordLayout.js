import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashbordnavbar from '../Dashbord/DashbordNavbar/Dashbordnavbar'
import Footer from '../Sheard/Footer/Footer'


function DashbordLayout() {
  return (
    <div>
     <Dashbordnavbar></Dashbordnavbar>
      <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default DashbordLayout