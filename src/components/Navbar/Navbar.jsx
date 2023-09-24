// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showBtn, setShowBtn] = useState(false)
  return (
    <div>
      {/* desktop section start */}
      <div className='md:fixed md:top-0 md:z-20 md:w-full hidden md:flex bg-blue-700'>
        <nav className='container mx-auto flex justify-between items-center h-20'>
          <div>
            <NavLink to="/">
            <h1 className='text-slate-200 font-extrabold text-2xl'><i>JobPortal</i></h1>
            </NavLink>
          </div>
          <div className='flex gap-10'>
            <NavLink to="/" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Home</NavLink>
            <NavLink to="/appliedJobs" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Applied Jobs</NavLink>
            <NavLink to="/statistics" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Statistics</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Blog</NavLink>
          </div>
          <button className='bg-gray-400 text-white py-2 px-4 rounded font-bold'>Applying</button>
        </nav>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className='bg-blue-700'>
        <nav className='flex justify-between items-center h-20'>
          <div>
              <NavLink to="/">
              <h1 className='text-slate-300 font-bold text-lg'><i>JobPortal</i></h1>
              </NavLink>
          </div>
          <div>
            {
              showBtn ? (<span onClick={() => setShowBtn(false)} className='text-white font-semibold'>hide</span>) : (<span onClick={() => setShowBtn(true)}className='text-white font-semibold'>show</span>)
            }
          </div>
        </nav>
        <div className={`absolute w-full ${showBtn ? 'top-16' : '-top-48'} duration-700 bg-blue-700`}>
            <NavLink to="/" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Home</NavLink>
            <NavLink to="/appliedJobs" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Applied Jobs</NavLink>
            <NavLink to="/statistics" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Statistics</NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? 'text-gray-400 font-semibold' : 'text-white font-semibold'}>Blog</NavLink>
        </div>
      </div>
      {/* mobile section end */}
    </div>
  );
};

export default Navbar;