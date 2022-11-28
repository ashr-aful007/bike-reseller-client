import React from 'react'
import { Link } from 'react-router-dom'

function ShowProductCatagory({catagoryall}) {
     const {catagory, img, description,catagoryId} = catagoryall
     
  return (
    <div>
         <div className="card bg-base-100 shadow-xl image-full">
     <figure><img className='w-2/3' src={img} alt="catagory" /></figure>
     <div className="card-body">
     <h2 className="card-title">{catagory}</h2>
     <p>{description}</p>
     <div className="card-actions justify-end">    
          <Link to={`/productsdeatils/${catagoryId}`}><button className="btn bg-green-400 outline-none">See All products</button></Link>       
     </div>
     </div>
     </div>
    </div>
  )
}

export default ShowProductCatagory