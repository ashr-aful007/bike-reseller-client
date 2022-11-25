import React from 'react'
import Footer from '../Sheard/Footer/Footer'
import {Outlet} from 'react-router-dom'
import Navbar from '../Sheard/Navbar/Navbar'

function Main() {
  return (
    <div>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  )
}

export default Main