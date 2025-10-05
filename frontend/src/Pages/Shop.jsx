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

  ]
  
  const categories =[
    {id:1, img: assets.chair, name: "chair", },
    {id:2, img: assets.table, name: "tables", }
  ]

  
  
  return (
    <div className='px-6 md:px-16 lg:px-24 py-2 bottom-0 top-0 bg-[#DADDD8] w-full '>
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

<h1 className='font-bold text-3xl mx-16 sm:text-2xl mt-8'> explore our furnituer</h1>
 
<div className='mt-8 w-full flex justify-center gap-16 '>
  {/* {categories.map((item)=>(
    <div key={item.id} className='relative flex  items-center justify-center ml-8' >
    
    <img src={item.img} alt={item.name} className='w-56 md:w-64 z-10 object-cover relative' />
    </div> */}
  {/* ))} */}
  <div>
  <img src={assets.chair} alt="" className='w-56 h-56 md:64 z-10 object-cover relative '/>
   <div className=" w-72 h-72 md:w-55 md:h-55 rounded-full -translate-y-11/12  absolute bg-[#d57f16]  hidden md:block"></div>
  <h1 className='font-bold text-2xl text-center mt-8 '>Modren tables</h1>
  </div>
  <div>
  <img src={assets.table} alt="" className='w-56 h-56 md:64 z-10 object-cover relative mt-20  '/>   <h1 className='font-bold text-2xl text-center '>Classic chair</h1>

  </div>
</div> 




    </div>
  )
}

export default Shop
