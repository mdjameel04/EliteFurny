import React from 'react'

const Button = () => {
  return (
    <div className='flex flex-col gap-8  items-center h-40 justify-center '>
       <button
            className="bg-white hover:shadow-[5px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300 ">
            Get Started
        </button>

        <button  className='bg-white rounded-full px-4 py-2 hover:shadow-[0px_0px_30px_10px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black text-sm font-medium hover:bg-slate-100 transition duration-300 '>
            lets go
        </button>
    </div>
  )
}

export default Button
