import React from 'react'

function BayModalInfo({bayProducts,setBayproducts}) {
     const {name,location,resalePrice,sellerName,productsUsdTime,catagoryId,productsCatagory,img} = bayProducts

     const handleBay = event =>{
           event.preventDefault()
           const form = event.target;
           const nameB = form.name.value
           const email = form.email.value
           const brand = form.brand.value
           const price = form.price.value
           const locationB = form.location.value
           const number = form.number.value

           const baying ={
               byername: nameB,
               email,
               brand,
               price,
               productName: name,
               location,
               number,
               productsCatagory,
               sellerName,
               productsUsdTime,
               sellerLocation: location,
               byerLocation: locationB,
               catagoryId,
               img


           }
          
     }

  return (
    <>
        <input type="checkbox" id="Bay-modal" className="modal-toggle" />
     <div className="modal">
     <div className="modal-box relative">
     <label htmlFor="Bay-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <h3 className="text-lg font-bold">{productsCatagory}</h3>
      <form onSubmit={handleBay} className='grid grid-cols-1 gap-3 mt-7'>
       <input name='nameB' type="text" placeholder="Type here" className="input w-full input-bordered" />
       <input name='email' type="text" placeholder="Type here" className="input w-full input-bordered" />
       <input name='brand' type="text" disabled value={name} placeholder="Type here" className="input w-full input-bordered" />
       <input name='price' type="text" disabled value={resalePrice} placeholder="Type here" className="input w-full input-bordered" />
       <input name='locationB' type="text" placeholder="your location" className="input w-full input-bordered" required />
       <input name='number' type="number" placeholder="Your number" className="input w-full input-bordered" required/>
       <br></br>
       <input className='w-full btn btn-success' type="submit" value="submit" />
      </form>
     </div>
     </div>
    </>
  )
}

export default BayModalInfo