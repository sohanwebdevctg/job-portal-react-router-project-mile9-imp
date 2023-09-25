// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Categories.css';
import Category from '../Category/Category';
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Categories = () => {
  //data store
  const [categories,setCategories] = useState([])
  const navigation = useNavigation();

  {navigation.state === 'loading' ? <Loading></Loading> : ''}
  //data loading
  useEffect(() => {
    fetch('categories.json')
    .then((response) => response.json())
    .then((data) => setCategories(data))
  },[])
  return (
    <div className='md:container md:mx-auto md:mt-8 md:mb-12'>
      {/* title section start */}
      <div className='text-center mb-10'>
        <div>
          <h1 className='text-white md:text-5xl text-3xl'>Job Category List</h1>
          <p className='text-gray-400 text-lg pt-3'><i>Explore thousands of job opportunities with all the information you need. Its your future</i></p>
        </div>
      </div>
      {/* title section end */}
      {/* categories section start */}
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 justify-center'>
        {
          categories.map((category) => <Category
          key={category.id}
          category={category}
          ></Category>)
        }
      </div>
      {/* categories section end */}
    </div>
  );
};

export default Categories;