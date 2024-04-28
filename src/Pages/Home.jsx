import React, { useEffect } from 'react';
import { TiWorld } from "react-icons/ti";
import 'swiper/css';
import Gu from './Gu';
import Slider from './Slider';
import Marquee from 'react-fast-marquee';


const Home = () => {


    useEffect(() => {
        document.title = 'Lonely Planet';
        return () => {
          document.title = 'Title';
        };
      }, []);

    return (
        <div>
         <div className='mt-10 mb-10 '>
         <Marquee speed={300} className='flex'><h1 className='text-6xl font-bold flex '>L<TiWorld className="mt-1"/>nely Planet  -- L<TiWorld className="mt-1"/>ve travel? Disc<TiWorld className="mt-1"/>ver, plan and b<TiWorld className="mt-1"/><TiWorld className="mt-1"/>k y<TiWorld className="mt-1"/>ur perfect trip with expert advice, travel guides, destination inf<TiWorld className="mt-1"/>rmati<TiWorld className="mt-1"/>n and inspiration fr<TiWorld className="mt-1"/>m L<TiWorld className="mt-1"/>nely Planet.## </h1></Marquee>
           
         </div>
         <Slider></Slider>
            <div className='grid grid-cols-3 gap-2'>
            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
{/* --------------- */}
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
<div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
		</div>
		<a rel="noopener noreferrer" href="#">See All</a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
			</a>
			<p className="leading-snug dark:text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
		</div>
	</div>
</div>
{/* ---------------- */}
            </div>
         
            
            
        </div>
    );
};

export default Home;