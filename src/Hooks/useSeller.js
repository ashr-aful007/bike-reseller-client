import { useEffect, useState } from "react"

const useSeller = email =>{
     const [isSeller, setIsSeller] = useState(false);
     const [sellerLoadin, isSellerLoading] = useState(true)
     useEffect(() =>{
       if(email){
          fetch(`http://localhost:5000/users/seller/${email}`)
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