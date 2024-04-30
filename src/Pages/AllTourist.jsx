import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

import 'animate.css';

const AllTourist = () => {
    const spots = useLoaderData();
    const [sortOrder, setSortOrder] = useState('asc'); // State to track sort order

    // Function to toggle sort order when button clicked
    const toggleSortOrder = () => {
        setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    // Function to sort spots based on cost
    const sortSpots = () => {
        if (sortOrder === 'asc') {
            return [...spots].sort((a, b) => a.cost - b.cost);
        } else {
            return [...spots].sort((a, b) => b.cost - a.cost);
        }
    };

    return (
        <div className='mb-5'>
            <div className='mt-3 flex gap-28 justify-between px-60'>
             

                <button className="relative ml-48 font-bold inline-block px-4 py-2  group" onClick={toggleSortOrder}>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Lower Cost to Higher cost According to ---</span>
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 mb-5 rounded-2xl border  border-black'>
                {sortSpots().map(spot => (
                    <div key={spot.location} className="max-w-lg border border-x-black rounded-2xl  mb-3    p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
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
                                <div className="flex flex-col justify-start  items-start text-xs relative">
                                    <span className='text-lg font-bold'>Tourist Spot      :           --- {spot.spot}     </span>
                                    <span className='text-lg font-bold'>Country      :           --- {spot.country}     </span>
                                    <span className='text-lg font-bold'>Location     :           --- {spot.location}    </span>
                                    <span className='text-lg font-bold'>Average-Cost :           --- {spot.cost}        </span>
                                    <span className='text-lg font-bold'>Seasonality :            --- {spot.seasonality} </span>
                                    <span className='text-lg font-bold'>Total Visitors per year :--- {spot.year}        </span>
                                </div>
                                <div className='flex justify-between'>
                                    <NavLink to="/coupon" className="ml-24">
                                        <button className='bg-indigo-300 px-9 rounded-full py-2 text-sm bottom-2'>Add List <MdOutlineSystemUpdateAlt className='ml-3'/></button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTourist;
