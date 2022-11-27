import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashbordnavbar from '../Dashbord/DashbordNavbar/Dashbordnavbar'
import Footer from '../Sheard/Footer/Footer'


function DashbordLayout() {
  return (
    <div>
     <Dashbordnavbar></Dashbordnavbar>
        <div className="drawer drawer-end">
      <input id="dashbordDrawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
         <Outlet></Outlet>
      </div> 
      <div className="drawer-side">
        <label htmlFor="dashbordDrawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
     <Footer></Footer>
    </div>
  )
}

export default DashbordLayout