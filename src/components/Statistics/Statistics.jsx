// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Statistics.css'

import Lottie from "lottie-react";
import Chart from "../../assets/images/chart.json"
import Rechart from '../Rechart/Rechart';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Statistics = () => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      {/* rechart banner section start */}
      <div className='h-screen md:container md:mx-auto'>
      {/* banner section start */}
      <div className="grid md:grid-cols-2 grid-cols-1 md:items-center md:gap-20 md:h-screen pt-8 text-center md:text-left">
        <div>
          <p className='text-white md:text-5xl text-3xl'>This is<br></br>the new<br></br><span className='text-gray-400 md:font-semibold'>Job Portal</span></p>
          <p className='text-gray-500 md:my-4 text-xl'>Explore thousands of job opportunities with all the<br></br>information you need. Its your future. Come find it. Manage all<br></br>your job application from start to finish.</p>
          <button className='bg-gray-400 text-white py-2 px-4 rounded font-bold mt-1'>Click Here</button>
        </div>
        <div className='overflow-hidden'>
          <Lottie animationData={Chart} loop={true} />
        </div>
      </div>
      {/* banner section end */}
      </div>
      {/* rechart banner section end */}
      {/* rechart section start */}
      <Rechart></Rechart>
      {/* rechart section end */}
    </div>
  );
};

export default Statistics;