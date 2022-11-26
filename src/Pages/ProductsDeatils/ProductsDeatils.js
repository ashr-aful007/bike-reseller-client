import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowProductsDeatils from './ShowProductsDeatils'

function ProductsDeatils() {
     const products = useLoaderData()
    
     
  return (
      <div className='m-3'>
        <div>
            <h1>chose your best one</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          products.map(product => <ShowProductsDeatils 
            key={product._id}
            product={product}
          ></ShowProductsDeatils>)
        }
    </div>
      </div>
  )
}

export default ProductsDeatils