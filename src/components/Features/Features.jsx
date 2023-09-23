// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './Features.css';
import { useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {

  //stores data
  const [features, setFeatures] = useState([])

  //loading data
  useEffect(() => {
    fetch('features.json')
    .then((response) => response.json())
    .then(data => setFeatures(data))
  },[])

  
  return (
    <div className='md:container md:mx-auto md:mt-8 md:mb-12'>
      {/* title section start */}
      <div className='text-center md:mb-10'>
        <div>
          <h1 className='text-white text-5xl'>Features Jobs</h1>
          <p className='text-gray-400 text-lg md:pt-3'><i>Explore thousands of job opportunities with all the information you need. Its your future</i></p>
        </div>
      </div>
      {/* title section end */}
      {/* features section start */}
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
        {
          features.slice(0,4).map((feature) => <Feature
          key={feature.id}
          feature={feature}
          ></Feature>)
        }
      </div>
      {/* features section end */}
    </div>
  );
};

export default Features;