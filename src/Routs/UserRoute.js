import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import useAdmin from '../Hooks/useAdmin';
import useUser from '../Hooks/useUser';
import Loading from '../Pages/Loading/Loading';


function UserRoute({children}) {
     const {user, loading} = useContext(AuthContext)
     const [isUser,userLoading] = useUser(user?.email)
     const location = useLocation();

     if(loading || userLoading){
          return <Loading></Loading>
     }
     
       if(user && isUser){
          return children
       }
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
       
}

export default UserRoute;