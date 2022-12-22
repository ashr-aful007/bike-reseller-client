import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider'
import BayModalInfo from '../BayModalInfo/BayModalInfo'
import Loading from '../Loading/Loading'
import ShowProductsDeatils from './ShowProductsDeatils'

function ProductsDeatils() {
     const products = useLoaderData()
     const [bayProducts, setBayproducts] = useState({})
  const {loading} = useContext(AuthContext)
  

  if(loading){
    return <Loading></Loading>
  }
     
  return (
      <div className='m-3 my-11'>
        <div className='text-center my-12'>
        <h1 className='text-3xl font-semibold'>Choose your best products!</h1> 
            <p className='font-semibold'>there are many different products here</p>          
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