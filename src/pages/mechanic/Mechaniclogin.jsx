import axios from '../../axios/axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Mechaniclogin() {
  const navigate = useNavigate()
  const[mechanicLogin,setMechaniclogin] = useState({email:"", password:""})
  console.log(mechanicLogin,"po")

  const onSubmit = async(e)=>{
    try {
      e.preventDefault()
      const response = await axios.post("/api/mechanic/mechaniclogin",mechanicLogin)
    if(response){
      toast.success(response.data.message)
      localStorage.setItem("mechtoken",response.data.data)
      navigate("/mechanic/home")
      setTimeout(()=>{
        window.location.reload(true)
      },900)
    }else{
      toast.error("Unsuccessful")
    }
    } catch (error) {
      console.log(error.message)
      toast.error("something went wrong")
    } 
  }

  return (
    <div><div> 
    <section className= " md:w-screen w-screen">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl mr-5 font-semibold text-gray-900 dark:text-black">
          <img className="w-8 h-8 mr-2" src="\img\logo-no-background-photoaidcom-cropped (1).png" alt="logo"/>
        Mechanic    
      </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Sign in to your Mechanic account
             </h1>
             <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={(e)=>setMechaniclogin({...mechanicLogin,email:e.target.value})} />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setMechaniclogin({...mechanicLogin,password:e.target.value})} />
                </div> 
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                       
                    </div>
                </div>
                <button type="submit" className="w-full mt-5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-800">Sign in</button>
            </form>

        </div>
    </div>
</div>
</section>
</div>
</div>
  )
}

export default Mechaniclogin