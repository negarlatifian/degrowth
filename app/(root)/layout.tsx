'use client';

import { useMemo, useState } from 'react';
import { useScrollPosition } from '../UseScrollPosition';
import Nav from '@/components/Nav';
import Left from '@/components/Left';

const nav = [
  { section: 'a0', title: 'About' },
  { section: 'a1', title: 'Intro' },
  { section: 'a2', title: 'Degrowth' },
  { section: 'a3', title: 'Values' },
  { section: 'b1', title: 'Disavowals' },
  { section: 'b2', title: 'Strategies' },
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
      <main>
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
