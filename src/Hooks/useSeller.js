import { useEffect, useState } from "react"

const useSeller = email =>{
     const [isSeller, setIsSeller] = useState(false);
     const [sellerLoadin, isSellerLoading] = useState(true)
     useEffect(() =>{
       if(email){
          fetch(`https://y-gules-mu.vercel.app/users/seller/${email}`,{
               headers:{
                    authorization: `bearer ${localStorage.getItem('accesstoken')}`
               }
          })
          
          .then(res => res.json())
          .then(data => {
               isSellerLoading(false)
               setIsSeller(data.isSeller);
          })
       }
     },[email])
     return [isSeller,sellerLoadin]
}

export default useSeller;