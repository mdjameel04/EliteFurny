import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import { FaHome} from 'react-icons/fa'
import {MdRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'
import { EffectCoverflow,  } from 'swiper/modules'
import { assets } from '../assets/assets'

const About = () => {
   const Slide = [
    {id:1, Image:assets.furny1},{id:2, Image:assets.furny7},
    {id:3, Image:assets.furny2},{id:4, Image:assets.furny8},
    {id:5, Image:assets.furny3},{id:6, Image:assets.furny9},
    {id:7, Image:assets.furny4},{id:8, Image:assets.furny10},
    {id:9, Image:assets.furny5}, {id:10, Image:assets.furny6},
   
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
<button className='flex items-center gap-2 bg-gradient-to-l bg-pink-600 to-blue-400 rounded-2xl px-4 py-2 mt-4 font-medium cursor-pointer hover:opacity-95 transition'>
  <MdRestaurantMenu/>  Explore It
</button>
  </Link>
</div>
     </div>


{/* images */}

      <div className="w-full flex justify-center items-center py-10 bg-gray-900 mt-4 rounded-2xl ">
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          scale: 0.8,
          slideShadows: true,
        }}
        className="w-[90%] max-w-6xl"
      >
        {Slide.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[300px] !h-[400px] flex flex-col justify-end items-center relative"
          >
            <img
              src={item.Image}
              alt={item.Image}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

   <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-8 gap-8'>

   {/* left side */}
   
    <div className='md:w-1/2 text-center md:text-left  '>
   <h1 className='font-bold text-2xl md:text-3xl italic mb-3 leading-snug' > Where Style Meets Comfort — Designed for the Home You <span className='text-red-500'>Love</span> </h1>
  <p className='text-gray-800 text-sm md:text-base leading-relaxed'>  EliteFurny brings together elegant design and expert craftsmanship to deliver furniture that tells your story. Whether it’s a cozy sofa for your living room or a statement piece for your workspace, our creations add a touch of luxury and lasting comfort to every corner of your home.</p>

   <div className='flex justify-center md:justify-start gap-6 mt-6 '>
  
  <div>
    <h1 className='text-2xl font-bold text-gray-800'> 5k+</h1>
    <p> Satisfied Customer</p>
    </div>   
 <div>
    <h1 className='text-2xl font-bold text-gray-800'> 5k+</h1>
    <p> Unique Design</p>
    </div> 

    <div>
    <h1 className='text-2xl font-bold text-gray-800'> 50+</h1>
    <p> Expert Artisans</p>
    </div>   
   </div>  
   </div>
   
 

   {/* right side */}

<div className='md:w-1/2 flex justify-center'>
<img src={assets.furny1} alt="funry"  className='w-[90%] md:w-[350px] lg:w-[450px] rounded-2xl shadow-2xl object-cover '/>
</div>

   </div>

   <h2 className='text-2xl md:text-3xl text-center font-bold mt-8 underline decoration-red-500 underline-offset-4'> Why We Exist ? </h2>

<div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-16 mt-8 gap-8'>

{/* left side */}

<div className='w-1/2 flex justify-center'>
<img src={assets.furny2} alt="" className='w-[90%] md:w-[350px] lg:w-[450px] rounded-xl shadow-2xl object-cover ' />
</div>

{/* right */}

<div className='w-1/2 text-center md:text-left rounded-2xl bg-white/40 backdrop-blur-md  shadow-2xl p-6'>
<h3 className='text-2xl italic font-medium'> Crafted with purpose, Built for <span className='font-bold'>Life</span></h3>

<p className='text-sm text-gray-700 md:text-base leading-relaxed mt-2'> At <span className="font-semibold text-red-500">EliteFurny</span>, we exist to bring life into every home 
      through furniture that reflects beauty, comfort, and care. 
       Our mission isn’t just to design furniture — it’s to craft experiences 
      that make your space truly feel like <span className="italic">yours</span>: personal, welcoming, and timeless.</p>
</div>
</div>

  {/* about our customers */}
<div className='mt-8'>
   <h1 className='text-2xl md:text-3xl font-medium text-center'> What Our customers are saying</h1>
 <p className='text-sm text-gray-600 mt-2 text-center'> Real reviews from customers across the city</p>
</div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
    {/* Single Review */}
    <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center">
      <img 
        src={assets.customer1} 
        alt="Customer 1" 
        className="w-16 h-16 rounded-full mb-4 object-cover" 
      />
      <p className="text-gray-700 text-sm md:text-base mb-3">
        "EliteFurny transformed my living room! The quality and style are unmatched."
      </p>
      <h3 className="font-bold text-gray-800">Sarah K.</h3>
      <span className="text-yellow-400">★★★★★</span>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center ">
      <img 
        src={assets.customer2} 
        alt="Customer 2" 
        className="w-16 h-16 rounded-full mb-4 object-cover" 
      />
      <p className="text-gray-700 text-sm md:text-base mb-3">
        "Amazing craftsmanship. Every piece feels premium and cozy!"
      </p>
      <h3 className="font-bold text-gray-800">james</h3>
      <span className="text-yellow-400">★★★★★</span>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center">
      <img 
        src={assets.customer3} 
        alt="Customer 3" 
        className="w-16 h-16 rounded-full mb-4 object-cover" 
      />
      <p className="text-gray-700 text-sm md:text-base mb-3">
        "Fast delivery and beautiful design! I love my new furniture."
      </p>
      <h3 className="font-bold text-gray-800">Priya </h3>
      <span className="text-yellow-400">★★★★★</span>
    </div>

    <div className='bg-white p-6 rounded-2xl shadow-2xl  flex-col items-center text-center hidden md:flex'>
  <img 
        src={assets.customer1} 
        alt="Customer 3" 
        className="w-16 h-16 rounded-full mb-4 object-cover" 
      />
      <p className='text-gray-700 text-sm md:text-base mb-3'>“EliteFurny transformed my living space with elegance and comfort. The craftsmanship is amazing — every piece feels personal and unique.” </p>
      <h3 className='text-gray-800 font-bold'> Arjun mehtha</h3>
      <span className="text-yellow-400">★★★★</span>
    </div>

 <div className='bg-white p-6 rounded-2xl shadow-2xl  flex-col items-center text-center hidden md:flex '>
  <img 
        src={assets.customer1} 
        alt="Customer 3" 
        className="w-16 h-16 rounded-full mb-4 object-cover" 
      />
      <p className='text-gray-700 text-sm md:text-base mb-3'>“I love how every detail is thoughtfully made. My EliteFurny dining table has become the heart of my home — stylish, sturdy, and timeless.” </p>
      <h3 className='text-gray-800 font-bold'> venu</h3>
      <span className="text-yellow-400">★★★★</span>
    </div>
     <div className='bg-white p-6 rounded-2xl shadow-2xl  flex-col items-center text-center hidden md:flex'>
  <img 
        src={assets.customer1} 
        alt="Customer 3" 
        className="w-16 h-16 rounded-full mb-4 object-cover" 
      />
      <p className='text-gray-700 text-sm md:text-base mb-3'> “Exceptional quality and service! EliteFurny helped me pick the perfect sofa — it’s both modern and comfortable. Highly recommended!” </p>
      <h3 className='text-gray-800 font-bold'> sneha verma</h3>
      <span className="text-yellow-400">★★★★</span>
    </div>
  </div>
   
   <div className='bg-yellow-500 flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-16 mt-16 rounded-3xl shadow-lg lg:h-[350px]  h-[600px] sm:h-[630px] '>
  {/* left side */}
  <div className='flex-1 text-center md:text-left mb-8 md:mb-0'>
    <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-4 leading-snug'>
      Exclusive Design & Offers
    </h2>

    <p className='text-gray-700 text-sm sm:text-base md:text-lg mb-6 px-2 md:px-0'>
      Don’t miss out on exclusive collections, festive deals, and home décor inspiration — straight to your inbox.
    </p>

    {/* email form */}
    <form >
    <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3'>
      <input
        type='email'
        placeholder='Enter Your Email'
        className='px-4 py-2 w-full sm:w-64 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400'
        />
      <button
        type='submit'
        className='px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 mt-3 sm:mt-0'
        >
        Subscribe
      </button>
    </div>
        </form>
  </div>

  {/* right side */}
  <div className='flex-1 flex justify-center'>
    <img
      src={assets.promtion}
      alt='Promotion'
      className='w-[200px] sm:w-[250px] md:w-[300px] lg:w-[230px] object-cover rounded-2xl'
    />
  </div>

</div>
</section>
  )
}

export default About
