import React from 'react';

const Title = ({ children }: { children: string }) => {
  return <h2 className='font-display text-[2.5rem] mb-[3rem]'>{children}</h2>;
};

export default Title;
