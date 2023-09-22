// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Rechart.css';
import {ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Scatter} from 'recharts';

const Rechart = () => {
  // chart data
  const data = [
    {name: 'BBA',uv: 590,pv: 800,amt: 1400,cnt: 490,},
    {name: 'BSC',uv: 868,pv: 967,amt: 1506,cnt: 590,},
    {name: 'MBBS',uv: 1397,pv: 1098,amt: 989,cnt: 350,},
    {name: 'LAW',uv: 1480,pv: 1200,amt: 1228,cnt: 480,},
    {name: 'ISSB E',uv: 1520,pv: 1108,amt: 1100,cnt: 460,},
    {name: 'BCS',uv: 1400,pv: 680,amt: 1700,cnt: 380,},
  ];

  return (
    <div className='md:container md:mx-auto md:mt-8 md:mb-12'>
      {/* title section start */}
      <div className='text-center md:mb-10'>
        <div>
          <h1 className='text-white text-5xl'>Rechart Views</h1>
          <p className='text-gray-400 text-lg md:pt-3'><i>Explore thousands of job opportunities with all the information you need. Its your future</i></p>
        </div>
      </div>
      {/* title section end */}
      {/* chart section start */}
      <div className='grid grid-cols-1'>
        {/* desktop chart start */}
        <div className='hidden md:block'>
        <ComposedChart
          width={1200}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
        </div>
        {/* desktop chart end */}
        {/* mobile chart start */}
        <div className='md:hidden'>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
        </div>
        {/* mobile chart end */}
      </div>
      {/* chart section end */}
    </div>
  );
};

export default Rechart;