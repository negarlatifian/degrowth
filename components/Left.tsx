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
        <li className='font-display'>
          <Link href='/#intro'>Intro</Link>
        </li>
        <li className='font-display'>
          <Link href='/#degrowth'>Degrowth</Link>
        </li>
        <li className='font-display'>
          <Link href='/#values'>Values</Link>
        </li>
        <li className='font-display'>
          <Link href='/#disavowals'>Disavowals</Link>
        </li>
        <li className='font-display'>
          <Link href='/#strategies'>Strategies</Link>
        </li>
      </ul>
    </div>
  );
};

export default Left;
