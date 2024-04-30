import React, { useEffect, useState } from 'react';
import { TiWorld } from "react-icons/ti";
import 'swiper/css';

import Slider from './Slider';
import Marquee from 'react-fast-marquee';
import { Link, NavLink } from 'react-router-dom';

import { Typewriter , useTypewriter ,  Cursor} from 'react-simple-typewriter'


const Home = () => {
  

  const [location , setLoacation] = useState([])

    useEffect(() => {
        document.title = 'Lonely Planet';
        return () => {
          document.title = 'Title';
        };
      }, []);

      useEffect(()=>{
        fetch("http://localhost:5000/spot")
        .then(res => res.json())
        .then((data)=>{
           setLoacation(data)
        })
      },[])

      const newLocation = location.slice(0,6);
      const {text} = useTypewriter({
        words:['Tour' , 'Travel' , 'Honeymoon'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
      });

    return (
        <div>
         <div className=' mt-16 sm:mt-16 lg:mt-10 mb-10 '>
         <Marquee speed={300} className='flex'><h1 className='text-6xl font-bold flex '>L<TiWorld className="mt-1"/>nely Planet  -- L<TiWorld className="mt-1"/>ve travel? Disc<TiWorld className="mt-1"/>ver, plan and b<TiWorld className="mt-1"/><TiWorld className="mt-1"/>k y<TiWorld className="mt-1"/>ur perfect trip with expert advice, travel guides, destination inf<TiWorld className="mt-1"/>rmati<TiWorld className="mt-1"/>n and inspiration fr<TiWorld className="mt-1"/>m L<TiWorld className="mt-1"/>nely Planet.## </h1></Marquee>
           
         </div>
         <Slider></Slider>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

              {
                newLocation.map((nLocatin)=>(
                  <div key={nLocatin._id} className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                  <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                      <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">In: {nLocatin.seasonality}</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">Discount 30%</a>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <img src={nLocatin.photourl} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                      <div className="flex items-center text-xs">
                        <span>{nLocatin.country}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className='text-3xl font-bold animate-pulse'>{nLocatin.spot}</p>
                      <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600">{nLocatin.description}</h3>
                      </a>
                      <p className="leading-snug dark:text-gray-600">{nLocatin.location}</p>
                      <p className="leading-snug dark:text-gray-600">{nLocatin.cost}</p>
                      <p className="leading-snug dark:text-gray-600">Tourist visit per year :{nLocatin.year}</p>
                
                      <div>
                        <NavLink to={`/details/${nLocatin._id}`}  className='w-full bg-fuchsia-200 p py-3 px-32 mt-2 mb-2 rounded-2xl font-bold'>View Details</NavLink>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
                ))
                
              }
<div className='w-96 md:w-96 lg:w-full lg:ml-96  flex items-center justify-center'>
<NavLink to="/alltourist"><button className='bg-blue-500 px-6 py-3 rounded-2xl font-bold text-2xl w-full mb-5 mt-2'>Show All Tourist Spot </button></NavLink>
</div>
          
{/* --------------- */}

{/* ---------------- */}

            </div>
            <div>
            <div className='flex items-center  mb-20 justify-center'>
<span className='text-3xl flex items-center justify-center' style={{ color: 'red', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Travel far enough, you meet yourself.😎', 'Wherever you go becomes a part of you somehow', 'Life is either a daring adventure or nothing at all']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
</div>
<div className='flex items-center justify-center'>
<span className='text-3xl flex items-center justify-center' style={{ color: 'green', fontWeight: 'bold' }}>
      
          <Typewriter
            words={['Work, Travel, Save, Repeat','Vacation calories don’t count. Right?','Travel becomes a strategy for accumulating photographs.']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
</div>
<div className='flex items-center mt-20 mb-10 justify-center'>
<span className='text-3xl flex items-center justify-center' style={{ color: 'blue', fontWeight: 'bold' }}>
         
          <Typewriter
            words={['Travel🎈', 'Tour🎆', 'Chill👓' , 'Picnic😎']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
</div>
            </div>
{/* ------------------------------------------- */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-2 rounded-3xl mb-5 shadow-xl '>
  

   <Link to="/countrywise/Bangladesh">    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/R9pqgrs/photo-1692599338360-2ed390c060d9.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
				<p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Bangladesh</p>
			</div>
		</div>
	</div>
</div>       </Link>
    


   

<Link to="/countrywise/India">      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/mN8547z/photo-1524492412937-b28074a5d7da.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>India</p>
			</div>
		</div>
	</div>
</div>     </Link>
    



   

<Link to="/countrywise/Srilanka">      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/2Fd0Gw7/photo-1591351373936-3d5bf044b854.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Srilanka</p>
			</div>
		</div>
	</div>
</div>     </Link>
    

   

<Link to="/countrywise/Maldives">     <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/wwTnYHZ/photo-1504457047772-27faf1c00561.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
			<p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Maldives</p>
			</div>
		</div>
	</div>
</div>      </Link>
    

  

<Link to="/countrywise/Japan">     <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/THZs1My/photo-1526481280693-3bfa7568e0f3.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Japan</p>
			</div>
		</div>
	</div>
</div>      </Link>
       

   
    <Link to="/countrywise/Thailand">     <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/XJcv7F6/photo-1506665531195-3566af2b4dfa.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Thailand</p>
			</div>
		</div>
	</div>
</div>       </Link>
   

<Link to="/countrywise/Vietnam">      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/DW76PDs/premium-photo-1664303291529-8867054222f6.jpg
https://i.ibb.co/r5PxpXT/photo-1502602898657-3e91760cbb34.jpg
https://i.ibb.co/XJcv7F6/photo-1506665531195-3566af2b4dfa.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Vietnam</p>
			</div>
		</div>
	</div>
</div>     </Link>



<Link to="/countrywise/France">      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/r5PxpXT/photo-1502602898657-3e91760cbb34.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>France</p>
			</div>
		</div>
	</div>
</div>     </Link>


<Link to="/countrywise/China">      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/44tcCm9/photo-1508804052814-cd3ba865a116.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>China</p>
			</div>
		</div>
	</div>
</div>     </Link>
<Link to="/countrywise/Nepal">      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://i.ibb.co/44tcCm9/photo-1508804052814-cd3ba865a116.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			
			<div className="dark:text-gray-800">
      <p className='text-3xl text-black opacity-90 px-5 py-2 rounded-b-2xl bg-gray-300 font-bold'>Nepal</p>
			</div>
		</div>
	</div>
</div>     </Link>


  
</div>
{/* ------------------------------------------- */}

           
         
            
            
        </div>
    );
};

export default Home;