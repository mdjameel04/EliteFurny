import React from 'react'
import { assets } from '../assets/assets'
import Feauters from '../Components/Feauters'

const Home = () => {

const categories =[
  {id:1, name: "sofa", Image: assets.cat_img1, },
  {id:2, name: "chair", Image: assets.cat_img2, },
  {id:3, name: "lamp", Image: assets.cat_img3, },
  {id:4, name: "smart Tv", Image: assets.cat_img4, },
  {id:5, name: "table", Image: assets.cat_img5, }
]

  return (
    <section >
      {/* Hero Section */}
      <div className="flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-black 
             min-h-[80vh] md:min-h-screen
             bg-[url('/src/assets/Home_furnituer1.webp')] bg-no-repeat 
             bg-cover sm:bg-top md:bg-center lg:bg-contain">
        <p className="bg-[#49b9ff]/50 px-3.5 py-1 rounded-full  w-max text-sm sm:text-base">
          Premium Furniture Collection
        </p>
        <h1 className="font-Playfairr text-3xl sm:text-4xl md:text-5xl lg:text-[56px] 
                       md:leading-[56px] font-bold max-w-xl mt-4">
          Redefine Comfort & Style for Your Home
        </h1>
      
      </div>

      {/* Delivery Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xl mt-1 shadow-2xl mx-6 p-6 bg-amber-200 rounded-2xl">
        {/* Feature 1 */}
        <div className="flex items-start">
          <img src={assets.shipping} alt="" className="w-12 h-12" />
          <div className="flex flex-col ml-4">
            <h3 className="font-bold text-lg">Free Shipping</h3>
            <p className="text-sm text-gray-600">Free shipping for order above ₹10,000</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start ]">
          <img src={assets.payment} alt="" className="w-12 h-12" />
          <div className="flex flex-col ml-4">
            <h3 className="font-bold text-lg">Flexible Payment</h3>
            <p className="text-sm text-gray-600">Multiple secure payment options</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start">
          <img src={assets.contact_support} alt="" className="w-12 h-12" />
          <div className="flex flex-col ml-4">
            <h3 className="font-bold text-lg">24x7 Support</h3>
            <p className="text-sm text-gray-600">We support online all days</p>
          </div>
        </div>
      </div>

     <div className='mt-22 bg-white  '>
      <h1 className='font-bold text-center mr-6 text-3xl ' > Featured products</h1>
     </div>
   <Feauters/>

   <div className='mt-6'>
    <h1 className='text-3xl font-bold ml-[6%]'> Categiores</h1>
   </div>

   <div className='flex items center gap-12 mt-10 justify-evenly'>
   {categories.map((item)=>(
    <div key={item.id} className='flex flex-col items-center text-gray-700 hover:text-black transition'>
    <div className="bg-gray-100 p-6 rounded-full shadow-md ">
      <img src={item.Image} alt="" className='flex w-20 h-20' />
    </div>
    <p>{item.name      } </p>
    </div>
   ))}
   </div>
    </section>
  )
}

export default Home