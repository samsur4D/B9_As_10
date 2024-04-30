import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
          <div className='relative max-w-[1200px] lg:w-full'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        <SwiperSlide>   <div className='relative'>
                                <div className='relative'>
                                <img src="https://i.ibb.co/vBTDwXB/photo-1465403157034-1d5e05cc2ac0.jpg" alt="" />
                                </div>

                                <div className='absolute grid grid-cols-1 md:grid-cols-1   top-52 lg:left-60 bg-opacity-85 opacity-75'>
                                  <div className='animate-pulse'>
                                  <h1 className='text-6xl lg:text-9xl  text-white font-bold'>ADVENTURE </h1>
                                  <h1 className='text-6xl lg:text-9xl text-yellow-500 font-bold '>F!ND US</h1>
                                  </div>
                                  <div>
                                  <rect x="11" y="7" width="24" height="24" rx="2" fill="#fff"></rect>
                                  </div>
                                </div>

                       </div>
          </SwiperSlide>
          {/*     */}
                   <SwiperSlide>
                        <div className='relative'>
                              <div className='relative'>
                              <img src="https://i.ibb.co/B6rS3WR/photo-1470071459604-3b5ec3a7fe05.jpg" alt="" />
                              </div>
                              <div className='absolute grid grid-cols-1 md:grid-cols-1   top-52 lg:left-60 bg-opacity-85 opacity-75'>
                                   <div className='animate-pulse'>
                                   <h1 className='text-5xl lg:text-9xl text-white font-bold'>SLOW</h1>
                                  <h1 className='text-5xl  lg:text-9xl text-yellow-500 font-bold '>TRAVEL LIFE</h1>
                                   </div>
                              </div>
                     
                        </div>
                  </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/R7KWnNN/photo-1496957619354-b2a745278046.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/yfK9Wcq/photo-1502472584811-0a2f2feb8968.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/zmLXH6g/photo-1508739773434-c26b3d09e071.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/fkFsfzd/photo-1509565840034-3c385bbe6451.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Qb8W9Ts/photo-1518623489648-a173ef7824f3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/K2gmDDy/photo-1535320404287-416e2c6d2b41.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/yk70TsJ/photo-1536599018102-9f803c140fc1.jpg" alt="" /></SwiperSlide>
      </Swiper>
      </div>
      {/* <div className='absolute  left-20 -right-5'>
        <h2 className=' text-9xl  font-bold '>Slow</h2>
        <h2 className='t text-9xl font-bold '>Travel</h2>
      </div> */}
    </>
  );
}
