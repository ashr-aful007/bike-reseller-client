import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FIrebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const Provider = new GoogleAuthProvider()

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

  //update user
  const updateUser = (userdata) =>{
      return updateProfile(user, userdata);
  }

  //sign in with google
  const googleSignIn = () =>{
     return signInWithPopup(auth,Provider)
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
       googleSignIn,
       updateUser
     }
  return (
    <AuthContext.Provider value={authValue}>
       {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider