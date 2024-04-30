import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Countrywise = () => {

const [city , setCity] = useState([])    
const [countrys , setCountrys] = useState([])


const {country} = useParams();
 useEffect(()=>{
  fetch("http://localhost:5000/spot")
  .then(res => res.json())
  .then(data => {
    setCountrys(data);
    console.log(data);
  })
 },[])


useEffect(()=>{
     const filterData = countrys.filter((obj) => obj.country === country)
     if(filterData){
        setCity(filterData)
     }
}
,[city, countrys])



    return (
        <div className='grid grid-cols-3 mt-10 mb-10 gap-3'>
            {
                city.map(ct =>(
                    <div key={ct._id} className="card w-full shadow-xl ">
  <figure><img className='rounded-xl' src={ct.photourl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold underline">{ct.spot}</h2>
    <h2 className="card-title text-xl font-bold underline">{ct.country}</h2>
    <p>{ct.description}</p>
    <div className="card-actions justify-end">
      <button className=" px-10 text-lg"> Average-Cost:<span className='text-2xl font-bold animate-pulse underline'>{ct.cost}$</span>  </button>
    </div>
  </div>
</div>
                ))
            }
        </div>
    );
};

export default Countrywise;