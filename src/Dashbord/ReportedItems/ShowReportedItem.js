import React from 'react'

function ShowReportedItem({repo}) {
     const {img,resalePrice,sellerName,productsCatagory,location,marketPrice,_id} = repo;
  return (
<div>
         <div className='my-5 m-2'>
          <div className="card lg:w-1/2 w-full mx-auto  card-side bg-base-100 shadow-xl">
     <figure><img className='w-56 h-full' src={img} alt="Movie"/></figure>
     <div className="card-body ">
     <div className='flex flex-col justify-start items-start'>
          <p><span className='font-semibold'>Catagory: </span> {productsCatagory}</p>
          <p><span className='font-semibold'>Reseal price: </span> {resalePrice}</p>
          <p><span className='font-semibold'>Market Price: </span> {marketPrice}</p>
          <p><span className='font-semibold'>Byer Name:</span> {sellerName}</p>
          <p><span className='font-semibold'>Byer Name:</span> {location}</p>
     </div>
     <div className="card-actions justify-end pb-4">
          <button className="btn btn-xs bg-red-600 lg:mt-6">delete</button>
     </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default ShowReportedItem