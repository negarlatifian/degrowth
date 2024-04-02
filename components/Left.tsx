import Link from 'next/link';
import React from 'react';

const Left = () => {
  return (
    <div className='flex-col h-lvh w-[38.5%] mt-[3rem] ml-[3.5rem] hidden xs:flex'>
      {/* <h2 className='font-display'>About</h2> */}
      <Link href='/About' className='font-display'>
        About
      </Link>
      <ul className='flex flex-col mt-auto mb-[5rem]'>
        <li className='font-display'>Intro</li>
        <li className='font-display'>Degrowth</li>
        <li className='font-display'>Values</li>
        <li className='font-display'>Disavowals</li>
        <li className='font-display'>Strategies</li>
      </ul>
    </div>
  );
};

export default Left;
