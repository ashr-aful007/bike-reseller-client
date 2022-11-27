import React from 'react'

function ShowMyOrders({bookin}){

     const {email,productsCatagory,price,img,sellerLocation,byername} = bookin
  return (
    <div className='my-5'>
     <div className="card lg:w-1/2 w-full mx-auto  card-side bg-base-100 shadow-xl">
  <figure><img className='w-56 h-full' src={img} alt="Movie"/></figure>
  <div className="card-body ">
  <div className='flex flex-col justify-start items-start'>
     <p><span className='font-semibold'>Catagory:</span> {productsCatagory}</p>
     <p><span className='font-semibold'>price:</span> {price}</p>
     <p><span className='font-semibold'>Seller Location:</span> {sellerLocation}</p>
     <p><span className='font-semibold'>Byer Name:</span> {byername}</p>
  </div>
    <div className="card-actions justify-end pb-4">
      <button className="btn bg-green-500 lg:mt-6">Bay Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default ShowMyOrders