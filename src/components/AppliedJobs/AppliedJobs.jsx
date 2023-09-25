// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData, useNavigation } from 'react-router-dom';
import { getData, removersData, deleteAllData, } from '../../localstorage/localstorage';
import Item from '../Item/Item';
import Loading from './../Loading/Loading';

const AppliedJobs = () => {
  //my data
  const data = useLoaderData();
  const navigation = useNavigation();

  {navigation.state === 'loading' ? <Loading></Loading> : ''}
  //new data
  const [localData, setLocalData] = useState([]);
  
  useEffect(() => {
    //local Storage data
    const serverData = getData();
    const newData = [];
    //looping data
    for(let id in serverData){
      let findData = data.find(value => value.id === id)
      if(findData){
        findData.quantity = serverData[id];
        newData.push(findData);
      }
    }
    setLocalData(newData)
  },[data])


  //delete data
  const deleteData = (id) => {
    const newValue = localData.filter(value => value.id !== id);
    setLocalData(newValue)
    removersData(id)
  }

  //delete local data
  const deleteFullData = () => {
    setLocalData([]);
    deleteAllData()
  }

  //job type
  const jobType1 = (value) => {
    const data = localData.filter(v => v.job_time === value)
      setLocalData(data)
  }
  const jobType2 = (value) => {
    const data = localData.filter(v => v.job_time === value)
      setLocalData(data)
    
  }


  return (
    <div className='md:container md:mx-auto'>
      <div className='h-screen flex justify-center items-center text-center'>
      {/* description section start */}
        <div>
          <p className='text-white md:text-5xl text-3xl'>My Choice<br></br>Dream/Liked<br></br><span className='text-gray-400 md:font-semibold'>Job Portal</span></p>
          <p className='text-gray-500 md:my-4 text-xl py-2 md:py-0'>Work as a volunteer,Consider your finances,Popular career choices<br></br>School teacher,Professor,Flight attendant,Sales representative<br></br>Physical therapist,Engineer,Database administrator<br></br>registered nurse,nurse practitoner,pharmacist<br></br>pediatric physician</p>
          <button className='bg-gray-400 text-white py-2 md:px-4 px-2 rounded font-bold mt-1'>Click Here</button>
        </div>
      {/* description section end */}
      </div>
      {/* items section start */}
      <div>
        <div className='flex md:justify-end gap-5 justify-center mb-4 md:mb-0'>
        {
        localData.length > 0 ? (<span onClick={() => {jobType1('remote')}} className='bg-gray-400 text-white py-2 md:px-4 px-2  rounded text-xl font-bold'><button>Remote</button></span>) : ('')
        }
        {
        localData.length > 0 ? (<span onClick={() => {jobType2('full')}} className='bg-gray-400 text-white py-2 md:px-4 px-2 rounded text-xl font-bold'><button>Full Time</button></span>) : ('')
        }
        </div>
      
        <div className='grid grid-cols-1 mb-10 gap-10'>
          {
            localData.map((item) => <Item
            key={item.id}
            item={item}
            deleteData={deleteData}
            ></Item>)
          }
        </div>
      </div>
      {/* items section end */}
      {
        localData.length > 0 ? (<div className='text-center mt-6 mb-12'>
        <span onClick={deleteFullData} className='bg-gray-400 text-white py-2 md:px-4 px-2 rounded text-xl font-bold'>
          <button>Clear All</button>
        </span>
      </div>) : ('')
      }
    </div>
  );
};

export default AppliedJobs;