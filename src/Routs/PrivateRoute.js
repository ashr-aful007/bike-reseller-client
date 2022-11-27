import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import Loading from '../Pages/Loading/Loading';


function PrivateRoute({children}) {
     const {user, loading} = useContext(AuthContext)
     const location = useLocation();

     if(loading){
          return <Loading></Loading>
     }
     
       if(!user){
          return <Navigate to='/login' state={{from: location}} replace></Navigate>
       }

       return children
}

export default PrivateRoute