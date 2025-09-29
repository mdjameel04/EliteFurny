import React from 'react'
import { assests, navItems } from '../assets/assests'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between  mx-4 max-md:w-full border-slate-700 px-6 py-4 rounded-full font-bold relative mt-4' >
      <div >
     <img src={assests.Logo_1} alt="" className='w-32 h-32 mix-blend-color-burn ' />
      </div>
    {/* desktop*/}
  <div className='hidden md:flex items-center gap-6 ml-7'>
  {navItems.map((item)=>(
 <Link key={item.name} to={item.path} className="relative overflow-hidden h-6 group"> 
 <span className='block group-hover:-translate-y-full transition-transform duration-300'>
 {item.name}
 </span>
  <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              {item.name}
            </span>
 </Link>
  ))}
  </div>


    </nav>
  )
}

export default Navbar
