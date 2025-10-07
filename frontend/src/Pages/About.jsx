import React from 'react'
import { assets } from '../assets/assets'
import { FaHome} from 'react-icons/fa'
import {MdRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="bg-[bisque] p-4"   > 
      {/* heading */}
      <div className='mt-4 flex justify-center items-center gap-2 mb-4  ' >
        
          <FaHome size={20} color='gray'/>
        
        <h3 className='text-sm text-gray-500 font-bold text-center   italic '> Home |</h3>
     <h3 className='text-sm text-black font-bold text-center   italic underline-offset-4 decoration-2 underline '> About us</h3>
      </div>

     <div > 
      <h1 className='text-2xl text-gray-800 mt-6 font-medium text-center' > Bringing warmth, style, and handcrafted quality to every home. </h1>
      <p className="text-center text-gray-600 mt-4 text-sm">
   EliteFurny creates handcrafted furniture that combines style, comfort, and quality for every home.
</p>

<div className='flex items-center justify-center'>
  <Link to={'/shop'}>
<button className='flex items-center bg-gradient-to-l bg-pink-600 to-blue-400 rounded-lg px-4 py-2 mt-4'>
  <MdRestaurantMenu/>  explore It
</button>
  </Link>
</div>
     </div>

    </section>
  )
}

export default About
