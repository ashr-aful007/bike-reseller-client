import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider'
import Loading from '../../Pages/Loading/Loading';
import ShowMyProducts from './ShowMyProducts';

function MyProducts() {

  const {user} = useContext(AuthContext)
  const url = `https://y-gules-mu.vercel.app/addProducts?email=${user?.email}`;

  const {data: MyProducts=[], isLoading,refetch } = useQuery({
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
  const handleDelete = id =>{
    fetch(`https://y-gules-mu.vercel.app/myproducts/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        refetch()
           toast.success('product delete successful')          
      }
    })
 }
   if(isLoading){
      return <Loading></Loading>
   }
  return (
    <div>
        {
        MyProducts.length &&  MyProducts?.map(myProduct => <ShowMyProducts
            myProduct={myProduct}
            key={myProduct._id}
            handleDelete={handleDelete}
          ></ShowMyProducts>)
        }
    </div>
  )
}

export default MyProducts