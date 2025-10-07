import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { FaHome} from 'react-icons/fa'
import {MdRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

const About = () => {
   const images = [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600",
    "https://images.unsplash.com/photo-1528697203043-733dafdaa316?q=80&w=600",
    "https://images.unsplash.com/photo-1528697203043-733dafdaa316?q=80&w=600",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600",
  ];
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

<div className="w-full flex justify-center items-center bg-white py-10">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true} // 🔁 Makes it circular
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          scale: 0.9,
          slideShadows: false,
        }}
        className="w-[90%] max-w-5xl"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-[280px] !h-[200px] flex justify-center items-center"
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>



    </section>
  )
}

export default About
