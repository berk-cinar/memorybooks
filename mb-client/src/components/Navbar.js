import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className=' flex justify-content-space-between'>
        <Link  to="/home">
            <img className='w-[10vh] ' src="/logo.png" />
        </Link>
        <div className='link'>
            <div className='button font-bold'> <Link to="/home"> Home </Link> </div>
            <div className='button font-bold'><Link to="/services"> Memories </Link></div>
            <div className='button font-bold'> <Link to="/about"> Contact </Link> </div>
            {
              localStorage.getItem("token")  && localStorage.getItem("type") === "ADMIN" &&
              <div className='button font-bold'><Link to="/admin/services"> Add Memories </Link></div>
            }
            {
              localStorage.getItem("token") && localStorage.getItem("type") === "ADMIN" &&
              <div className='button font-bold'><Link to="/admin/list"> List Admins </Link></div>
            }
            {
              localStorage.getItem("token")  && localStorage.getItem("type") === "ADMIN"  ?
              <button  className='button font-bold' onClick={() => {
                localStorage.clear()
                navigate("/home")
              }}> Logout</button> : 
              <button  className='button font-bold' onClick={() => {
                navigate("/admin/login")
              }}> Login</button> 
            }
        </div>
    
        
    </div>
  )
}

export default Navbar