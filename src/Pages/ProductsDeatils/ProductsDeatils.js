import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowProductsDeatils from './ShowProductsDeatils'

function ProductsDeatils() {
     const products = useLoaderData()
    
     
  return (
    <div>
        {
          products.map(product => <ShowProductsDeatils 
            key={product._id}
            product={product}
          ></ShowProductsDeatils>)
        }
    </div>
  )
}

export default ProductsDeatils