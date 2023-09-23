// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Feature.css';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Feature = (props) => {
  const {id,comp_logo,job_title,comp_name,comp_location,salary,} = props.feature;
  return (
    <div className='border-2 border-gray-400 md:p-8 rounded hover:shadow-lg hover:shadow-blue-500 duration-300 hover:transform hover:translate-y-2'>
      {/* feature section start */}
        <img className='w-40 h-24' src={comp_logo}></img>
        <p className='text-white md:font-bold md:text-2xl md:mt-2'>{job_title}</p>
        <p className='text-blue-700 md:text-lg'>{comp_name}</p>
        <div className='md:my-3 flex md:gap-4'>
          <button className='text-white border-2 border-blue-500 md:py-2 md:px-4 md:text-xl rounded'>submit</button>
          <button className='text-white border-2 border-blue-500 md:py-2 md:px-4 md:text-xl rounded'>submit</button>
        </div>
        <div className='md:my-3 flex md:gap-4'>
          <p className='text-blue-700 flex gap-1 items-center'><MapPinIcon className="h-5 w-5 text-blue-700" /><i>{comp_location}</i></p>
          <p className='text-blue-700 flex gap-1 items-center'><CurrencyDollarIcon className="h-5 w-5 text-blue-700" /><i>{salary}</i></p>
        </div>
        <Link to={`/details/${id}`}>
          <button className='text-blue-500 bg-slate-200 md:py-2 md:px-4 md:text-lg md:font-bold rounded'>View Details</button>
        </Link>
      {/* feature section end */}
    </div>
  );
};

export default Feature;