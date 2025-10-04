import React from 'react'
import { assets } from '../assets/assets'
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
    <div className='px-6 md:px-16 lg:px-24 py-12 bottom-0 top-0 '>
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

 
<div className='mt-8 w-full flex '>
  {categories.map((item)=>(
    <div key={item.id} className='relative flex  items-center justify-center ml-8' >
    
    <img src={item.img} alt={item.name} className='w-56 md:w-64 z-10 object-cover relative' />
    </div>
  ))}
</div>



    </div>
  )
}

export default Shop
