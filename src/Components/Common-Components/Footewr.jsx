import React from 'react';

const Footewr = () => {
    return (
        <footer className="footer w-full min-h-[300px] p-10 bg-neutral text-neutral-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Heterogeneity.</a>
    <a className="link link-hover">Intangibility</a>
    <a className="link link-hover">Perishability</a>
    <a className="link link-hover">Seasonality</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Interdependence</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
    <a className="link link-hover">Membership policy</a>
  </nav>
    <div className='flex flex-col'>
    <h1 className='text-8xl font-bold underline'>Lonely </h1>
    <h1 className='text-8xl font-bold'> Planet</h1>
    </div>
</footer>
    );
};

export default Footewr;