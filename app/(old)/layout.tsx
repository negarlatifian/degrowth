'use client';

import { useMemo, useState } from 'react';
import { useScrollPosition } from '@/app/UseScrollPosition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [visibleSection, setVisibleSection] = useState(null);
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
    () => <main className='overflow-x-hidden'>{children}</main>,
    [hideOnScroll]
  );
}
