import React from 'react';

const Sup = ({ children }: { children: any }) => {
  return (
    <sup className='align-baseline font-text text-[0.7rem]'>{children}</sup>
  );
};

export default Sup;
