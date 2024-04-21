'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { SidebarContext } from './Context';

const Left = () => {
  const {
    section,
    setSection,
  }: { section: string | null; setSection: (newSection: string) => void } =
    useContext(SidebarContext);
  const pathName = usePathname();
  const [vHover, setVHover] = useState(false);
  const [dHover, setDHover] = useState(false);
  const [sHover, setSHover] = useState(false);
  return (
    <div className='flex-col h-lvh w-[38.5%] mt-[3rem] ml-[3.5rem] hidden xs:flex'>
      <Link
        href='/About'
        onClick={() => setSection('')}
        className={`font-semiMono ${pathName === '/About' && 'text-green'}  `}
      >
        About
      </Link>
      <ul className='flex flex-col mt-auto mb-[5rem]'>
        <li className='font-semiMono'>
          <Link
            href='/#intro'
            className={`font-semiMono 
            ${section === 'introduction' && 'text-green'} 
            `}
          >
            Intro
          </Link>
        </li>
        <li className='font-semiMono'>
          <Link
            href='/#degrowth'
            className={`font-semiMono 
            ${section === 'degrowth' && 'text-green'} 
            `}
          >
            Degrowth
          </Link>
        </li>
        <li
          className='font-semiMono'
          onMouseEnter={() => setVHover(true)}
          onMouseLeave={() => setVHover(false)}
        >
          <Link
            href='/#values'
            className={`font-semiMono 
            ${section === 'values' && 'text-green'} 
 
            `}
          >
            Values
          </Link>
          {section === 'values1' ||
          section === 'values2' ||
          section === 'values3' ||
          vHover ? (
            <ul className='ml-4 w-[16rem] leading-4'>
              <li>
                <Link
                  href='/#well-being'
                  className={`font-semiMono ${
                    section === 'values1' && 'text-green'
                  } 
                  text-[0.8rem] `}
                >
                  well-being
                </Link>
              </li>
              <li>
                <Link
                  href='/#care'
                  className={`font-semiMono
                  ${section === 'values2' && 'text-green'}
                    text-[0.8rem]
                    `}
                >
                  Care
                </Link>
              </li>
              <li>
                <Link
                  href='/#community'
                  className={`font-semiMono 
                  ${section === 'values3' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Community / Collectivity
                </Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li
          className='font-semiMono'
          onMouseEnter={() => setDHover(true)}
          onMouseLeave={() => setDHover(false)}
        >
          <Link href='/#disavowals' className={`font-semiMono  `}>
            Disavowals
          </Link>
          {section === 'efficiency' ||
          section === 'competition' ||
          section === 'hustle' ||
          section === 'museums' ||
          dHover ? (
            <ul className='ml-4 w-[16rem] leading-4'>
              <li>
                <Link
                  href='/#efficiency'
                  className={`font-semiMono ${
                    section === 'efficiency' && 'text-green'
                  } 
                  text-[0.8rem] `}
                >
                  Efficiency
                </Link>
              </li>
              <li>
                <Link
                  href='/#competition'
                  className={`font-semiMono
                  ${section === 'competition' && 'text-green'}
                    text-[0.8rem]
                    `}
                >
                  Competition
                </Link>
              </li>
              <li>
                <Link
                  href='/#hustle'
                  className={`font-semiMono 
                  ${section === 'hustle' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Hustle culture – or Constant overwork
                </Link>
              </li>
              <li>
                <Link
                  href='/#museums'
                  className={`font-semiMono 
                  ${section === 'museums' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  The over-reliance on grant-givers, galleries, museums,
                  collectors, and commissioners
                </Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
        <li
          className='font-semiMono'
          onMouseEnter={() => setSHover(true)}
          onMouseLeave={() => setSHover(false)}
        >
          <Link href='/#strategies' className={`font-semiMono  `}>
            Strategies
          </Link>
          {section === 'slowness' ||
          section === 'making' ||
          section === 'sharing' ||
          section === 'creating' ||
          section === 'organisation' ||
          section === 'redirection' ||
          section === 'militant' ||
          section === 'navigating' ||
          sHover ? (
            <ul className='ml-4 w-[17rem] leading-4'>
              <li>
                <Link
                  href='/#slowness'
                  className={`font-semiMono ${
                    section === 'slowness' && 'text-green'
                  } 
                  text-[0.8rem]`}
                >
                  Slowness / Laziness
                </Link>
              </li>
              <li>
                <Link
                  href='/#making'
                  className={`font-semiMono ${
                    section === 'making' && 'text-green'
                  } 
                  text-[0.8rem]`}
                >
                  Making care work visible
                </Link>
              </li>
              <li>
                <Link
                  href='/#sharing'
                  className={`font-semiMono
                  ${section === 'sharing' && 'text-green'}
                    text-[0.8rem]
                    `}
                >
                  Sharing resources
                </Link>
              </li>
              <li>
                <Link
                  href='/#creating'
                  className={`font-semiMono 
                  ${section === 'creating' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Creating alternative and independent spaces and platforms
                </Link>
              </li>
              <li>
                <Link
                  href='/#organisation'
                  className={`font-semiMono 
                  ${section === 'organisation' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Self-organisation
                </Link>
              </li>
              <li>
                <Link
                  href='/#redirection'
                  className={`font-semiMono 
                  ${section === 'redirection' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Redirection of institutional resources (or: being sneaky)
                </Link>
              </li>
              <li>
                <Link
                  href='/#militant'
                  className={`font-semiMono 
                  ${section === 'militant' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Militant optimism – or, utopianism as strategy
                </Link>
              </li>
              <li>
                <Link
                  href='/#navigating'
                  className={`font-semiMono 
                  ${section === 'navigating' && 'text-green'} 
                  text-[0.8rem]
            } `}
                >
                  Navigating contradictions – or, staying with the trouble
                </Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Left;
