import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Loading from '../Pages/Loading/Loading';


function SellerRoute({children}) {
     const {user, loading} = useContext(AuthContext)
     const [isSeller,sellerLoadin] = useSeller(user?.email)
     const location = useLocation();

     if(loading || sellerLoadin){
          return <Loading></Loading>
     }
     
       if(user && isSeller){
          return children
       }
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
       
}

export default SellerRoute;