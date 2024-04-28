import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const AllTourist = () => {

const spots = useLoaderData();

    return (
        <div className='mb-5'>
           <div className='grid grid-cols-3 gap-3 mt-5 mb-5 rounded-2xl border border-black'>
            {
                spots.map(spot => (
                    <div key={spot.location} className="max-w-lg border border-x-black rounded-2xl  mb-3   p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800 underline font-bold text-2xl">Tourist  - spot</a>
                        </div>
                       
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={spot.photourl} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="space-y-2">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-3xl animate-bounce mt-2 text-[#9b59b6] underline font-bold dark:text-violet-600">{spot.description}</h3>
                            </a>
                            
                        </div>
                
                            <div className="flex flex-col justify-start  items-start text-xs">
                                <span className='text-lg font-bold'>Country      :           --- {spot.country}     </span>
                                <span className='text-lg font-bold'>Location     :           --- {spot.location}    </span>
                                <span className='text-lg font-bold'>Average-Cost :           --- {spot.cost}        </span>
                                <span className='text-lg font-bold'>Seasonality :            --- {spot.seasonality} </span>
                                <span className='text-lg font-bold'>Total Visitors per year :--- {spot.year}        </span>
                            </div>
                     <div className='flex justify-between'>
                     <button className='bg-indigo-300 px-9 rounded-full py-2 text-sm'>Update <MdOutlineSystemUpdateAlt className='ml-3'/></button>
                     <button className='bg-indigo-500 px-10 rounded-full py-2 text-sm'>Delete <AiFillDelete className='ml-3'/></button>
                     </div>
                        </div>
                        
                    </div>
                </div>
                ))
            }
      
           </div>
        </div>
    );
};

export default AllTourist;