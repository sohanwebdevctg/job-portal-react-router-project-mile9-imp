// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Root.css';
import { Outlet } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Root = () => {
  return (
    <div>
      {/* header section start */}
        <Header></Header>
      {/* header section end */}
      {/* main section start */}
        <Outlet></Outlet>
      {/* main section end */}
      {/* footer section start */}
        <Footer></Footer>
      {/* footer section end */}
    </div>
  );
};

export default Root;