'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Left = () => {
  const pathName = usePathname();
  return (
    <div className='flex-col h-lvh w-[38.5%] mt-[3rem] ml-[3.5rem] hidden xs:flex'>
      {/* <h2 className='font-display'>About</h2> */}
      <Link
        href='/About'
        className={`font-display ${pathName === '/About' && 'text-green'} `}
      >
        About
      </Link>
      <ul className='flex flex-col mt-auto mb-[5rem]'>
        <li className='font-display'>
          <Link
            href='/#intro'
            className={`font-display ${
              pathName === '/#intro' && 'text-green'
            } `}
          >
            Intro
          </Link>
        </li>
        <li className='font-display'>
          <Link
            href='/#degrowth'
            className={`font-display ${
              pathName === '/#degrowth' && 'text-green'
            } `}
          >
            Degrowth
          </Link>
        </li>
        <li className='font-display'>
          <Link
            href='/#values'
            className={`font-display ${
              pathName === '/#values' && 'text-green'
            } `}
          >
            Values
          </Link>
        </li>
        <li className='font-display'>
          <Link
            href='/#disavowals'
            className={`font-display ${
              pathName === '/#disavowals' && 'text-green'
            } `}
          >
            Disavowals
          </Link>
        </li>
        <li className='font-display'>
          <Link
            href='/#strategies'
            className={`font-display ${
              pathName === '/#strategies' && 'text-green'
            } `}
          >
            Strategies
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Left;
