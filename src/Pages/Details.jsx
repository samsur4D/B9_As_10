import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Marquee from "react-fast-marquee";
const Details = () => {
const {id} = useParams()
const [details , setDetails] = useState([])

useEffect(()=>{
    fetch("http://localhost:5000/spot")
    .then(res => res.json())
    .then(data =>{
        setDetails(data);
    })
    
},[])

// const idTo = parent(id)
const singleData = details.find(detail => detail._id === id)
console.log(singleData);

    return (
        <div>
             <div>
                 {
                  singleData && (
                
                    <div>
                          <div className='relative  '>
                            <img className='w-full h-[650px]' src={singleData.photourl} alt="" />
                          </div>
                          <div className='absolute flex flex-col items-center justify-center top-56  px-10'>
                              <p className='text-7xl text-white bg-black opacity-60 animate-pulse     font-bold'>Location :{singleData.location}</p>
                              <p className='text-7xl text-white bg-black opacity-60 animate-pulse     font-bold'>Country :{singleData.country}</p>
                              <p className='text-7xl text-white bg-black opacity-60 animate-pulse     font-bold'>Seasonality:{singleData.seasonality}</p>
                              <p className='text-7xl text-white bg-black opacity-60 animate-pulse     font-bold'>Average-Cost :{singleData.cost}</p>
                              <p className='text-7xl text-white bg-black opacity-60 animate-pulse     font-bold'>Travel-Time :{singleData.time}</p>
                              <p className='text-7xl text-white bg-black opacity-60 animate-pulse     font-bold'>To.Visitor Per Year-{singleData.year}</p>
                          </div>
                     <div>
                       <Marquee speed={300}> <section className='flex gap-5'>
                        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-200px' src="https://i.ibb.co/pWfmJnY/3-980x525px-EMP-EMQ-COVER.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Discount In To Choose Your Coupon</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary flex items-center mr-24">Collect</button>
    </div>
  </div>
</div>
                        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-200px' src="https://i.ibb.co/GkHy0SC/images-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Discount In To Choose Your Coupon</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary flex items-center mr-24">Collect</button>
    </div>
  </div>
</div>
                        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-200px' src="https://i.ibb.co/9ws4XsY/images.jpg
https://i.ibb.co/pWfmJnY/3-980x525px-EMP-EMQ-COVER.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Discount In To Choose Your Coupon</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary flex items-center mr-24">Collect</button>
    </div>
  </div>
</div>
                        </section></Marquee>
                     </div>
                    </div>

                    
                   
                  )
                 }
             </div>
        </div>
    );
};

export default Details;