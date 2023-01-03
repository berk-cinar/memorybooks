import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <div className="mt-32">
      <footer className="bg-[#0f3460]">
      
        <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 px-1 lg:px-0'>
          <div>
            <h1 className="text-2xl">Memory Books</h1>
            <p>All your memories and beyond...</p>
          </div>

          <div>
            <h2>About Us</h2>
            <ul>
              <li>Our Policy</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Costumer Services</h2>
            <ul>
              <li>Help Center</li>
              <li>Marketing </li>
              <li> Your Products </li>
              <li> Comparement </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact </h2>
            <ul>
              <li>No:1012 Çankaya/ANKARA  </li>
              <li>Email: berkcinr@gmail.com</li>
              <li>Phone: +90 507 368 71 73 </li>
            </ul>
          </div>
        </div>
       
      </footer>


  <div class="text-center bg-[#0f3460] text-gray-400 p-4">
    © 2021 Copyright. 
    <a class="text-whitehite" href="https://tailwind-elements.com/"> All Rights Reserved</a>
  </div>


    </div>
  )
}

export default Footer;