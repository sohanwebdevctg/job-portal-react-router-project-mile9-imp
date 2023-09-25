// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Details.css';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import { addData } from '../../localstorage/localstorage';
import Loading from '../Loading/Loading';


const Details = () => {
  const navigation = useNavigation();

  
  //fifth set single data
  const [datas,setDatas] = useState({})
  // first get id
  const {id} = useParams();
  //second get data
  const data = useLoaderData();
  
  //third find out data
  useEffect(() => {
    const value = data.find(v => v.id === id);
    //set datas in useState
    return setDatas(value)
  },[data,id])

  //add localStorage
  const localStorage = (id) => {
    alert('added data')
    addData(id);
  }


  return (
    <div className='md:container md:mx-auto'>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      <div className='md:h-screen flex justify-center items-center text-center'>
      {/* description section start */}
        <div>
          <p className='text-white md:text-5xl'>One Time<br></br>Explore careers<br></br><span className='text-gray-400 md:font-semibold'>Job Portal</span></p>
          <p className='text-gray-500 md:my-4 md:text-xl'>Administration, Business and management,Alternative therapies,Animals, land and environment<br></br>Computing and ICT,Construction and building,Design, arts and crafts,Education and training<br></br>Engineering,Facilities and property services,Financial services,Garage services,Healthcare<br></br>Hairdressing and beauty,Heritage, culture and libraries,Hospitality, catering and tourism<br></br>Languages,Legal and court services,Manufacturing and production,Performing arts and media<br></br>Print and publishing, marketing and advertising,Retail and customer services,Science, <br></br>mathematics and statistics,Security, uniformed and protective services,Social sciences and religion<br></br>Social work and caring services,Sport and leisure,Transport, distribution and logistics</p>
          <button className='bg-gray-400 text-white md:py-2 md:px-4 rounded md:font-bold'>Click Here</button>
        </div>
      {/* description section end */}
      </div>
      {/* details section start */}
      <div className='md:flex justify-around md:mb-20 md:mt-5'>
        <div className='md:px-5'>
          <p className='text-slate-300 md:text-lg md:mb-4'><span className='text-blue-600 md:font-bold'>Job Description:</span> {datas.job_description}</p>
          <p className='text-slate-300 md:text-lg md:mb-4'><span className='text-blue-600 md:font-bold'>Job Responsibility:</span> {datas.job_responsibility}</p>
          <p className='text-slate-300 md:text-lg md:mb-4'><span className='text-blue-600 md:font-bold'>Educational Requirement:</span> {datas.educational_requirements}</p>
          <p className='text-slate-300 md:text-lg md:mb-4'><span className='text-blue-600 md:font-bold'>Experiences:</span> {datas.experiences}</p>
        </div>
        <div className='bg-gray-400 md:w-[1000px] md:p-4 rounded'>
          <h1 className='md:text-2xl md:font-bold text-blue-800'>Job Details</h1>
          <hr className='text-white md:my-2'></hr>
          <div className='md:my-1'>
            <p className='md:text-xl text-blue-500 mb:my-1'>Salary: <span className='text-slate-200'>{datas.salary}</span></p>
            <p className='md:text-xl text-blue-500 mb:my-1'>Job Title: <span className='text-slate-200'>{datas.job_type}</span></p>
          </div>
          <h1 className='md:text-2xl md:font-bold text-blue-800'>Contact Information</h1>
          <hr className='text-white md:my-2'></hr>
          <div className='md:my-1'>
            <p className='md:text-xl text-blue-500 mb:my-1'>Phone: <span className='text-slate-200'>{datas.phone}</span></p>
            <p className='md:text-xl text-blue-500 mb:my-1'>Email: <span className='text-slate-200'>{datas.email}</span></p>
            <p className='md:text-xl text-blue-500 mb:my-1'>Address: <span className='text-slate-200'>{datas.address}</span></p>
            <button onClick={() => {localStorage(datas.id)}} className='bg-blue-800 md:mt-4 text-center w-full md:p-2 text-slate-300 md:font-bold hover:bg-black duration-500'>Apply Job</button>
          </div>
        </div>
      </div>
      {/* details section end */}
      <div>

      </div>
    </div>
  );
};

export default Details;