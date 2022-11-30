import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import useAdmin from '../Hooks/useAdmin';
import Loading from '../Pages/Loading/Loading';


function AdminRoute({children}) {
     const {user, loading} = useContext(AuthContext)
     const [isAdmin,isAdminLoding] = useAdmin(user?.email)
     const location = useLocation();

     if(loading || isAdminLoding){
          return <Loading></Loading>
     }
     
       if(user && isAdmin){
          return children
       }
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
       
}

export default AdminRoute;