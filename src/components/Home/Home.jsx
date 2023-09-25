// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Home.css';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import Feature from './../Feature/Feature';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Home = () => {
  const features = useLoaderData();
  const navigation = useNavigation();

  {navigation.state === 'loading' ? <Loading></Loading> : ''}

  //showAll && showLess Btn
  const [show,setShow] = useState(false);

  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* categories section start */}
      <Categories></Categories>
      {/* categories section end */}
      {/* features section start */}
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
          features.slice(0,show ? 10 : 4).map((feature) => <Feature
          key={feature.id}
          feature={feature}
          ></Feature>)
        }
      </div>
      {/* features section end */}
      {/* show Btn start */}
      <div className='text-center md:mt-12 md:mb-6'>
      {
        show ? (<span className='bg-gray-400 text-white md:p-3 rounded md:text-xl md:font-bold' onClick={() => setShow(false)}><button>show Less</button></span>) : (<span className="bg-gray-400 text-white md:p-3 rounded md:text-xl md:font-bold" onClick={() => setShow(true)}><button>show All</button></span>)
      }
      </div>
      {/* show Btn end */}
      </div>
      {/* features section end */}
    </div>
  );
};

export default Home;