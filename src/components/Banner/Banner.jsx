// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Banner.css'
import Lottie from "lottie-react";
import JobPortal from "../../assets/images/jobPortal.json"

// eslint-disable-next-line react/prop-types
const Banner = () => {
  return (
    <div className='min-h-[calc(100vh-100px)] bg-black md:container md:mx-auto'>
      {/* banner section start */}
      <div className="grid md:grid-cols-2 grid-cols-1 md:items-center md:gap-20 md:h-100vh pt-8 text-center md:text-left">
        <div>
          <p className='text-white md:text-5xl text-3xl'>One Step<br></br>Close To Your<br></br><span className='text-gray-400 md:font-semibold'>Job Portal</span></p>
          <p className='text-gray-500 md:my-4 text-xl'>Explore thousands of job opportunities with all the<br></br>information you need. Its your future. Come find it. Manage all<br></br>your job application from start to finish.</p>
          <button className='bg-gray-400 text-white py-2 px-4 rounded font-bold mt-1'>Click Here</button>
        </div>
        <div className='overflow-hidden'>
          <Lottie animationData={JobPortal} loop={true} />
        </div>
      </div>
      {/* banner section end */}
    </div>
  );
};

export default Banner;