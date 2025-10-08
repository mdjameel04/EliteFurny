import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { FaHome} from 'react-icons/fa'
import {MdRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'
import { EffectCoverflow, Autoplay } from 'swiper/modules'

const About = () => {
   const images = [
      "https://images.unsplash.com/photo-1528697203043-733dafdaa316?q=80&w=600",
  "https://images.unsplash.com/photo-1564758866811-28b4b59d7e6b?q=80&w=600",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600",
  "https://images.unsplash.com/photo-1582582494700-1c1c98ff8a58?q=80&w=600",
  "https://images.unsplash.com/photo-1604014217032-3b3e6e8c0b1d?q=80&w=600",
  "https://images.unsplash.com/photo-1598300054796-02b448d3542a?q=80&w=600",
  "https://images.unsplash.com/photo-1616627987786-1e512e9cf138?q=80&w=600",
  "https://images.unsplash.com/photo-1582719478149-123eeb3a3bfb?q=80&w=600",
  "https://images.unsplash.com/photo-1605902711622-cfb43c443e92?q=80&w=600",
  "https://images.unsplash.com/photo-1616627346103-fc2b4f26a0b5?q=80&w=600",
  "https://images.unsplash.com/photo-1602524207463-1b4decd9e3e1?q=80&w=600",
  "https://images.unsplash.com/photo-1616627410168-9a5f37e0576b?q=80&w=600",
  "https://images.unsplash.com/photo-1602524207446-8fdbf27b43d2?q=80&w=600",
  "https://images.unsplash.com/photo-1616627410234-cbf048bfa6e8?q=80&w=600",
  "https://images.unsplash.com/photo-1602524207401-b39e21b3e0fa?q=80&w=600"
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




    </section>
  )
}

export default About
