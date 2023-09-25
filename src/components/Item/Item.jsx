// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Item.css'
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link, useNavigation} from 'react-router-dom';
import Loading from '../Loading/Loading';

// eslint-disable-next-line react/prop-types
const Item = ({item,deleteData}) => {
  const navigation = useNavigation();

  {navigation.state === 'loading' ? <Loading></Loading> : ''}

  // eslint-disable-next-line react/prop-types
  const {id,comp_logo,comp_name,job_title,comp_location,salary,job_type,quantity} = item;
  return (
    <div className='border-2 border-gray-600 md:my-5 md:p-10 p-3 md:flex md:items-center md:gap-10  mx-2'>
      <div>
        <img className='md:w-[300px] md:h-[220px] w-full h-full' src={comp_logo}></img>
      </div>
      <div className='md:flex md:justify-between md:items-center w-full my-3 md:my-0'>
        <div>
          <h1 className='text-blue-500 md:text-3xl md:font-bold'><i>{comp_name}</i></h1>
          <p className='text-slate-300 md:text-xl md:my-2'><span className='text-blue-500'>Job Title: </span><i>{job_title}</i></p>
          <p className='text-slate-300 md:text-xl md:my-2'><span className='text-blue-500'>Job Type: </span><i>{job_type}</i></p>
          <p className='text-slate-300 md:text-xl md:my-2'><span className='text-blue-500'>Job Quantity: </span><i>{quantity}</i></p>
          <div className='md:flex items-center gap-3'>
            <span className='text-white flex gap-1 items-center'><MapPinIcon className="h-5 w-5 text-blue-500" />{comp_location}</span>
            <span className='text-white flex gap-1 items-center'><CurrencyDollarIcon className="h-5 w-5 text-blue-500" />{salary}</span>
          </div>
          <button onClick={() => {deleteData(id)}} className="bg-blue-500 text-slate-200 py-1 md:px-4 px-2 text-base font-semibold rounded mt-2">Remove</button>
        </div>
        <div className='mt-2 md:mt-0'>
          <Link to={`/details/${id}`}>
            <button className="text-blue-500 bg-slate-200 py-2 md:px-4 px-2 md:mx-2 text-lg font-bold rounded">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;