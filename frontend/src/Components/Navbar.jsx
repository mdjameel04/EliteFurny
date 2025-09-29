import React from "react";
import { assets, navItems } from '../assets/assets'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-4 max-md:w-full  border-slate-700 px-6 py-4 rounded-full font-bold relative mt-4 text-white">
      {/* Logo */}
      <div>
        <img src={assets.Logo_1} alt="Logo" className="w-32 h-32"  />
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
   <div className=" hidden items-center gap-4  md:flex">
    <button className="text-sm font-medium bg-white px-4 py-2  shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] text-black rounded-full transition duration-300 hover:bg-slate-100 shadow-white/50 hover:shadow-white/50 "> SignIn</button>
    <button  className="text-sm font-medium bg-white px-5 py-2  shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] text-black rounded-full transition duration-300 hover:bg-slate-100 shadow-white/50 hover:shadow-white/50 "> LogIn</button>
   </div>
    </nav>
  );
};

export default Navbar;
