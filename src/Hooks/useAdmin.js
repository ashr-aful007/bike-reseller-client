import { useEffect, useState } from "react"

const useAdmin = email =>{
     const [isAdmin, setisAdmin] = useState(false);
     const [isAdminLoding, setIsAdminLoading] = useState(true)
     useEffect(() =>{
       if(email){
          fetch(`https://y-gules-mu.vercel.app/users/admin/${email}`,{
               headers:{
                    authorization: `bearer ${localStorage.getItem('accesstoken')}`
                  }
          })
          .then(res => res.json())
          .then(data => {
               setisAdmin(data.isAdmin);
               setIsAdminLoading(false)
          })
       }
     },[email])
     return [isAdmin,isAdminLoding]
}

export default useAdmin;