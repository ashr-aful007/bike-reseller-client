import { useQuery } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast'
import Loading from '../../Pages/Loading/Loading'


function AllSeller() {
   const url = `http://localhost:5000/users?role=seller`
    const {data: sellers =[], isLoading,refetch} = useQuery({
       queryKey: ['users'],
       queryFn: async() => {
           const res = await fetch(url)
           const data = await res.json()
           return data
       }
    })
    if(isLoading){
       return <Loading></Loading>
    }

    const handleverify = id =>{
        fetch(`http://localhost:5000/users/vrify/${id}`,{
           method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            toast.success('veryfid successfull')
            refetch()
          }
        })
    }

    const handleDelete = id =>{
        fetch(`http://localhost:5000/users/${id}`,{
           method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
              toast.success('delete successfull')
          }
        })

    }
  return (
   <div className='w-3/4 mx-auto h-screen'>
   <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
        <th>Admin Activity</th>
      </tr>
    </thead>
    <tbody>    
     {
        sellers.map((seller,i) =><tr
          key={seller._id}
          >
          <th>{i+1}</th>
          <td>{seller.name}</td>
          <td>{seller.email}</td>
          <td>{seller.role}</td>
        <td>{seller.isVrifyed !== 'true' && <button onClick={() =>handleverify(seller._id)} className='btn btn-xs btn-primary mx-3'>Verify</button>}
          <button onClick={() =>handleDelete(seller._id)} className='btn btn-xs outline-none bg-red-600'>delet</button>
          </td>
        </tr> )
     }   
    </tbody>
  </table>
</div>
  </div>
  )
}

export default AllSeller