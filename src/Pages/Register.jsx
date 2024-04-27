import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import Swal from 'sweetalert2'
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { toast } from 'react-toastify';






const Register = () => {
    useEffect(() => {
        document.title = 'Register Page';
        return () => {
          document.title = 'Title';
        };
      }, []);

     
      const {registerUser, setUser} = useContext(AuthContext)
      const [error,setError] = useState("")
      const [showPassword , setshowPassword] = useState(false)
      
    
// ---------------------------------------------------

    

// --------------------------------------------------

      
    const handelRegister = (e) => {
        e.preventDefault();
        const email     = e.target.email.value;
        const password = e.target.password.value;
   
        if(password.length < 6){
            setError("Password Length must be at least 6 character")
            return
          }
        //   if(!/.*\d.*\d.*/.test(password)){
        //     setError("NUMBNER DE")
        //     return
        //   }
          if(!/[a-z]/.test(password)){
            setError("Must have a Lowercase letter in the password")
            return
          }
          if(!/[A-Z]/.test(password)){
            setError(" Must have an Uppercase letter in the password")
            return
          }
          setError("")

          registerUser( email,password)
    .then(result => {
        setUser(result.user)
       toast('ok')
    })
            
    
        
        registerUser(email,password)
        .then(result=>{
            setUser(result.user)
        })
        // .catch(error=>setError(error.message))
        
      
        
        
    }

// ------------------------------------





    return (
        <div className="flex border mb-4  border-black flex-col w-full container mx-auto mt-20 rounded-2xl p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-3xl font-semibold">Register to your account</h1>
            <a className="text-sm dark:text-gray-600" href="/">Or start your free trial</a>

            <form onSubmit={handelRegister} noValidate="" className="space-y-4">

                <div className="flex flex-col border border-y-gray-500">
                    <label htmlFor="email" className="sr-only  border border-y-gray-700">Email address</label>
                    <input id="email" type="email" name="email" placeholder="Email address" className="rounded-t-md h-20 dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2" />
                </div>
                <div className="flex flex-col border border-y-gray-500 relative">
                <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="-mt-1 rounded-b-md h-20  dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2"/>
                    <span className='absolute text-3xl mt-5 right-5 ' onClick={()=>setshowPassword(!showPassword)}>
                                 {
                                   showPassword ? <IoEyeOff></IoEyeOff> : <MdRemoveRedEye></MdRemoveRedEye>
                                 }
                                </span>
                </div>
                {
                    error && <small className='text-red-600 mr-[800px]'>{error}</small>
                    }
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
                        <label htmlFor="remember" className="text-sm dark:text-gray-600">Remember me</label>
                       
                    </div>
                    
                </div>
                
                <button type="submit" className="px-8 bg-black w-full text-white py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Register</button>
            </form>
        </div>
        
    );
    
};

export default Register;
