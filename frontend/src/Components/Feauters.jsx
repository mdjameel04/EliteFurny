import React, { useState } from 'react'
import { products, tabs } from '../assets/assets'

const Feauters = () => {
    const [ActiveTab, setActiveTab] = useState("arrival");
  return (
    <div>
    <div className='flex justify-center mt-8 gap-20 border-b-2 border-gray-200 shadow-2xl'>
      {tabs.map((tab)=>(
        <button key={tab.id} onClick={()=> setActiveTab(tab.id)} className={`pb-2 font-semibold transition-colors ${ActiveTab === tab.id ? "  border-b-2   text-amber-500" : " text-gray-600 hover:text-amber-500"} `} >
            {tab.label }
        </button>
      ))}
</div>
   
       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 lg:px-24">
        {products[ActiveTab].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600">Elegant & durable design</p>
            </div>
          </div>
        ))}
       </div>
 
       

      


   </div>
  )
}

export default Feauters
