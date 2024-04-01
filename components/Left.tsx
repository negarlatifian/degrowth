import React from 'react';

const Left = () => {
  return (
    <div className='flex flex-col h-lvh w-1/3 mt-[3rem] ml-[3.5rem]'>
      <h2 className='font-display'>About</h2>
      <ul className='flex flex-col mt-auto mb-[5rem]'>
        <li className='font-display'>Intro</li>
        <li className='font-display'>Degrowth</li>
        <li className='font-display'>Values</li>
        <li className='font-display'>Disavowals</li>
        <li className='font-display'>Strategies</li>
      </ul>
    </div>
  );
};

export default Left;
