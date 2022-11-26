import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BayModalInfo from '../BayModalInfo/BayModalInfo'
import ShowProductsDeatils from './ShowProductsDeatils'

function ProductsDeatils() {
     const products = useLoaderData()
     const [bayProducts, setBayproducts] = useState({})
    
     
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
            setBayproducts={setBayproducts}
          ></ShowProductsDeatils>)
        }
    </div>
     <BayModalInfo
    bayProducts={bayProducts}
    setBayproducts={setBayproducts}
    ></BayModalInfo>
      </div>
  )
}

export default ProductsDeatils