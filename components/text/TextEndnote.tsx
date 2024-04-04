import React from 'react';

const TextEndnote = ({ children }: any) => {
  return (
    <p className='font-text  xs:text-[1.15rem] md:tex-[1.15rem] text-[0.75rem] mt-[1rem] xs:leading-5 leading-4 xs:w-[40rem] w-[89%]'>
      {children}
    </p>
  );
};

export default TextEndnote;
