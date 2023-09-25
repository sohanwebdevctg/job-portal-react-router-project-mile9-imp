// eslint-disable-next-line no-unused-vars
import React from 'react';
import Lottie from "lottie-react";
import BlogChart from "../../assets/images/blog.json"
import { useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Blog = () => {
  const navigation = useNavigation();

  
  return (
    <div className='md:container md:mx-auto'>
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      {/* blog section start */}
      <div className='h-100vh  md:pt-20 md:pb-5'>
        <div className="grid md:grid-cols-2 grid-cols-1 md:items-center md:gap-20 md:h-100vh md:pt-8">
          <div>
            <p className='text-white md:text-5xl'>Blog<br></br>Items & Them<br></br><span className='text-gray-400 md:font-semibold'>Job Portal</span></p>
            <p className='text-gray-500 md:my-4 text-xl'>Explore thousands of job opportunities with all the<br></br>information you need. Its your future. Come find it. Manage all<br></br>your job application from start to finish.</p>
            <button className='bg-gray-400 text-white md:py-2 md:px-4 rounded md:font-bold'>Click Here</button>
          </div>
          <div className='overflow-hidden'>
            <Lottie animationData={BlogChart} loop={true} />
          </div>
        </div>
      </div>
      {/* blog section end */}
      {/* details section start */}
      <div className='container mx-auto text-center md:py-10'>
        {/* title section start */}
        <div className='grid grid-cols-1 py-2 md:py-5'>
        <h1 className='text-white text-5xl'>Job Category List</h1>
          <p className='text-gray-400 text-lg md:pt-3'><i>Explore thousands of job opportunities with all the information you need. Its your future</i></p>
        </div>
        {/* title section end */}
        {/* description section start */}
        <div className='grid grid-cols-1 md:grid-cols-2 px-2 md:px-0 py-4 md:py-5 gap-6 md:text-left text-center'>
          {/* left description section start */}
          <div>
            <div className='mt-2 md:mt-0'>
              <h2 className='text-blue-500 text-lg md:text-2xl font-bold'>Books are unique portable magic</h2>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>Space,the final frontier. These are the voyages of the Starship Enterprise.Its<br></br>five-year mission to explore strange new worlds.</p>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>Many say exploration is part of our destiny, but it is actually our duty to future generation.</p>
            </div>
            <div className='mt-2 md:mt-0'>
              <h2 className='text-blue-500 text-lg md:text-2xl font-bold'>The first mate and his Skipper too will do?</h2>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>Well, the way they make shows is, they make one show. That show's called a pilot.</p>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>Then they show that show to the people who make shows, and on the strength <br/> of that one show they decide if they're going to make more shows. Some pilots <br/> get picked and become television programs.Some don't, become nothing. She <br/> starred in one of the ones that became nothing.</p>
            </div>
            <div className='mt-2 md:mt-0'>
              <h2 className='text-blue-500 text-lg md:text-2xl font-bold'>Is the Space Pope reptilian!?</h2>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>A flower in my garden, a mystery in my panties. Heart attacknever stopped old <br/>Big Bear. I didn't even know we were calling him Big Bear.</p>
            </div>
          </div>
          {/* left description section end */}
          {/* right description section start */}
          <div>
            <div className='mt-2 md:mt-0'>
              <h2 className='text-blue-500 text-lg md:text-2xl font-bold'>How much money you got on you?</h2>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>The first mate and his Skipper too will do their very best to make the others<br></br>comfortable in their tropic island nest.</p>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>Michael Knight a young loner on a crusade to champion the cause of the<br/>innocent. The helpless. The powerless in a world of criminals who operate<br/>above the law. Here he comes Here comes Speed Racer. He's a demon on <br/>wheels.</p>
            </div>
            <div className='mt-2 md:mt-0'>
              <h2 className='text-blue-500 text-lg md:text-2xl font-bold'>Galaxies Orion's sword globular star cluster?</h2>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>A business big enough that it could be listed on the NASDAQ goesbelly up.<br/>Disappears!</p>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>It ceases to exist without me. No, you clearly don't know who you're talking to,<br/>so let me clue you in.</p>
            </div>
            <div className='mt-2 md:mt-0'>
              <h2 className='text-blue-500 text-lg md:text-2xl font-bold'>When has justice ever been as simple as a rule book?</h2>
              <p className='text-slate-300 mt-4 text-sm md:text-lg'>This is not about revenge. This is about justice. A lot of things can change in<br/>twelve years, Admiral. Well, that's certainly good to know. About four years. I<br/>got tired of hearing how young I looked.</p>
            </div>
          </div>
          {/* right description section end */}
        </div>
        {/* description section end */}
      </div>
      {/* details section end */}
    </div>
  );
};

export default Blog;