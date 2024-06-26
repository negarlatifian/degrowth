import React from 'react';

const Quote = ({ children }: any) => {
  return (
    <p className='font-text italic xs:w-[34rem] w-[75%] ml-[2rem] mt-[1.5rem] mb-[1rem] xs:text-[1rem] text-[0.75rem] xs:leading-5 leading-[0.85rem] '>
      {children}
    </p>
  );
};

export default Quote;
