// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Details.css';

const Details = () => {
  return (
    <div className='md:container md:mx-auto'>
      {/* description section start */}
      <div className='h-screen'>
      {/* banner section start */}
      <div className="flex justify-center items-center md:h-screen md:pt-8 text-center">

        <div>
          <p className='text-white md:text-5xl'>16 types<br></br>of careers<br></br><span className='text-gray-400 md:font-bold'>Job Portal</span></p>
          <p className='text-gray-500 md:my-4 text-xl'><i>Business administration and management,Financial services,IT and computer science<br></br>Marketing and advertising,Environmental and agricultural,Science and mathematics<br></br>Building and construction,Art, craft and design,Hair and beauty,Education,Health care<br></br>Hospitality and tourism,Retail and customer service,Transport and logistics<br></br>Manufacturing,Law,Programming<br></br>Explore more articles</i></p>
          <button className='bg-gray-400 text-white md:py-2 md:px-4 rounded md:font-bold'>Click Here</button>
        </div>
        
      </div>
      {/* banner section end */}
      </div>
      {/* description section end */}
      {/* job details section start */}
      <div className='details grid grid-cols-1 md:flex  md:gap-10'>
        <div>
          <h1>hello</h1>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
      {/* job details section end */}
    </div>
  );
};

export default Details;