// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Feature.css';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Feature = (props) => {
  // eslint-disable-next-line react/prop-types
  const {id,comp_logo,job_title,comp_name,comp_location,salary} = props.feature;

  return (
    <div className='border-2 border-gray-400 md:p-8 p-4 mx-2 md:mx-0 rounded hover:shadow-lg hover:shadow-blue-500 duration-300 hover:transform hover:-translate-y-2'>
      {/* feature section start */}
        <img className='md:w-40 md:h-24' src={comp_logo}></img>
        <p className='text-white font-bold text-2xl mt-2'>{job_title}</p>
        <p className='text-blue-700 text-lg'>{comp_name}</p>
        <div className='my-2 flex gap-4'>
          <button className='text-white border-2 border-blue-500 py-2 md:px-4 px-2 md:text-xl rounded'>Remote</button>
          <button className='text-white border-2 border-blue-500 py-2 md:px-4 px-2 md:text-xl rounded'>Full Time</button>
        </div>
        <div className='my-3 md:flex md:gap-4'>
          <p className='text-blue-700 flex gap-1 items-center'><MapPinIcon className="h-5 w-5 text-blue-700" /><i>{comp_location}</i></p>
          <p className='text-blue-700 flex gap-1 items-center'><CurrencyDollarIcon className="h-5 w-5 text-blue-700" /><i>{salary}</i></p>
        </div>
        {/* // eslint-disable-next-line react/prop-types */}
        <Link to={`/details/${id}`} className='text-blue-500 bg-slate-200 py-2 md:px-4 px-2 text-lg font-bold rounded'>View Details</Link>
      {/* feature section end */}
    </div>
  );
};

export default Feature;