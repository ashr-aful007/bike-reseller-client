import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ShowProductCatagory from './ShowProductCatagory'

function ProductCatagory() {
  const url = 'http://localhost:5000/catagoty'
  const {data: catagorydata=[]} = useQuery({
     queryKey:['catagoty'],
    queryFn: async () =>{
          const res = await fetch(url)
          const data = await res.json()
          return data;
          
    }
  })
  
  return (
    <div>
       <div className='my-8'>
          <h3 className='text-2xl'>Chose your best bike</h3>
       </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-2'>
      {
        catagorydata.map(catagory => <ShowProductCatagory
        key={catagory.catagory}
          catagoryall={catagory}
        ></ShowProductCatagory> )
       }
    </div>
    </div>
  )
}

export default ProductCatagory