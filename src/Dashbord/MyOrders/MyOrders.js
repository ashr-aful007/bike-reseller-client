import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import Loading from '../../Pages/Loading/Loading'
import ShowMyOrders from './ShowMyOrders'

function MyOrders() {
  const {user} = useContext(AuthContext)


  const url = `http://localhost:5000/booking?email=${user?.email}`
  const {data: booking=[], isLoading } = useQuery({
      queryKey: ['booking', user?.email],
      queryFn: async() =>{
         const res = await fetch(url,{
           headers:{
              authorization: `bearer ${localStorage.getItem('accesstoken')}`
           }
         })
         const data = await res.json()
         return data
      }
  })
  if(isLoading){
     return <Loading></Loading>
  }


  return (
    <div>
      {
        booking?.map(bookin => <ShowMyOrders
          bookin={bookin}
          key={bookin._id}
        ></ShowMyOrders> )
      }
    </div>
  )
}

export default MyOrders