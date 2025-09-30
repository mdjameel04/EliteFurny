import React, { useEffect, useState } from "react";
import { assets, navItems } from '../assets/assets'
import { Link } from "react-router-dom";

const Navbar = () => {

const [isScrolled, setIsScrolled] = useState(false)

useEffect(()=>{
const HandelScroll = ()=>{
    setIsScrolled(window.scrollY>50);
}
window.addEventListener("scroll", HandelScroll);
return ()=> window.removeEventListener("scroll",HandelScroll)
},[])


    const [MenuOpen, setMenuOpen] = useState(false);
      const toggleMenu = () => setMenuOpen(!MenuOpen);
  return (
    <nav className={`flex items-center justify-between  max-md:w-full top-0  px-6 py-4 rounded-2xl mx-2 font-bold relative  text-black  ${isScrolled ? "bg-transparent  text-black" :"bg-black text-white"}`}>
      {/* Logo */}
      <div>
        <img src={assets.Logo_1} alt="Logo" className="w-36 h-auto"  />
      </div>

      {/* Desktop Nav Items */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item.name}
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Sign In / Sign Up */}
   <div className=" hidden items-center gap-4  md:flex mr-7">
    
    <button className="text-sm font-medium bg-white px-4 py-2  shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] text-black rounded-full transition duration-300 hover:bg-slate-100 shadow-white/50 hover:shadow-white/50 "> SignIn</button>
    <button  className="text-sm font-medium bg-white px-5 py-2  shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] text-black rounded-full transition duration-300 hover:bg-slate-100 shadow-white/50 hover:shadow-white/50 "> LogIn</button>
  
   </div>

{/* mobile */}

<div className="block md:hidden" >
    <img src={MenuOpen ?assets.close_icon : assets.menu} alt="" className="h-8 w-8  " onClick={toggleMenu} />
</div>

{/* mobile menu */}

{ MenuOpen && (
    <div className="absolute top-full right-0 w-full items-center flex flex-col py-6 md:hidden space-y-4 z-50 rounded-b-3xl shadow-lg text-black" >
  {navItems.map((item)=>(
    <Link key={item.name} to={item.path} onClick={toggleMenu}>
    {item.name} 
    </Link>
  ))}
<div className="flex gap-6 ">
    <button className="font-medium px-5 py-2 rounded-full bg-gradient-to-l from-pink-600 to-cyan-600 text-black hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-blue-200  transition duration-300"  >
    SignIn
</button>
    <button className="font-medium px-5 py-2 rounded-full bg-gradient-to-l from-pink-600 to-cyan-600 text-black hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-blue-200  transition duration-300"  >
    LogIn
</button>
</div>

    </div>
)}

    </nav>
  );
};

export default Navbar;
