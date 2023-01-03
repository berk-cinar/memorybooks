import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from "axios";


export default function Courses() {
  const [data,setData] = useState([])
  const [filter,setFilter] = useState("")

  useEffect(()=> {
    axios
    .get("http://localhost:5000/api/services")
    .then(res=> { 
      console.log(res.data)
      setData(res.data.data)
    })
    .catch(err => { console.log(err)  })
  },[])
       
  return (
    <div>
      <h1> Services </h1>
      <input placeholder='searchasdasd' className='filter' value={filter} onChange={(e) => setFilter(e.target.value)} ></input>
      <br></br>
<div className='cardflex'>
      {
        data.length > 0 ?
        data
        .sort((a,b) => a.title.toLowerCase() > b.title.toLowerCase ? 1 : -1)
        .filter( item => {
          return item.title.toLowerCase().includes(filter.toLowerCase()) || item.description.toLowerCase().includes(filter.toLowerCase())
        })
        .map((serviceItem, serviceIndex) => {
          return(
            <div key={serviceIndex+1 } className='card'>
            
              <img className='image' alt="image" src={`http://localhost:5000/${serviceItem?.imageUrl}`} />
             
              {console.log(`http://localhost:5000/${serviceItem?.imageUrl}`)}
              <div className='title'>   Title: {serviceItem.title} </div>
              <div className='description'>Description:  {serviceItem.description}</div> 
            </div>
          )
        })
         : "No data found"
      }
</div>
    </div>
  )
}