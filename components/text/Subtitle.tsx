import React from 'react';

const Subtitle = ({ children }: any) => {
  return (
    <h3 className='font-text mr-[17.5rem] italic ml-[2rem] text-[1.1rem] mb-[1rem] leading-5'>
      {children}{' '}
    </h3>
  );
};

export default Subtitle;
