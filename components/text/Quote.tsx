import React from 'react';

const Quote = ({ children }: any) => {
  return (
    <p className='font-text italic mr-[10rem] ml-[2rem] mt-[1.5rem] mb-[1rem] text-[1.1rem] leading-5 '>
      {children}
    </p>
  );
};

export default Quote;
