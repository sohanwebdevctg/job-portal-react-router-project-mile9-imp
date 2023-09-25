// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Root.css';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Loading from '../Loading/Loading';

const Root = () => {
  const navigation = useNavigation();

  
  return (
    <div className='bg-black'>
      {/* header section start */}
        <Header></Header>
      {/* header section end */}
      {/* main section start */}
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
        <Outlet></Outlet>
      {/* main section end */}
      {/* footer section start */}
        <Footer></Footer>
      {/* footer section end */}
    </div>
  );
};

export default Root;