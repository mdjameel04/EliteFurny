import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
    <a href="https://prebuiltui.com">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
    </a>
    <div className="hidden md:flex items-center gap-6 ml-7">
        <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Products</span>
        </a>
        <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Stories</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Stories</span>
        </a>
        <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Pricing</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Pricing</span>
        </a>
        <a href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Docs</span>
            <span
                className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Docs</span>
        </a>
    </div>

    <div className="hidden ml-14 md:flex items-center gap-4">
        <button
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
        </button>
        <button
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
        </button>
    </div>
    
    <div id="mobileMenu" className="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4 ">
        <a className="hover:text-indigo-600" href="#">
            Products
        </a>
        <a className="hover:text-indigo-600" href="#">
            Customer Stories
        </a>
        <a className="hover:text-indigo-600" href="#">
            Pricing
        </a>
        <a className="hover:text-indigo-600" href="#">
            Docs
        </a>
        <button
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
        </button>
        <button
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
        </button>
    </div>
</nav>


    </div>
  )
}

export default Navbar
