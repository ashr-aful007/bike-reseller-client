import { useEffect, useState } from "react"


const useUser = email =>{
     const [isUser, setIsUser] = useState(false)
     const [userLoading, setUserLoading] = useState(true)
     useEffect(()=>{
          if(email){
               fetch(`http://localhost:5000/users/user/${email}`)
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