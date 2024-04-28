import React, { useEffect } from 'react';
import 'animate.css';

const Addspot = () => {
    useEffect(() => {
        document.title = 'Add Plan';
        return () => {
          document.title = 'Title';
        };
      }, []);
    return (
        <div className='border  border-y-gray-600 rounded-full mt-10 mb-20'>
            <h1 className='text-6xl font-bold  mt-5 animate__animated animate__backInRight animate__infinite animate__slow mb-10'>Please Add Tourist Spot Where you Visited..!</h1>
               {/* ------------------- */}
               <section className="p-6 bg-[#eccc68] mb-24 px-3 rounded-3xl dark:bg-gray-00 dark:text-gray-900">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<img className='rounded-3xl animate__animated animate-pulse  animate__delay-2s' src="https://images.unsplash.com/photo-1567564967039-a5839aa2d89c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
				<p className="text-4xl font-bold animate-bounce">Lonley Planet helps to full fill your Dream</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="firstname" className="text-md font-semibold">Image Url</label>
					<input id="firstname" type="url" name='photourl' placeholder="Image Url" className="w-full max-w-md h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				{/* <div className="col-span-full sm:col-span-3">
					<label htmlFor="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div> */}

                {/*   all name => =>  photourl , spot , country ,  location , description ,  cost , seasonality ,  time , year        */}


				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-md font-semibold">Tourist Spot Name</label>
					<input id="email" type="text" name='spot' placeholder="Spot Name" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="address" className="text-md font-semibold">Visited Country Name</label>
					<input id="address" type="text" name='country' placeholder="Country" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="city" className="text-md font-semibold">Location</label>
					<input id="city" type="text" placeholder="" name='location' className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="state" className="text-md font-semibold">Description</label>
					<input id="state" type="text" name='description' placeholder="" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-md font-semibold">Average Cost</label>
					<input id="zip" type="text" name='cost' placeholder="" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-md font-semibold">Seasonality</label>
					<input id="zip" type="text" name='seasonality' placeholder="" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-md font-semibold">Travel Time</label>
					<input id="zip" type="text" name='time' placeholder="" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-md font-semibold">Visitors per Year</label>
					<input id="zip" type="text" name='year' placeholder="" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
			</div>
		</fieldset>
		{/* <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">Website</label>
					<input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">Photo</label>
					<div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
					</div>
				</div>
			</div>
		</fieldset> */}
	</form>
</section>
               {/* --------------------- */}
        </div>
    );
};

export default Addspot;