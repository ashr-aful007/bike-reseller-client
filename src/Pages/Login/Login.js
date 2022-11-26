import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


function Login() {
     const {register, formState: { errors },handleSubmit} = useForm()
     const [loginError, setLoginError] = useState('')
     const {signIn,googleSignIn} = useContext(AuthContext)
     
     const handlelogin = data =>{
      setLoginError('')
          signIn(data.email, data.password)
          .then(result =>{
              const user = result.user
              toast.success('Login successfully')
          })
          .catch(err =>{
            
            setLoginError(err.message)
          })
     }

     const hangleGooglesignIn = () =>{
         googleSignIn()
         .then(result =>{
            const user = result.user
         })
         .catch(err =>console.log(err))
     }
  return (
    <div className='h-[800px] flex justify-center items-center'>
     <div className='w-96 p-10 border-2 rounded-lg'>
          <p className='text-xl'>login</p>
          <form onSubmit={handleSubmit(handlelogin)}>
        <div className="form-control w-full max-w-xs">                 
          <label className="label"><span className="label-text-alt">Email</span></label>        
          <input type="email" {...register("email", {
            required: "Email Address is required"})} className="input input-bordered w-full max-w-xs"/> 
        </div>
        <div className="form-control w-full max-w-xs">
          {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}                 
          <label className="label"><span className="label-text-alt">password</span></label>        
          <input type="password" {...register("password",{required: true})} className="input input-bordered w-full max-w-xs"/> 
        </div> 
        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}      
          <br></br>
          <input className='btn bg-green-300 w-full' type="submit" value='Login' />
          <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
          </div>
     </form>
     <p>New to bike resell <Link className='text-orange-600' to='/signup'>Create account</Link></p>
     <div className='divider'>OR</div>
     <button onClick={hangleGooglesignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
     </div>
    </div>
  )
}

export default Login