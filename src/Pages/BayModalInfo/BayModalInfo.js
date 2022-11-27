import React, { useContext, useEffect } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../../Context/AuthProvider'

function BayModalInfo({bayProducts}) {
     const {name,location,resalePrice,sellerName,productsUsdTime,catagoryId,productsCatagory,img} = bayProducts;
     const {user} = useContext(AuthContext) 
     const handleBay = event =>{
           event.preventDefault()
           const form = event.target;
           const nameB = form.nameB.value
           const email = form.email.value
           const brand = form.brand.value
           const price = form.price.value
           const locationB = form.locationB.value
           const number = form.number.value  
      
           const Booking ={
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
          fetch('http://localhost:5000/booking',{
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(Booking)
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.acknowledged){
              toast.success('Booking confirmed')
            }
            
          }) 
          .catch(err => console.log(err))
          
     }

  

  return (
    <>
        <input type="checkbox" id="Bay-modal" className="modal-toggle" />
     <div className="modal">
     <div className="modal-box relative">
     <label htmlFor="Bay-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
     <h3 className="text-lg font-bold">{productsCatagory}</h3>
      <form onSubmit={handleBay} className='grid grid-cols-1 gap-3 mt-7'>
       <input name='nameB' type="text" placeholder='type name' className="input w-full input-bordered" required/>
       <input name='email' type="text" disabled value={user?.email || ''} className="input w-full input-bordered" />
       <input name='brand' type="text" disabled value={name || ''} placeholder="Type here" className="input w-full input-bordered" />
       <input name='price' type="text" disabled value={resalePrice || ''} placeholder="Type here" className="input w-full input-bordered" />
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