'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Left = () => {
  const pathName = usePathname();
  return (
    <div className='flex-col h-lvh w-[38.5%] mt-[3rem] ml-[3.5rem] hidden xs:flex'>
      <Link
        href='/About'
        className={`font-semiMono ${pathName === '/About' && 'text-green'} `}
      >
        About
      </Link>
      <ul className='flex flex-col mt-auto mb-[5rem]'>
        <li className='font-semiMono'>
          <Link
            href='/#intro'
            className={`font-semiMono ${
              pathName === '/#intro' && 'text-green'
            } `}
          >
            Intro
          </Link>
        </li>
        <li className='font-semiMono'>
          <Link
            href='/#degrowth'
            className={`font-semiMono ${
              pathName === '/#degrowth' && 'text-green'
            } `}
          >
            Degrowth
          </Link>
        </li>
        <li className='font-semiMono'>
          <Link
            href='/#values'
            className={`font-semiMono ${
              pathName === '/#values' && 'text-green'
            } `}
          >
            Values
          </Link>
        </li>
        <li className='font-semiMono'>
          <Link
            href='/#disavowals'
            className={`font-semiMono ${
              pathName === '/#disavowals' && 'text-green'
            } `}
          >
            Disavowals
          </Link>
        </li>
        <li className='font-semiMono'>
          <Link
            href='/#strategies'
            className={`font-semiMono ${
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
