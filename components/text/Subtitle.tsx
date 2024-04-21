import React from 'react';

const Subtitle = ({
  children,
  SubRef,
  id,
}: {
  children: any;
  SubRef?: any;
  id?: string;
}) => {
  return (
    <h3
      className='font-text xs:mr-[17.5rem] w-[75%] italic ml-[2rem] xs:text-[1.1rem] text-[0.75rem] mb-[0.5rem] mt-[4rem] leading-5'
      ref={SubRef}
      id={id}
    >
      {children}{' '}
    </h3>
  );
};

export default Subtitle;
