import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import BayModalInfo from '../BayModalInfo/BayModalInfo'
import Loading from '../Loading/Loading'
import Banner from './Banner/Banner'
import ProductCatagory from './ProductCatagorys/ProductCatagory'
import SeconderyBanner from './SeconderyBanner/SeconderyBanner'
import ShowAddrtise from './ShowAddvrtise/ShowAddrtise'


function Home() {
  const [bayProducts, setBayproducts] = useState('')
   const url = `https://y-gules-mu.vercel.app/products/alladvertise`
    const {data: advertiseItem = [], isLoading, refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() =>{
           const res = await fetch(url)
           const data = await res.json()
           return data   
                   
        }             
    })
    console.log(advertiseItem)

    if(isLoading){
       return <Loading></Loading>
    }
    refetch() 
  return (
    <div>
     <Banner></Banner>
     <ProductCatagory></ProductCatagory>
     <BayModalInfo 
     bayProducts={bayProducts}
     ></BayModalInfo>
     {  advertiseItem.length &&
     <div>
      <h2 className='text-3xl font-semibold text-center my-8'>All Advertise Items</h2>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>             
        {
          advertiseItem.map(advertise => <ShowAddrtise
            key={advertise._id}
            advertise={advertise}
            setBayproducts={setBayproducts}
          ></ShowAddrtise>)
        }
     </div> 
     </div>    
     }
     <div>
      <SeconderyBanner></SeconderyBanner>
     </div>
    </div>
  )
}

export default Home