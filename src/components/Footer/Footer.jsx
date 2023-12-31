// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
import {UserPlusIcon, PhotoIcon, MapPinIcon, LinkIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className='bg-gray-500'>
      {/* footer section start */}
      <div className='md:container md:mx-auto py-10'>
        <div className='grid md:grid-cols-5 grid-cols-1 md:gap-4'>
          {/* item one start */}
          <div className='text-center md:text-left py-2 md:py-0'>
            <h4 className='text-xl font-bold text-blue-700'><i>JobPortal</i></h4>
            <p className='md:text-sm text-slate-300 my-2'>There are many variations of passages<br/>of Lorem Ipsum , but the majority have<br/>suffered alteration in some form.</p>
            <div className='flex gap-8 ml-14 md:ml-0'>
              <UserPlusIcon className="h-7 w-7 text-blue-500 hover:bg-blue-700 hover:text-slate-300 duration-500 bg-slate-300 p-1 rounded-full" />
              <PhotoIcon className="h-7 w-7 text-blue-500 hover:bg-blue-700 hover:text-slate-300 duration-500 bg-slate-300 p-1 rounded-full" />
              <MapPinIcon className="h-7 w-7 text-blue-500 hover:bg-blue-700 hover:text-slate-300 duration-500 bg-slate-300 p-1 rounded-full" />
              <LinkIcon className="h-7 w-7 text-blue-500 hover:bg-blue-700 hover:text-slate-300 duration-500 bg-slate-300 p-1 rounded-full" />
            </div>
          </div>
          {/* item one end */}
          {/* item two start */}
          <div className='md:ml-10 text-center md:text-left py-2 md:py-0'>
            <h4 className='text-xl font-bold text-blue-700'><i>Company</i></h4>
            <p className='md:text-sm text-slate-300 md:mt-2'>About Us</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Work</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Latest News</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Careers</p>
          </div>
          {/* item two end */}
          {/* item three start */}
          <div className='md:ml-10 text-center md:text-left py-2 md:py-0'>
            <h4 className='text-xl font-bold text-blue-700'><i>Product</i></h4>
            <p className='md:text-sm text-slate-300 md:mt-2'>Prototype</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Plans & Pricing</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Customers</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Integrations</p>
          </div>
          {/* item three end */}
          {/* item four start */}
          <div className='md:ml-10 text-center md:text-left py-2 md:py-0'>
            <h4 className='text-xl font-bold text-blue-700'><i>Support</i></h4>
            <p className='md:text-sm text-slate-300 md:mt-2'>Help Desk</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Sales</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Become a partner</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>Developers</p>
          </div>
          {/* item four end */}
          {/* item five start */}
          <div className='md:ml-10 text-center md:text-left py-2 md:py-0'>
            <h4 className='text-xl font-bold text-blue-700'><i>Contact</i></h4>
            <p className='md:text-sm text-slate-300 md:mt-2'>C-10,Ishakhan,Ctg</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>+880 16810 64721</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>www.jobportal.com</p>
            <p className='md:text-sm text-slate-300 md:mt-1'>findjob@gmail.com</p>
          </div>
          {/* item five end */}
        </div>
        {/* divider section start */}
        <hr className='text-slate-300 md:my-8 my-4'></hr>
        {/* divider section end */}
        {/* end section start */}
        <div className='md:flex md:justify-between text-center'>
          <div>
            <span className='font-semibold text-base text-slate-300'><i>@2023 CareerHub. All Rights Reserved</i></span>
          </div>
          <div>
            <span className='font-semibold text-base text-slate-300'><i>Power By jobPortal</i></span>
          </div>
          
        </div>
        {/* end section end */}
      </div>
      {/* footer section end */}
    </div>
  );
};

export default Footer;