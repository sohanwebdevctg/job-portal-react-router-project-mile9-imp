// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Category.css'
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Category = ({category}) => {
  const navigation = useNavigation();

  // eslint-disable-next-line react/prop-types
  const {logo,category_name,availability} = category;
  return (
    <div className='bg-gray-400 md:p-6 rounded shadow-lg shadow-blue-500'>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      {/* category section start */}
      <img className='shadow-md p-2' src={logo}></img>
      <h1 className='md:text-xl py-1 md:font-bold '>{category_name}</h1>
      <p className='text-blue-700'><i>{availability}</i></p>
      {/* category section end */}
    </div>
  );
};

export default Category;