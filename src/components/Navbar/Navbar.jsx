// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-blue-700'>
      {/* desktop section start */}
      <nav className='container mx-auto flex justify-between items-center h-20'>
        <div>
          <h1 className='font-extrabold text-2xl'><i>JobPortal</i></h1>
        </div>
        <div className='flex gap-10'>
          <NavLink to="/" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Home</NavLink>
          <NavLink to="/appliedJobs" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Applied Jobs</NavLink>
          <NavLink to="/statistics" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Statistics</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Blog</NavLink>
        </div>
        <button className='bg-gray-400 text-white py-2 px-4 rounded font-bold'>Applying</button>
      </nav>
      {/* desktop section end */}
    </div>
  );
};

export default Navbar;