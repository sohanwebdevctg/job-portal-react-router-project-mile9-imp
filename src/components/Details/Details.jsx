// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Details.css'
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const detail = useLoaderData()
  console.log(detail)
  return (
    <div>
      
    </div>
  );
};

export default Details;