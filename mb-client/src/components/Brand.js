import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
  return (

            <div class="px-4 md:flex lg:px-20 md:flex-row mt-20">
      <div>
        <img className='max-w-[30vw] mx-auto' src="./logo.png" />
      </div>
      <div className='mx-20'>

      <h2 class="  font-serif p-4 text-4xl text-gray-600 mb-4 text-center md:self-start md:text-left">Make your memories unforgettable</h2>
      <Link to="/services" class=" bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5">
          My memories </Link>
      </div>
    </div>
 
  )
}

export default Brand