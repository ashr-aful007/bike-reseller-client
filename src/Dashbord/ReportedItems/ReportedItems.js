import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Loading from '../../Pages/Loading/Loading'
import ShowReportedItem from './ShowReportedItem'

function ReportedItems() {
   const {data:reported =[], isLoading} = useQuery({
       queryKey:[''],
       queryFn: async () =>{
           const res = await fetch(`https://y-gules-mu.vercel.app/products/roported`)
           const data = await res.json()
           return data
       }
   })
   if(isLoading){
      return <Loading></Loading>
   }  
  return (
    <div className='h-screen'>
      {
        reported.map(repo => <ShowReportedItem
         repo={repo}
        ></ShowReportedItem> )
      }
    </div>
  )
}

export default ReportedItems