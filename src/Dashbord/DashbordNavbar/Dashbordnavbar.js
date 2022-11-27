import React from 'react'
import { Link } from 'react-router-dom'
import logoB from '../../assets/bikeLogo.png'

function Dashbordnavbar() {
     const navmenuItem =<li className='font-semibold'>
       {/* seller Role */}
          <Link to='/dashboard/addproducts'><li>Add products</li></Link>
          <Link to='/dashboard/myproducts'><li>My Products</li></Link>
      {/* admin role */}
          <Link to='/dashboard/allseller'><li>All Seller</li></Link>
          <Link to='/dashboard/allbyer'><li>All Byer</li></Link>
          <Link to='/dashboard/reporteditem'><li>Reported Items</li></Link>
      {/* user role */}
          <Link to='/dashboard/myorders'><li>My Orders</li></Link> 
          </li>
     
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label htmlFor="dashbordDrawer" tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navmenuItem}
      </ul>
    </div>
    <Link to='/'>
     <div>
     <img className='w-24' src={logoB} alt="" />
     <p className='font-semibold text-green-400'>Bike Reseller</p>
     </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
       {navmenuItem}
    </ul>
  </div>
  <div className="navbar-end">
  </div>
  </div> 
    </div>
  )
}

export default Dashbordnavbar