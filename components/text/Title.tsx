import React from 'react';

const Title = ({ children }: { children: string }) => {
  return (
    <h2 className='font-display xs:text-[2.5rem] text-[1.5rem] xs:mb-[3rem] mb-[1.5rem]'>
      {children}
    </h2>
  );
};

export default Title;
