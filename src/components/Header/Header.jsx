// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';


const Header = () => {
  return (
    <>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* banner section start */}
      <div>
        <Banner></Banner>
      </div>
      {/* banner section end */}
    </>
  );
};

export default Header;