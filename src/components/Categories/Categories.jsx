// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Categories.css';
import Category from '../Category/Category';

const Categories = () => {
  //data store
  const [categories,setCategories] = useState([])
  //data loading
  useEffect(() => {
    fetch('categories.json')
    .then((response) => response.json())
    .then((data) => setCategories(data))
  },[])
  return (
    <div className='md:container md:mx-auto md:mt-8 md:mb-12'>
      {/* title section start */}
      <div className='text-center md:mb-10'>
        <div>
          <h1 className='text-white text-5xl'>Job Category List</h1>
          <p className='text-gray-400 text-lg md:pt-3'><i>Explore thousands of job opportunities with all the information you need. Its your future</i></p>
        </div>
      </div>
      {/* title section end */}
      {/* categories section start */}
      <div className='grid grid-cols-1 md:grid-cols-4 md:gap-8'>
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