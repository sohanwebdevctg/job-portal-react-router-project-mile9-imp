// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Category.css'
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

// eslint-disable-next-line react/prop-types
const Category = ({category}) => {
  const navigation = useNavigation();

  // eslint-disable-next-line react/prop-types
  const {logo,category_name,availability} = category;
  return (
    <div className='bg-gray-400 py-3 md:py-6 md:px-4 mx-3 md:mx-0 text-center md:text-left rounded shadow-lg shadow-blue-500'>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      {/* category section start */}
      <img className='shadow-md p-2 text-center md:text-left inline-block md:inline' src={logo}></img>
      <h1 className='md:text-xl py-1 md:font-bold '>{category_name}</h1>
      <p className='text-blue-700'><i>{availability}</i></p>
      {/* category section end */}
    </div>
  );
};

export default Category;