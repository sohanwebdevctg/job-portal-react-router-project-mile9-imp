// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* categories section start */}
      <Categories></Categories>
      {/* categories section end */}
      {/* features section start */}
      <Features></Features>
      {/* features section end */}
    </div>
  );
};

export default Home;