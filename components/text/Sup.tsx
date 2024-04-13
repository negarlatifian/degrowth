'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { IconX } from '../NavIcons';
import Text from './Text';

const Sup = ({
  children,
  className,
  content,
}: {
  children: any;
  className?: string;
  content: string;
}) => {
  const [open, setOpen] = useState(false);

  const openEndnoteHandler = () => {
    setOpen(!open);
    console.log('clicked', open);
  };
  return (
    <div
      onClick={openEndnoteHandler}
      className='xs:cursor-default cursor-pointer inline'
    >
      <sup
        className={'align-baseline font-text text-[0.7rem]' + ' ' + className}
      >
        {children}
      </sup>
      {open && (
        <div className='z-10 fixed border-solid border-2 border-[#000000] bg-[#ffffff] px-[2rem] py-[2rem] top-[40vh] right-[10vw] left-[10vw] flex xs:hidden '>
          <div className='flex items-center justify-center px-5'>
            <Text className='mb-0'>{content}</Text>
          </div>
          <div onClick={() => setOpen(false)}>
            <h1 className='absolute top-2 right-2'>X</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sup;
