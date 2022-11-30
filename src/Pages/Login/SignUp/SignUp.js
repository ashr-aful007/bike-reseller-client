import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthProvider'
import useToken from '../../../Hooks/useToken'

function SignUp() {
     const {register, formState: { errors },handleSubmit} = useForm()
     const {createUser,googleSignIn,updateUser} = useContext(AuthContext)
     const [signuperror, setError] = useState('');

     const [userEmail, setUserEmail] = useState('')
     const [token] = useToken(userEmail)
   const location = useLocation()
   const navigate = useNavigate()


   const from = location.state?.from?.pathname || '/'

   if(token){
       navigate(from,{replace: true})
   }
     
   //google sign in
   const handlegoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
        const user = result.user 
        addUserToDb(user.email, user.name, 'user')               
    })
    .catch(err => {
        setError(err.message)
    })
 }
     
     const handlelogin = data =>{
        setError('')
        addUserToDb(data.email, data.name, data.userData)

        createUser(data.email, data.password)
          .then(result =>{
             const user = result.user
             toast.success('SignUp successfully')                      
             const userdata = {
                displayName: data.name
            } 
            .catch(err => {
              setError(err.message)
            }) 

            updateUser(userdata)
            .then(() =>{                          
            })
            .catch(err => {
                setError(err.message)
            })         
          })
        
     }



  const addUserToDb = (email, name,role)=>{
    const user = {email, name, role}
    fetch('http://localhost:5000/user',{
      method: 'POST',
      headers:{
         'content-type': 'application/json'
      },
      body: JSON.stringify(user)
   })
   .then(res => res.json())
   .then(data => {
     console.log(data)
     setUserEmail(email)         
   })
 }
  
  return (
     <div className='h-[750px] flex justify-center items-center '>
     <div className='w-96 p-10 border-2 rounded-lg'>
          <p className='text-xl'>Sign Up</p>
          <form onSubmit={handleSubmit(handlelogin)}>
      <div className="form-control w-full max-w-xs">                 
          <label className="label"><span className="label-text-alt">name</span></label>        
          <input name='name' type="name" {...register("name", {
          required: "Name is required"})} className="input input-bordered w-full max-w-xs"/> 
      </div>
         {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
      <div className="form-control w-full max-w-xs">                 
          <label className="label"><span className="label-text-alt">Email</span></label>        
          <input type="email" {...register("email", {
          required: "Email Address is required"})} 
          className="input input-bordered w-full max-w-xs"/> 
      </div>
      <div className="form-control w-full max-w-xs">
          {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}                 
          <label className="label"><span className="label-text-alt">password</span></label>        
          <input type="password" {...register("password",
          {required: true})} 
          className="input input-bordered w-full max-w-xs"/> 
      </div> 
        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>} 
      <label className="label"><span className="label-text-alt">Choose your role</span></label>
      <select className='select select-bordered w-full mt-3 mb-3' {...register("userData",
          {required: "Please chose your optaion"})}>
          <option value="seller">seller</option>
          <option value="User">User</option>
      </select>     
          <br></br>
          <input className='btn bg-green-300 w-full' type="submit" value='Sign Up'/>     
     </form>
     
     <p className='text-sm'>New to bike resell <Link className='text-orange-600' to='/login'>Login</Link></p>
     {signuperror && <p className='text-red-600'>{signuperror}</p>}
     <div className='divider'>OR</div>
     <button onClick={handlegoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
     </div>
    </div>
  )
}

export default SignUp