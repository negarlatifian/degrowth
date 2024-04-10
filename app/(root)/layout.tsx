'use client';

import { useMemo, useState } from 'react';
import { useScrollPosition } from '../UseScrollPosition';
import Nav from '@/components/Nav';
import Left from '@/components/Left';

const nav = [
  { section: 'a0', title: 'About', href: '/About' },
  { section: 'a1', title: 'Intro', href: '/#intro' },
  { section: 'a2', title: 'Degrowth', href: '/#degrowth' },
  { section: 'a3', title: 'Values', href: '/#values' },
  { section: 'b1', title: 'Disavowals', href: '/#disavowals' },
  { section: 'b2', title: 'Strategies', href: '/#strategies' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );
  return useMemo(
    () => (
      <main className='overflow-x-hidden'>
        <Nav content={nav} show={hideOnScroll} />
        <div className='flex flex-row bg-white h-lvh overflow-y-hidden'>
          <Left />
          <div className='flex flex-col w-[100%] sm:w-[61.5%] overflow-y-scroll'>
            {children}
          </div>
        </div>
      </main>
    ),
    [hideOnScroll]
  );
}
