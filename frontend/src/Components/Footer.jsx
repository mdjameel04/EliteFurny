import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

      <footer className='bg-gray-900 text-gray-300 mt-12 px-6 sm"px-12 lg:px-24 py-12 '>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

{/* brand */}
 <div>
<h1 className='text-2xl font-bold text-white'> Elite Furny</h1>
<p className='mt-3 text-sm text-gray-400'> Redefining comfort & style for your home with premium quality furniture </p>
 </div>

{/* quick link  */}
<div>
  <h3 className='text-lg font-semibold text-white mb-3'> stay updated</h3>
  <ul className='space-y-2 text-sm'>
<li> <Link to={"/shop"} className='hover:text-amber-400 hover:underline'>shop</Link></li>
<li> <Link to={"/about"} className='hover:text-amber-400 hover:underline'>About</Link></li>
<li> <Link to={"/contact"} className='hover:text-amber-400 hover:underline'>Contact</Link></li>
  </ul>
</div>
<div>
 <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
      <p className="text-sm text-gray-400 mb-4">Subscribe to get the latest deals & updates</p>
      <div className="flex gap-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="px-3 py-2 rounded-l-lg w-full border border-white rounded-lg  focus:outline-none focus:ring-amber-400 text-gray-800"
        />
        <button className="bg-amber-500 hover:bg-amber-600 px-4 rounded-r-lg text-white">
          Subscribe
        </button>
      </div>
    </div>

  </div>


</footer>
    
  )
}

export default Footer
