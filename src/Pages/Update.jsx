import React from 'react';

const Update = () => {
    return (
        <div className='border  border-y-gray-600 rounded-full mt-10 mb-20'>
 <h1 className='text-6xl font-bold  mt-5 animate__animated animate__backInRight animate__infinite animate__slow mb-10'>Please Add Tourist Spot Where you Visited..!</h1>

                   <section className="p-6 bg-[#b4afa1] mb-24 px-3 rounded-3xl dark:bg-gray-00 dark:text-gray-900">

<form  noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
    <fieldset className="grid grid-cols-4 form-control gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
        <div className="space-y-2 col-span-full lg:col-span-1">
            <img className='rounded-3xl animate__animated animate-pulse  animate__delay-2s' src="https://images.unsplash.com/photo-1575413915641-884ed713ad3f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className="text-4xl font-bold animate-bounce">Lonley Planet helps to full fill your Dream</p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-md font-semibold">Image Url</label>
                <input id="firstname" type="url" name='photourl' placeholder="Image Url" className="w-full max-w-md h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            

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
                <input id="city" type="text" placeholder="Location" name='location' className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-md font-semibold">Description</label>
                <input id="state" type="text" name='description' placeholder="Description" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-md font-semibold">Average Cost</label>
                <input id="zip" type="text" name='cost' placeholder="Average  Cost" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-md font-semibold">Seasonality</label>
                <input id="zip" type="text" name='seasonality' placeholder="Seasonality" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-md font-semibold">Travel Time</label>
                <input id="zip" type="text" name='time' placeholder="Travel Time" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-md font-semibold">Visitors per Year</label>
                <input id="zip" type="text" name='year' placeholder="Visitors Per Year" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            
        </div>
        
    </fieldset>
   
    <input className='bg-blue-400  rounded-3xl ml-72 w-[900px] text-4xl font-bold h-16'
     type="submit" value="Submit Button" />
</form>
</section>
        </div>
    );
};

export default Update;