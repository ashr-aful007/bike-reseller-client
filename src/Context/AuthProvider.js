import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../FIrebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

function AuthProvider({children}) {
  const [user,setUser] = useState({})

  //for create user
  const createUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
  }

  //for sign in 
  const signIn = (email, password) =>{
      return signInWithEmailAndPassword(auth, email, password)
  }

  //for log out 
  const logOut = () =>{
     return signOut(auth)
  }

  //obserber
  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
     });
     return () => unsubscribe()
  },[])


     const authValue ={
       createUser,
       signIn,
       setUser,
       user,
       logOut,
     }
  return (
    <AuthContext.Provider value={authValue}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider