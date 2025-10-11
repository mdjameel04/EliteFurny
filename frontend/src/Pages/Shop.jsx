import React from 'react'
import { assets, tabs } from '../assets/assets'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";


import { Autoplay, Pagination, } from "swiper/modules";

const Shop = () => {

  const heroImages =[
    {id :1 ,img : assets.hero_img1 },
    {id :2 ,img : assets.hero_img2},
    {id :3 ,img : assets.hero_img3 },
    {id :4 ,img : assets.hero_img4 },

  ];
  const slides =[
   {id:1, name:"tv", Image:assets.productimg1, price:"17,000"},
   {id:2, name:"tv", Image:assets.productimg2, price:"20,000"},
   {id:3, name:" Desk Lamp", Image:assets.productimg3, price:"25,000"},
   {id:4, name:" cupboard", Image:assets.productimg4, price:"30,000"},
   {id:5, name:" smart tv", Image:assets.productimg5, price:"23,000"},
   {id:6, name:" table", Image:assets.productimg6, price:"29,000"},
   {id:7, name:" sofa", Image:assets.productimg7, price:"35,000"},
   {id:8, name:" Lamp", Image:assets.productimg8, price:"15,000"},
   {id:9, name:" modern Lamp", Image:assets.productimg9, price:"19,000"},
   {id:10, name:" classic Sofa", Image:assets.productimg10, price:"31,000"},
   {id:11, name:"Office Chair", Image:assets.productimg11, price:"27,000"},
   {id:12, name:"arm Chair", Image:assets.productimg12, price:"42,000"},
   {id:13, name:"smart tv", Image:assets.productimg13, price:"15,000"},
   {id:14, name:"cupboard", Image:assets.productimg14, price:"33,000"},
   {id:15, name:"Elegant cupboard", Image:assets.productimg15, price:"43,000"},
   {id:16, name:"chair", Image:assets.chair, price:"22,000"},
   {id:17, name:"chair", Image:assets.table, price:"22,000"},


  ]
  
  

  
  
  return (                              
    <section className='px-6 md:px-16 lg:px-24 py-2 bottom-0 top-0 bg-[#DADDD8] w-full '>
      <Swiper
   
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  loop={true}
  modules={[Autoplay, Pagination]}
  className="w-full rounded-none"   // full width
>
  {heroImages.map((item) => (
    <SwiperSlide key={item.id}>
      <img
        src={item.img}
        alt=""
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover "
      />
      <button className='absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#FF6B6B] text-white font-bold px-6 py-2 rounded-full shadow-lg hover:bg-[#ff4c4c] transition'> shop-now</button>
    </SwiperSlide>
  ))}
</Swiper>

<h1 className='font-bold text-3xl mx-16 sm:text-2xl mt-8 '> explore our furnituer</h1>
 
<div className='mt-8 w-full flex justify-center gap-16 '>
 
  <div>
  <img src={assets.chair} alt="" className='w-56 h-56 md:64 z-10 object-cover relative '/>
   <div className=" w-72 h-72 md:w-55 md:h-55 rounded-full -translate-y-11/12  absolute bg-[#d57f16]  hidden md:block"></div>
  <h1 className='font-bold text-2xl text-center mt-8 '>Modren tables</h1>
  </div>
  <div>
  <img src={assets.table} alt="" className='w-56 h-56 md:64 z-10 object-cover relative mt-20  '/>   <h1 className='font-bold text-2xl text-center '>Classic chair</h1>
 </div>
</div> 


<h1 className='font-bold text-2xl md:text-3xl text-center mt-8 relative inline-block text-gray-700 mb-4' > <span className='text-gray-500'> All</span> Products
   <span class="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded"></span>
</h1>

<div className='bg-white px-6 py-12 md:px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mt-2'>
{slides.map((item)=>(
  <div key={item.id} className='bg-gray-100 roun-xl p-4 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300'>
    <img src={item.Image} alt=""  className='w-64 h-64 object-cover rounded-lg'/>
    <h2 className='text-lg font-semibold mt-3 text-gray-800 '>{item.name} </h2>
    <p className='text-pink-600 mt-1 font-bold'>₹{item.price} </p>
    <div className='flex items-center justify-center'>
    <button className="mt-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium py-2 px-4 rounded-full hover:opacity-90 transition">
  Buy now 
</button>
   </div>

  </div>
))}
</div>

    </section>
  )
}

export default Shop
