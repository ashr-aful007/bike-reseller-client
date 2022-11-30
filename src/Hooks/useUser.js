import { useEffect, useState } from "react"


const useUser = email =>{
     const [isUser, setIsUser] = useState(false)
     const [userLoading, setUserLoading] = useState(true)
     useEffect(()=>{
          if(email){
               fetch(`https://y-gules-mu.vercel.app/users/user/${email}`)
               .then(res => res.json())
               .then(data => {
                    setUserLoading(false)
                    setIsUser(data.isUser)
               })
          }
     },[email])
     return [isUser,userLoading]
}

export default useUser