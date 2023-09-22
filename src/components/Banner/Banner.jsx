// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Banner.css'

// eslint-disable-next-line react/prop-types
const Banner = ({children}) => {
  return (
    <div className='md:container md:mx-auto'>
    {children}
    </div>
  );
};

export default Banner;