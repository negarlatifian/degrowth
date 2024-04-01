import React from 'react';

const Text = ({ children }: any) => {
  return (
    <p className='font-text mr-[17.5rem] text-[1.1rem] mb-[1rem] leading-5'>
      {children}
    </p>
  );
};

export default Text;
