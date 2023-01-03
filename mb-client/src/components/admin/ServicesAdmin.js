import "../.././App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import { Navigate, useNavigate } from "react-router-dom"

function ServicesAdmin () {

     const navigate = useNavigate()
     const [title, setTitle] = useState('')
     const [desc, setDesc] = useState('')
     const [image, setImage] = useState('')
     console.log(image,11)

     useEffect(()=> {
          if(!localStorage.getItem("token")) {
               navigate("/home")
          }
     },[])


     const handleChange = (e) => {
          setTitle(e.target.value)
     }

     const handleChangeDesc = (e) => {
          setDesc(e.target.value)
     }

     const handleClick = (data) => {
          console.log(title, desc, image, 22)
          navigate("/home")

          const formData = new FormData()
          formData.append("title",title)
          formData.append("description", desc)
          formData.append("image", image)
          
          axios.post('http://localhost:5000/api/services',
               formData,
               {
                    headers: {"Authorization": localStorage.getItem("token") }
               }
          )
          .then((res) => {
               console.log(res.data)
               if(res.data.code === 403 && res.data.message === "Token Expired") {
                    localStorage.setItem("token", null)
               }
          })
          .catch(err=>{
               console.log(err, "err")
          })
     }

     return(
          <div className="admin-card" >
              <h1 className="font-bold text-xl mb-4"> ADD A NEW MEMORY </h1> 
              <div class="mb-6">
                      <input value={title} onChange={handleChange} placeholder="title" type="text" id="small-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
               </div>
               
              <div class="mb-6">
                      <input value={desc} onChange={handleChangeDesc} placeholder="description" type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
               </div>
              <div class="mb-6">
                      <input multiple type="file"  onChange={(e)=> setImage(e.target.files[0])} placeholder="Image here" id="default-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
               </div>
              {/*  <input value={title} onChange={handleChange} placeholder="title" className="input-admin" /> <br/>
               <input value={desc} onChange={handleChangeDesc} placeholder="description" className="input-admin" /> <br></br>
               <input multiple type="file"  onChange={(e)=> setImage(e.target.files[0])} placeholder="Image here" className="input-admin " /> <br></br>
              */}  <button
              class="my-2 bg-red-500 text-gray-50 hover:bg-red-700 p-3 px-3 sm:px-5 rounded"
                    onClick={handleClick}
               >ADD SERVICES</button>
          </div>
     )
}
export default ServicesAdmin