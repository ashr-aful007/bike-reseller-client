import React from 'react'

function Loading() {
  return (
    <div className='h-screen'>
     <div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-500"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-500"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-violet-500"></div>
     </div>
    </div>
  )
}

export default Loading