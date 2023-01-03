import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from "axios";


export default function Services() {
  const [data,setData] = useState([])
  const [filter,setFilter] = useState("")

  useEffect(()=> {
    axios
    .get("http://localhost:5000/api/services")
    .then(res=> { 
      console.log(res.data)
      setData(res.data.data)
    })
    .catch(err => { 
      console.log(err) 
     })
  },[])
       
  return (
    <div>
    <div className='my-20 px-2 lg:px-20'>
    
<h2 class="text-3xl py-10">My Memories</h2>
<div>
<div class="grid grid-flow-row grid-cols-2  md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4">

{  data.map((serviceItem, serviceIndex) => {
  return(
    <div key={serviceIndex+1 } class="shadow-lg rounded-lg border-2 border-gray-200 shadow-2xl m-2 p-4 gap-2 " >
      
         <img src={`http://localhost:5000/${serviceItem?.imageUrl}`} />
       
        {console.log(`http://localhost:5000/${serviceItem?.imageUrl}`)} 
        <div className='title my-2'>   {serviceItem.title} </div>
        <div className='description'>  {serviceItem.description}</div> 
        
      </div>
    )
  })
  
}
  </div>
</div>
    </div>
    </div>
  )





}