import React from 'react';

const Subtitle = ({
  children,
  ref,
  id,
}: {
  children: any;
  ref: any;
  id: string;
}) => {
  return (
    <h3
      className='font-text xs:mr-[17.5rem] w-[75%] italic ml-[2rem] xs:text-[1.1rem] text-[0.75rem] mb-[1rem] leading-5'
      ref={ref}
      id={id}
    >
      {children}{' '}
    </h3>
  );
};

export default Subtitle;
