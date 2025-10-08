import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { FaHome} from 'react-icons/fa'
import {MdRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import { assets } from '../assets/assets'

const About = () => {
   const Slide = [
    {id:1, Image:assets.funry1},{id:7, Image:assets.funry7},
    {id:2, Image:assets.funry2},{id:8, Image:assets.funry8},
    {id:3, Image:assets.funry3},{id:9, Image:assets.funry9},
    {id:4, Image:assets.funry4},{id:10, Image:assets.funry10},
    {id:5, Image:assets.funry5},
    {id:6, Image:assets.funry6},
   ]
  return (
    <section className="bg-[bisque] p-4"   > 
      {/* heading */}
      <div className='mt-4 flex justify-center items-center gap-2 mb-4  ' >
        
          <FaHome size={20} color='gray'/>
        
        <h3 className='text-sm text-gray-500 font-bold text-center   italic '> Home |</h3>
     <h3 className='text-sm text-black font-bold text-center   italic underline-offset-4 decoration-2 underline '> About us</h3>
      </div>

     <div > 
      <h1 className='text-2xl text-gray-800 mt-6 font-medium text-center' > Bringing warmth, style, and handcrafted quality to every home. </h1>
      <p className="text-center text-gray-600 mt-4 text-sm">
   EliteFurny creates handcrafted furniture that combines style, comfort, and quality for every home.
</p>

<div className='flex items-center justify-center'>
  <Link to={'/shop'}>
<button className='flex items-center gap-2 bg-gradient-to-l bg-pink-600 to-blue-400 rounded-2xl px-4 py-2 mt-4 font-medium'>
  <MdRestaurantMenu/>  Explore It
</button>
  </Link>
</div>
     </div>


{/* images */}

   <div className="w-full flex justify-center items-center bg-gradient-to-b from-white to-bisque py-14">
  <Swiper
    modules={[EffectCoverflow, Autoplay]}
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    slidesPerView={3} // 👈 cleaner layout: left, center, right
    spaceBetween={-60} // 👈 overlaps for natural flow
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 2.5,
      scale: 0.9,
      slideShadows: false,
    }}
    className="w-[90%] max-w-6xl"
  >
    {Slide.map((item) => (
      <SwiperSlide
        key={item.id}
        className="!w-[320px] !h-[220px] flex justify-center items-center transition-all duration-500 ease-in-out"
      >
        <img
          src={item.Image}
          alt=""
          className="w-full h-full object-cover rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out hover:scale-105"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </section>
  )
}

export default About
