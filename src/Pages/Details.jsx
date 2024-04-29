import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = () => {
    return (
        <div>
         <section className="py-6 dark:bg-violet-600 dark:text-gray-50">
	<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
		<h1 className="text-5xl font-bold leading-none text-center">Something totally different</h1>
        <img src="https://i.ibb.co/v1Ypqwj/photo-1531169628939-e84f860fa5d6.jpg" alt="" />
		<p className="pt-2 pb-8 text-xl font-medium text-center">Eum omnis itaque harum at quae sequi unde similique alias asperiores totam. Ex cumque maxime harum doloremque, tempore nam fugiat aspernatur rerum ipsa unde est modi commodi molestias maiores eveniet eius esse asperiores neque dicta ea quisquam? Excepturi sapiente officiis explicabo ab?</p>
		<NavLink to="/" className="px-8 py-3 text-lg font-semibold  bg-violet-300 w-full rounded-xl dark:bg-gray-100 dark:text-gray-900">Back To Home</NavLink>
	</div>
</section>
        </div>
    );
};

export default Details;