import React from 'react' 
import '../Banner/Banner.css'

function Banner() {
  return (
    <div className='bg-img'>
      <div className='text-white flex flex-col h-96 justify-center items-center'>
      <h1 className='text-5xl font-bold mb-2'>Sell and Buy your second hand bike!</h1>
      <p className='text-xl text-gray-300'>This site help you for find your expected second hand bike. And you can sell your second hand bike.</p>
      <p className='text-xl text-gray-300'>we provide veryfied sellers and secure payment method!</p>
      </div>      
    </div>
  )
}

export default Banner