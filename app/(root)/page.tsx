// 'use client';
// import Header from '@/components/Header';
// import Left from '@/components/Left';
// import Hero from '@/components/Left';
// import Nav from '@/components/Nav';
// import Right from '@/components/Right';
// import Image from 'next/image';
// import { useMemo, useState } from 'react';
// import { useScrollPosition } from '../UseScrollPosition.js';

import Degrowth from '@/components/right/Degrowth';
import Disawoval from '@/components/right/Disawoval';
import Hero from '@/components/right/Hero';
import Introduction from '@/components/right/Introduction';
import Strategies from '@/components/right/Strategies';
import Values from '@/components/right/Values';
import ImageBanner from '@/components/text/ImageBanner';

// // const header = ['the', 'degrowth', 'toolbox', 'for artistic', 'practices'];
// const nav = [
//   { section: 'a0', title: 'purpose' },
//   { section: 'a1', title: 'what is degrowth' },
//   { section: 'a2', title: 'considerations' },
//   { section: 'a3', title: 'questions' },
//   { section: 'b1', title: 'glossary' },
//   { section: 'b2', title: 'bibliography' },
//   { section: 'c1', title: 'contribute' },
//   { section: 'd1', title: 'download' },
//   { section: 'e1', title: 'colophon' },
// ];
// export default function Home() {
//   const [hideOnScroll, setHideOnScroll] = useState(true);
//   useScrollPosition(
//     ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
//       const isShow = currPos.y > prevPos.y;
//       if (isShow !== hideOnScroll) setHideOnScroll(isShow);
//     },
//     [hideOnScroll],
//     false,
//     false,
//     300
//   );
//   return useMemo(
//     () => (
//       <main>
//         <Nav content={nav} show={hideOnScroll} />
//         <div className='flex flex-row bg-white h-lvh overflow-y-hidden'>
//           <Left />
//           <Right />
//         </div>
//       </main>
//     ),
//     [hideOnScroll]
//   );
// }

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Degrowth />
      <ImageBanner srcUrl='/Images/2.jpg' />
      <Values />
      <ImageBanner srcUrl='/Images/3.jpg' />
      <Disawoval />
      <ImageBanner srcUrl='/Images/4.jpg' />
      <Strategies />
    </>
  );
}
