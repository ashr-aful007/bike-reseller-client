import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import Loading from '../../Pages/Loading/Loading';
import ShowMyProducts from './ShowMyProducts';

function MyProducts() {

  const {user} = useContext(AuthContext)
  const url = `http://localhost:5000/addProducts?email=${user?.email}`;

  const {data: MyProducts=[], isLoading } = useQuery({
        queryKey: ['addProducts', user?.email],
        queryFn: async () => {
             const res = await fetch(url,{
              headers:{
                authorization: `bearer ${localStorage.getItem('accesstoken')}`
              }
             })
             const data = await res.json()
             return data
        }
  })
  console.log(MyProducts)
   if(isLoading){
      return <Loading></Loading>
   }
  return (
    <div>
        {
        MyProducts.length &&  MyProducts?.map(myProduct => <ShowMyProducts
            myProduct={myProduct}
            key={myProduct._id}
          ></ShowMyProducts>)
        }
    </div>
  )
}

export default MyProducts